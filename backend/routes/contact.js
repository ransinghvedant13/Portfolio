import express from "express";
import { Resend } from "resend";

const router = express.Router();

function validate({ name, email, message }) {
  const errors = [];
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
  if (!name || name.trim().length < 2) errors.push("Name is too short.");
  if (!email || !emailRegex.test(email)) {
    errors.push("A valid email is required.");
  }
  if (!message || message.trim().length < 10) {
    errors.push("Message should be at least 10 characters.");
  }
  return errors;
}

router.post("/", async (req, res) => {
  const { name, email, message, honeypot } = req.body || {};

  if (honeypot) {
    return res.status(200).json({ success: true });
  }

  const errors = validate({ name, email, message });
  if (errors.length) {
    return res.status(400).json({ success: false, errors });
  }

  if (!process.env.RESEND_API_KEY) {
    console.log("New contact message (RESEND_API_KEY not configured, logging only):", {
      name,
      email,
      message,
    });
    return res.json({ success: true, note: "Received (email delivery not configured yet)." });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: process.env.CONTACT_RECEIVER,
      reply_to: email,
      subject: `New portfolio message from ${name}`,
      text: message,
      html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message.replaceAll("\n", "<br/>")}</p>`,
    });

    res.json({ success: true });
  } catch (err) {
    console.error("Email send failed:", err);
    res.status(500).json({ success: false, errors: ["Could not send message. Please try again later."] });
  }
});

export default router;