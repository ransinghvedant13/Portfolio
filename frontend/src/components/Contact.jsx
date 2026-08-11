import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/content";

// In production (Vercel), the frontend and API share the same domain, so
// this defaults to a relative path. For local dev, set VITE_API_URL in
// frontend/.env to point at your local Express backend (e.g. http://localhost:5000).
const API_BASE = import.meta.env.VITE_API_URL || "";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "", honeypot: "" });
  const [status, setStatus] = useState({ state: "idle", errors: [] });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "sending", errors: [] });
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        setStatus({ state: "error", errors: data.errors || ["Something went wrong."] });
        return;
      }
      setStatus({ state: "success", errors: [] });
      setForm({ name: "", email: "", message: "", honeypot: "" });
    } catch (err) {
      setStatus({
        state: "error",
        errors: ["Could not reach the server. Is the backend running?"],
      });
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <p className="section-label">// 05 CONTACT</p>
          <h2 className="font-display text-3xl font-semibold mt-2 text-ink mb-4">
            Let's build something
          </h2>
          <p className="text-steel max-w-sm mb-6">
            Open to freelance work, full-time roles, and interesting collaborations.
            Reach out directly or use the form.
          </p>
          <dl className="font-mono text-sm space-y-2">
            <div className="flex gap-3">
              <dt className="text-steel">email</dt>
              <dd>
                <a href={`mailto:${profile.email}`} className="text-blueprint hover:text-brass">
                  {profile.email}
                </a>
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="text-steel">github</dt>
              <dd>
                <a href={profile.github} target="_blank" rel="noreferrer" className="text-blueprint hover:text-brass">
                  {profile.github.replace("https://", "")}
                </a>
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="text-steel">linkedin</dt>
              <dd>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-blueprint hover:text-brass">
                  {profile.linkedin.replace("https://", "")}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="border border-line bg-paper/80 backdrop-blur-sm p-6 space-y-4"
        >
          {/* Honeypot field - hidden from real users, catches simple bots */}
          <input
            type="text"
            name="honeypot"
            value={form.honeypot}
            onChange={handleChange}
            className="hidden"
            tabIndex="-1"
            autoComplete="off"
          />

          <div>
            <label htmlFor="name" className="font-mono text-xs text-steel">
              NAME
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="mt-1 w-full border border-line bg-transparent px-3 py-2 focus:border-blueprint outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="font-mono text-xs text-steel">
              EMAIL
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="mt-1 w-full border border-line bg-transparent px-3 py-2 focus:border-blueprint outline-none"
            />
          </div>

          <div>
            <label htmlFor="message" className="font-mono text-xs text-steel">
              MESSAGE
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="mt-1 w-full border border-line bg-transparent px-3 py-2 focus:border-blueprint outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status.state === "sending"}
            className="w-full bg-ink text-paper px-6 py-3 font-medium hover:bg-blueprint transition-colors disabled:opacity-60"
          >
            {status.state === "sending" ? "Sending…" : "Send message"}
          </button>

          {status.state === "success" && (
            <p className="text-live text-sm font-mono">Message sent. I'll reply soon.</p>
          )}
          {status.state === "error" &&
            status.errors.map((err, i) => (
              <p key={i} className="text-red-600 text-sm font-mono">
                {err}
              </p>
            ))}
        </motion.form>
      </div>
    </section>
  );
}
