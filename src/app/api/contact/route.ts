import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // TODO: Send email via SendGrid / Nodemailer / Resend
    // For now, log and return success
    console.log("Contact form submission:", { name, email, phone, subject, message });

    return NextResponse.json({ success: true, message: "Your message has been received. We will contact you shortly." });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
