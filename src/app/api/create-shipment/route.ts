import { NextResponse } from "next/server";

let shiprocketToken: string | null = null;
let tokenExpiry: number | null = null;

async function getShiprocketToken() {
  if (shiprocketToken && tokenExpiry && Date.now() < tokenExpiry) {
    return shiprocketToken;
  }

  const res = await fetch("https://apiv2.shiprocket.in/v1/external/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: process.env.SHIPROCKET_EMAIL,
      password: process.env.SHIPROCKET_PASSWORD,
    }),
  });

  const data = await res.json();
  shiprocketToken = data.token;
  tokenExpiry = Date.now() + 9 * 24 * 60 * 60 * 1000; // 9 days
  return shiprocketToken;
}

export async function POST(req: Request) {
  try {
    const orderData = await req.json();
    const token = await getShiprocketToken();

    const res = await fetch("https://apiv2.shiprocket.in/v1/external/orders/create/adhoc", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        order_id: orderData.orderId,
        order_date: new Date().toISOString().split("T")[0],
        pickup_location: "Primary",
        channel_id: "",
        comment: "Doxora Premium Gift Hamper",
        billing_customer_name: orderData.billing.name,
        billing_last_name: "",
        billing_address: orderData.billing.address,
        billing_city: orderData.billing.city,
        billing_pincode: orderData.billing.pincode,
        billing_state: orderData.billing.state,
        billing_country: "India",
        billing_email: orderData.billing.email,
        billing_phone: orderData.billing.phone,
        shipping_is_billing: true,
        order_items: orderData.items.map((item: { name: string; sku: string; units: number; selling_price: number }) => ({
          name: item.name,
          sku: item.sku,
          units: item.units,
          selling_price: item.selling_price,
          discount: 0,
          tax: 0,
          hsn: 0,
        })),
        payment_method: orderData.paymentMethod || "Prepaid",
        sub_total: orderData.subtotal,
        length: 30,
        breadth: 20,
        height: 15,
        weight: 1.5,
      }),
    });

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("Shiprocket error:", err);
    return NextResponse.json({ error: "Failed to create shipment" }, { status: 500 });
  }
}
