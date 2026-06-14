import { NextResponse } from "next/server";
import Razorpay from "razorpay";

function getRazorpayClient() {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    throw new Error("Razorpay credentials are not configured.");
  }

  return new Razorpay({
    key_id: keyId,
    key_secret: keySecret,
  });
}

export async function POST(req: Request) {
  try {
    const razorpay = getRazorpayClient();
    const { amount, currency = "INR", receipt, notes } = await req.json();

    const order = await razorpay.orders.create({
      amount: amount * 100, // paise
      currency,
      receipt: receipt || `doxora_${Date.now()}`,
      notes: notes || {},
    });

    return NextResponse.json({ orderId: order.id, amount: order.amount, currency: order.currency });
  } catch (err) {
    console.error("Razorpay error:", err);
    const message = err instanceof Error ? err.message : "Failed to create order";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
