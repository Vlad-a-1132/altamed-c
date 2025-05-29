import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const doctorId = searchParams.get('doctorId');
    const patientId = searchParams.get('patientId');
    const date = searchParams.get('date');
    
    const whereClause: any = {};
    
    if (doctorId) {
      whereClause.doctorId = parseInt(doctorId);
    }
    
    if (patientId) {
      whereClause.patientId = parseInt(patientId);
    }
    
    if (date) {
      const startDate = new Date(date);
      startDate.setHours(0, 0, 0, 0);
      
      const endDate = new Date(date);
      endDate.setHours(23, 59, 59, 999);
      
      whereClause.date = {
        gte: startDate,
        lte: endDate,
      };
    }
    
    const appointments = await prisma.appointment.findMany({
      where: whereClause,
      include: {
        doctor: true,
        patient: true,
      },
      orderBy: {
        date: 'asc',
      },
    });
    
    return NextResponse.json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch appointments' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Check if patient exists, create if not
    let patient = await prisma.patient.findUnique({
      where: { email: body.email },
    });
    
    if (!patient) {
      patient = await prisma.patient.create({
        data: {
          name: body.fullName,
          email: body.email,
          phone: body.phone,
        },
      });
    }
    
    // Create the appointment
    const appointment = await prisma.appointment.create({
      data: {
        date: new Date(body.appointmentDate + 'T' + body.appointmentTime),
        patientId: patient.id,
        doctorId: parseInt(body.doctorId),
        status: 'pending',
        notes: body.notes || null,
      },
      include: {
        doctor: true,
        patient: true,
      },
    });
    
    return NextResponse.json(appointment, { status: 201 });
  } catch (error) {
    console.error('Error creating appointment:', error);
    return NextResponse.json(
      { error: 'Failed to create appointment' },
      { status: 500 }
    );
  }
} 