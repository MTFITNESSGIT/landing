import { MercadoPagoConfig, Preference } from "mercadopago";
import { NextRequest } from "next/server";

const mercadopago = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
});

export async function POST(req: NextRequest) {
  const data = await req.json();

  try {
    const response = await new Preference(mercadopago).create({
      body: {
        items: [
          {
            id: "Plan",
            title: `Plan ${data.title}`,
            unit_price: data.price,
            quantity: 1,
          },
        ],
        metadata: { data },
      },
    });

    return new Response(JSON.stringify({ url: response.init_point }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        message: "Internal Server Error",
        error: error.message,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
