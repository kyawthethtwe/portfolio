// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body: ContactFormData = await request.json();
    const { name, email, message } = body;

    // Validate the form data
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Use a verified domain in production
      to: [process.env.EMAIL_USER || 'kyawthethtwe595@gmail.com'],
      subject: `Portfolio Contact: Message from ${name}`,
      replyTo: email,
      html: `
        <h2>New Contact Message from Portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Error sending email with Resend:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Return success response
    return NextResponse.json(
      { message: 'Email sent successfully!', id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
