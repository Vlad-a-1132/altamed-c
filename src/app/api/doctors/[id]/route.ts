import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const doctorId = parseInt(params.id);
    
    const doctor = await prisma.doctor.findUnique({
      where: {
        id: doctorId,
      },
      include: {
        appointments: {
          include: {
            patient: true
          }
        }
      }
    });
    
    if (!doctor) {
      return NextResponse.json(
        { error: 'Doctor not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(doctor);
  } catch (error) {
    console.error('Error fetching doctor:', error);
    return NextResponse.json(
      { error: 'Failed to fetch doctor' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const doctorId = parseInt(params.id);
    const body = await request.json();
    
    const doctor = await prisma.doctor.update({
      where: {
        id: doctorId,
      },
      data: {
        name: body.name,
        specialization: body.specialization,
        photo: body.photo,
        description: body.description,
        experience: body.experience ? parseInt(body.experience) : null,
      },
    });
    
    return NextResponse.json(doctor);
  } catch (error) {
    console.error('Error updating doctor:', error);
    return NextResponse.json(
      { error: 'Failed to update doctor' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const doctorId = parseInt(params.id);
    
    // Check if doctor has any appointments
    const appointments = await prisma.appointment.findMany({
      where: {
        doctorId: doctorId
      }
    });
    
    if (appointments.length > 0) {
      return NextResponse.json(
        { error: 'Cannot delete doctor with existing appointments' },
        { status: 400 }
      );
    }
    
    // Delete the doctor
    await prisma.doctor.delete({
      where: {
        id: doctorId,
      },
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting doctor:', error);
    return NextResponse.json(
      { error: 'Failed to delete doctor' },
      { status: 500 }
    );
  }
} 