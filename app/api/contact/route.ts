import { NextResponse } from "next/server";
import { contactSchema } from "../../../lib/validations";
import { rateLimit } from "../../../lib/rate-limit";

const limiter = rateLimit();

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    
    // 5 requests per 10 minutes
    const isAllowed = limiter.check(ip, 5, 10 * 60 * 1000);
    if (!isAllowed) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }

    const body = await req.json();

    // Honeypot check
    if (body._gotcha) {
      return NextResponse.json({ success: true });
    }

    const validatedData = contactSchema.parse(body);

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL;
    const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL;

    if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
      return NextResponse.json(
        { error: "Email service is not configured. Please try again later." },
        { status: 500 }
      );
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: CONTACT_TO_EMAIL,
        subject: `Portfolio Contact: ${validatedData.subject}`,
        text: `Name: ${validatedData.name}\nEmail: ${validatedData.email}\n\nMessage:\n${validatedData.message}`,
        reply_to: validatedData.email,
      }),
    });

    if (!res.ok) {
      throw new Error("Failed to send email via Resend");
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    if (error.name === "ZodError") {
      return NextResponse.json({ error: "Validation failed", details: error.errors }, { status: 400 });
    }
    
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
