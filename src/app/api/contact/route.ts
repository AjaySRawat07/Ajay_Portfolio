import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = 'nodejs';

function escapeHtml(unsafe: string) {
  if (typeof unsafe !== 'string') return '';
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, website } = body;

    if (website) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    if (message.length > 5000) {
      return NextResponse.json({ error: "Message must be under 5000 characters" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message);

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM as string,
      to: process.env.CONTACT_TO as string,
      replyTo: safeEmail,
      subject: `New portfolio message from ${safeName}`,
      html: `<p><strong>Name:</strong> ${safeName}</p>
             <p><strong>Email:</strong> ${safeEmail}</p>
             <p><strong>Message:</strong></p>
             <p>${safeMessage.replace(/\n/g, '<br/>')}</p>`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
    }

    return NextResponse.json({ ok: true, data }, { status: 200 });
  } catch (err) {
    console.error("API Error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
