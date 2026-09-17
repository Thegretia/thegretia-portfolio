import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Server-side validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { success: false, message: "Le nom est obligatoire." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.trim()) {
      return NextResponse.json(
        { success: false, message: "L'adresse email est obligatoire." },
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

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { success: false, message: "Le message est obligatoire." },
        { status: 400 }
      );
    }

    const sanitizedName = name.trim();
    const sanitizedEmail = email.trim().toLowerCase();
    const sanitizedSubject = subject?.trim() || "Demande de contact via le Portfolio";
    const sanitizedMessage = message.trim();

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.warn(
        "[Contact API Warning] RESEND_API_KEY non définie dans les variables d'environnement."
      );
      return NextResponse.json(
        {
          success: false,
          message:
            "Le service d'envoi d'email n'est pas encore configuré (Clé RESEND_API_KEY manquante dans .env.local).",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "thomsp2001@gmail.com";
    const fromEmail = process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

    const dateFormatted = new Date().toLocaleString("fr-FR", {
      dateStyle: "full",
      timeStyle: "short",
    });

    const emailSubject = `[Portfolio Contact] ${sanitizedSubject}`;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #090A0F; color: #e2e8f0; padding: 24px; margin: 0; }
            .card { background-color: #11131f; border: 1px solid #1e293b; border-radius: 12px; padding: 24px; max-width: 600px; margin: 0 auto; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5); }
            .header { border-bottom: 1px solid #1e293b; padding-bottom: 16px; margin-bottom: 20px; }
            .title { color: #10b981; font-size: 20px; font-weight: bold; margin: 0 0 6px 0; }
            .subtitle { color: #94a3b8; font-size: 13px; margin: 0; }
            .field { margin-bottom: 16px; }
            .label { font-size: 11px; text-transform: uppercase; tracking: 1px; color: #64748b; font-weight: 600; margin-bottom: 4px; display: block; }
            .value { font-size: 14px; color: #f8fafc; font-weight: 500; }
            .message-box { background-color: #090A0F; border: 1px solid #334155; border-radius: 8px; padding: 16px; font-size: 14px; line-height: 1.6; color: #cbd5e1; white-space: pre-wrap; margin-top: 6px; }
            .footer { border-top: 1px solid #1e293b; padding-top: 16px; margin-top: 24px; font-size: 12px; color: #64748b; text-align: center; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <h2 class="title">Nouveau Message depuis le Portfolio</h2>
              <p class="subtitle">Reçu le ${dateFormatted}</p>
            </div>
            <div class="field">
              <span class="label">Expéditeur</span>
              <div class="value">${sanitizedName} &lt;<a href="mailto:${sanitizedEmail}" style="color: #34d399; text-decoration: none;">${sanitizedEmail}</a>&gt;</div>
            </div>
            <div class="field">
              <span class="label">Sujet / Type de projet</span>
              <div class="value">${sanitizedSubject}</div>
            </div>
            <div class="field">
              <span class="label">Message / Besoins du projet</span>
              <div class="message-box">${sanitizedMessage.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
            </div>
            <div class="footer">
              Vous pouvez répondre directement à cet email pour contacter <strong>${sanitizedName}</strong>.
            </div>
          </div>
        </body>
      </html>
    `;

    const textContent = `
Nouveau Message depuis le Portfolio
-----------------------------------
Date: ${dateFormatted}
Nom: ${sanitizedName}
Email: ${sanitizedEmail}
Sujet: ${sanitizedSubject}

Message:
${sanitizedMessage}
    `.trim();

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [receiverEmail],
      replyTo: sanitizedEmail,
      subject: emailSubject,
      html: htmlContent,
      text: textContent,
    });

    if (error) {
      console.error("[Resend API Error]", error);
      return NextResponse.json(
        {
          success: false,
          message: error.message || "Échec de l'envoi de l'email via Resend.",
        },
        { status: 500 }
      );
    }

    console.log(
      `[Contact Form API] Message de ${sanitizedName} (${sanitizedEmail}) envoyé avec succès. Resend ID: ${data?.id}`
    );

    return NextResponse.json(
      {
        success: true,
        message: "Message envoyé avec succès ! Je vous répondrai dans les 24h.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API Internal Error]", error);
    return NextResponse.json(
      {
        success: false,
        message: "Une erreur interne est survenue lors de l'envoi du message.",
      },
      { status: 500 }
    );
  }
}

