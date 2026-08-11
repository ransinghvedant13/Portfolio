import nodemailer from "nodemailer";

function validate({ name, email, message }) {
  const errors = [];
  if (!name || name.trim().length < 2) errors.push("Name is too short.");
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push("A valid email is required.");
  }
  if (!message || message.trim().length < 10) {
    errors.push("Message should be at least 10 characters.");
  }
  return errors;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, errors: ["Method not allowed"] });
  }

  const { name, email, message, honeypot } = req.body || {};

  // Simple honeypot to catch basic bots
  if (honeypot) {
    return res.status(200).json({ success: true });
  }

  const errors = validate({ name, email, message });
  if (errors.length) {
    return res.status(400).json({ success: false, errors });
  }

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.log("Contact message received (SMTP not configured):", { name, email, message });
    return res.status(200).json({ success: true, note: "Received (email delivery not configured yet)." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER || process.env.SMTP_USER,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: message,
      html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message.replace(/\n/g, "<br/>")}</p>`,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Email send failed:", err);
    res.status(500).json({ success: false, errors: ["Could not send message. Please try again later."] });
  }
}
