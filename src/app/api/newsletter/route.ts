import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email presence and format
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { success: false, message: "Email address is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const sanitizedEmail = email.trim().toLowerCase();

    // Production hook: Connect to Supabase, Resend, or Brevo here
    // Example: await resend.contacts.create({ email: sanitizedEmail, audienceId: '...' });
    console.log(`[Newsletter Subscription] New subscriber: ${sanitizedEmail}`);

    return NextResponse.json(
      {
        success: true,
        message: "Successfully subscribed to Data & AI engineering insights!",
        email: sanitizedEmail,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Newsletter API Error]", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while processing your request.",
      },
      { status: 500 }
    );
  }
}
