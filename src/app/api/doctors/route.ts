import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '100');
    const offset = parseInt(searchParams.get('offset') || '0');
    
    const doctors = await prisma.doctor.findMany({
      take: limit,
      skip: offset,
      orderBy: {
        name: 'asc',
      },
    });
    
    return NextResponse.json(doctors);
  } catch (error) {
    console.error('Error fetching doctors:', error);
    return NextResponse.json(
      { error: 'Failed to fetch doctors' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const doctor = await prisma.doctor.create({
      data: {
        name: body.name,
        specialization: body.specialization,
        photo: body.photo,
        description: body.description,
        experience: body.experience ? parseInt(body.experience) : null,
      },
    });
    
    return NextResponse.json(doctor, { status: 201 });
  } catch (error) {
    console.error('Error creating doctor:', error);
    return NextResponse.json(
      { error: 'Failed to create doctor' },
      { status: 500 }
    );
  }
} 