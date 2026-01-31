import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { siteConfig } from "@/lib/portfolio";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  let payload: ContactPayload;

  try {
    payload = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const name = (payload?.name ?? "").trim();
  const email = (payload?.email ?? "").trim();
  const message = (payload?.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email." }, { status: 400 });
  }

  const host = process.env.SMTP_HOST;
  const portRaw = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO || siteConfig.email;
  const from = process.env.CONTACT_FROM || user;
  const secureRaw = process.env.SMTP_SECURE;
  const tlsRejectUnauthorizedRaw = process.env.SMTP_TLS_REJECT_UNAUTHORIZED;

  if (!host || !portRaw || !user || !pass || !to || !from) {
    return NextResponse.json(
      {
        error:
          "Email is not configured on this server. Missing SMTP_* env vars.",
      },
      { status: 500 }
    );
  }

  const port = Number(portRaw);
  if (!Number.isFinite(port)) {
    return NextResponse.json(
      { error: "SMTP_PORT must be a number." },
      { status: 500 }
    );
  }

  const secure = secureRaw ? secureRaw === "true" : port === 465;
  const tlsRejectUnauthorized =
    tlsRejectUnauthorizedRaw ? tlsRejectUnauthorizedRaw !== "false" : true;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    tls: {
      rejectUnauthorized: tlsRejectUnauthorized,
    },
  });

  const subject = `Portfolio contact: ${name}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    await transporter.verify();
    await transporter.sendMail({
      to,
      from,
      replyTo: email,
      subject,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    const details =
      process.env.NODE_ENV !== "production"
        ? err instanceof Error
          ? err.message
          : String(err)
        : undefined;

    return NextResponse.json(
      {
        error: "Failed to send message.",
        details,
        hint: "Check SMTP credentials, CONTACT_FROM, and provider SMTP settings.",
      },
      { status: 500 }
    );
  }
}
