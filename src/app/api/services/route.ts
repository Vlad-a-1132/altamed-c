import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const categoryId = searchParams.get('categoryId');
    const limit = parseInt(searchParams.get('limit') || '100');
    const offset = parseInt(searchParams.get('offset') || '0');
    
    let whereClause = {};
    if (categoryId) {
      whereClause = { categoryId: parseInt(categoryId) };
    }
    
    const services = await prisma.service.findMany({
      where: whereClause,
      take: limit,
      skip: offset,
      orderBy: {
        name: 'asc',
      },
      include: {
        category: true,
      },
    });
    
    return NextResponse.json(services);
  } catch (error) {
    console.error('Error fetching services:', error);
    return NextResponse.json(
      { error: 'Failed to fetch services' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const service = await prisma.service.create({
      data: {
        name: body.name,
        description: body.description,
        price: parseFloat(body.price),
        categoryId: parseInt(body.categoryId),
      },
      include: {
        category: true,
      },
    });
    
    return NextResponse.json(service, { status: 201 });
  } catch (error) {
    console.error('Error creating service:', error);
    return NextResponse.json(
      { error: 'Failed to create service' },
      { status: 500 }
    );
  }
} 