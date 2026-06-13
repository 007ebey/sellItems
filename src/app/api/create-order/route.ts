import { NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(req: Request) {
  try {
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
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
  }
}
