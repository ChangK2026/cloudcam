import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, phone, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"CloudCam Website" <${process.env.GMAIL_USER}>`,
      to: 'info@cloudcam.co.nz',
      replyTo: email,
      subject: `New Enquiry from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:15px;">
          <tr><td style="padding:8px;border:1px solid #e2e8f0;background:#f8fafc;width:140px"><strong>Name</strong></td><td style="padding:8px;border:1px solid #e2e8f0">${firstName} ${lastName}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e2e8f0;background:#f8fafc"><strong>Email</strong></td><td style="padding:8px;border:1px solid #e2e8f0"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px;border:1px solid #e2e8f0;background:#f8fafc"><strong>Phone</strong></td><td style="padding:8px;border:1px solid #e2e8f0">${phone || '—'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #e2e8f0;background:#f8fafc"><strong>Message</strong></td><td style="padding:8px;border:1px solid #e2e8f0">${message || '—'}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Mail error:', err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
