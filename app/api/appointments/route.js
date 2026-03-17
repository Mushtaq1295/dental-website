import { connectDB } from '@/lib/mongodb';
import Appointment from '@/models/Appointment';

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const { name, email, phone, service, date, time, message } = body;

    // Basic validation
    if (!name || !email || !phone || !service || !date || !time) {
      return Response.json(
        { success: false, error: 'All required fields must be filled.' },
        { status: 400 }
      );
    }

    const appointment = await Appointment.create({
      name, email, phone, service, date, time, message,
    });

    return Response.json({
      success: true,
      message: 'Appointment booked successfully! We will confirm shortly.',
      id: appointment._id,
    });
  } catch (err) {
    console.error('Appointment error:', err);
    return Response.json(
      { success: false, error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    return Response.json({ success: true, appointments });
  } catch (err) {
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}