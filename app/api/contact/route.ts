import { NextResponse } from "next/server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { senderEmail, message } = await req.json();

    if (
      !senderEmail ||
      !message ||
      typeof message !== "string" ||
      typeof senderEmail !== "string"
    )
      return new NextResponse("Missing field(s)", { status: 400 });

    await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: "knavinavadhani@gmail.com",
      subject: `Message from ${senderEmail}`,
      reply_to: senderEmail,
      text: `${senderEmail} has sent you the following message:\n\n${message}`,
    });

    return new NextResponse("Contacted Navin sucessfully.", { status: 200 });
  } catch (err) {
    console.log("[CONTACT_POST_ERROR]", err);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
