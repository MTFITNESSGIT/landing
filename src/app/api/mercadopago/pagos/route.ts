import MercadoPagoConfig, { Payment } from "mercadopago";
import { revalidatePath } from "next/cache";

const mercadopago = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
});

export async function POST(request: Request) {
  console.log("llegue");
  // Obtenemos el cuerpo de la petición que incluye información sobre la notificación
  const body: { data: { id: string } } = await request.json();

  // Obtenemos el pago
  const payment = await new Payment(mercadopago).get({ id: body.data.id });

  console.log(payment, "payment");

  // Si se aprueba, agregamos el mensaje
  if (payment.status === "approved") {
    revalidatePath("/");
  }

  // Respondemos con un estado 200 para indicarle que la notificación fue recibida
  return new Response(null, { status: 200 });
}
