import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, occasion, budget, quantity, message } = body;

    if (!name || !email || !phone || !occasion) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // TODO: Save to DB and notify sales team
    console.log("Quote request:", { name, email, phone, company, occasion, budget, quantity, message });

    return NextResponse.json({
      success: true,
      message: "Your quote request has been received. Our gifting concierge will reach out within 2 business hours.",
    });
  } catch (err) {
    console.error("Quote request error:", err);
    return NextResponse.json({ error: "Failed to submit quote request" }, { status: 500 });
  }
}
