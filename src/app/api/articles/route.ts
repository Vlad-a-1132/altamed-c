import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = parseInt(searchParams.get('offset') || '0');
    
    const articles = await prisma.article.findMany({
      take: limit,
      skip: offset,
      orderBy: {
        createdAt: 'desc',
      },
    });
    
    const total = await prisma.article.count();
    
    return NextResponse.json({
      articles,
      total,
      limit,
      offset,
    });
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json(
      { error: 'Failed to fetch articles' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const article = await prisma.article.create({
      data: {
        title: body.title,
        content: body.content,
        image: body.image,
      },
    });
    
    return NextResponse.json(article, { status: 201 });
  } catch (error) {
    console.error('Error creating article:', error);
    return NextResponse.json(
      { error: 'Failed to create article' },
      { status: 500 }
    );
  }
} 