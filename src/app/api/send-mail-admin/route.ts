import { Resend } from "resend";
import { NextRequest } from "next/server";
import EmailAdmin from "../../../components/Emails/EmailAdmin";

const resend = new Resend(process.env.RESEND_KEY);

export async function POST(request: NextRequest) {
  const { name, email, dni } = await request.json();

  try {
    await resend.emails.send({
      from: "admin@matisanchezsorondo.com",
      to: ["juansegundomartinez7@gmail.com"],
      subject: `Mati! ${name} se ha unido al equipo!`,
      react: EmailAdmin({
        user: name,
        dni: dni,
        email: email,
      }),
    });

    return Response.json({ message: "Email Sent" }, { status: 200 });
  } catch (error) {
    return Response.json({ message: "Error", error }, { status: 500 });
  }
}
