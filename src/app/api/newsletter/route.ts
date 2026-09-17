import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email presence and format
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { success: false, message: "L'adresse email est requise." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, message: "Veuillez fournir une adresse email valide." },
        { status: 400 }
      );
    }

    const sanitizedEmail = email.trim().toLowerCase();
    const isoDate = new Date().toISOString();

    const webhookUrl = process.env.GOOGLE_SHEETS_NEWSLETTER_WEBHOOK_URL;

    if (!webhookUrl) {
      console.warn(
        "[Newsletter API] GOOGLE_SHEETS_NEWSLETTER_WEBHOOK_URL is not defined in environment variables."
      );
      return NextResponse.json(
        {
          success: false,
          message:
            "Le service de newsletter n'est pas encore configuré (URL Google Apps Script manquante dans .env.local).",
        },
        { status: 500 }
      );
    }

    // Call Google Apps Script Web App webhook
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: sanitizedEmail,
        date: isoDate,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("[Newsletter API Error Google Sheets]", response.status, errorText);
      return NextResponse.json(
        {
          success: false,
          message: "Échec de l'enregistrement dans la feuille Google Sheets.",
        },
        { status: 502 }
      );
    }

    console.log(`[Newsletter Subscription] New subscriber added: ${sanitizedEmail}`);

    return NextResponse.json(
      {
        success: true,
        message: "Merci pour votre inscription !",
        email: sanitizedEmail,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Newsletter API Error]", error);
    return NextResponse.json(
      {
        success: false,
        message: "Une erreur est survenue lors du traitement de la requête.",
      },
      { status: 500 }
    );
  }
}

