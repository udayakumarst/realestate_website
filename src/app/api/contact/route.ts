import { NextResponse } from "next/server";

type Enquiry = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  budget?: string;
  message?: string;
  company?: string; // honeypot
};

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let body: Enquiry;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Silently accept bot submissions without processing them.
  if (clean(body.company, 100)) return NextResponse.json({ ok: true });

  const enquiry = {
    name: clean(body.name, 100),
    phone: clean(body.phone, 20),
    email: clean(body.email, 150),
    service: clean(body.service, 100),
    budget: clean(body.budget, 50),
    message: clean(body.message, 2000),
  };

  if (!enquiry.name || !enquiry.phone || !enquiry.message) {
    return NextResponse.json({ error: "Please fill in your name, phone and message." }, { status: 400 });
  }
  if (!/^[+\d][\d\s-]{6,19}$/.test(enquiry.phone)) {
    return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 });
  }
  if (enquiry.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiry.email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  // TODO: deliver the enquiry — e.g. send an email (Resend, SMTP) or save to a database / Google Sheet.
  // For now it is logged to the server console so you can see submissions while developing.
  console.log("New enquiry:", enquiry);

  return NextResponse.json({ ok: true });
}
