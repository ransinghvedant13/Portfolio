import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false);
  const [typed, setTyped] = useState("");
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const roles = ["Software Engineer", "Full-stack developer", "Problem solver"];
  const [roleIndex, setRoleIndex] = useState(0);
  useEffect(() => {
    const text = roles[roleIndex];
    if (typed.length < text.length) {
      const timer = setTimeout(() => setTyped(text.slice(0, typed.length + 1)), 55);
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(() => { setTyped(""); setRoleIndex((roleIndex + 1) % roles.length); }, 1800);
    return () => clearTimeout(timer);
  }, [typed, roleIndex]);
  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <section
      id="top"
      onMouseMove={(e) => { const r=e.currentTarget.getBoundingClientRect(); setMouse({x:((e.clientX-r.left)/r.width)*100,y:((e.clientY-r.top)/r.height)*100}); }}
      className="relative bg-grid pt-32 pb-24 md:pt-40 md:pb-32 border-b border-line overflow-hidden"
    >
      <div className="pointer-events-none absolute -z-0 w-[30rem] h-[30rem] rounded-full blur-3xl opacity-25 bg-blueprint transition-transform duration-150" style={{left:`calc(${mouse.x}% - 15rem)`,top:`calc(${mouse.y}% - 15rem)`}} />
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="section-label mb-4"
          >
            // PORTFOLIO — {new Date().getFullYear()}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.5}
            className="inline-flex items-center gap-2 border border-live px-3 py-1.5 mb-5 font-mono text-xs text-live"
          >
            <span className="w-2 h-2 rounded-full bg-live inline-block animate-pulse" />
            {profile.availability}
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="font-display text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight text-ink"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-4 text-lg md:text-xl text-steel font-medium"
          >
            {profile.title}
          </motion.p>
          <p className="mt-2 h-6 font-mono text-sm text-blueprint">{typed}<span className="animate-pulse">_</span></p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-5 max-w-lg text-steel"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="bg-ink text-paper px-6 py-3 font-medium hover:bg-blueprint transition-colors"
            >
              View my projects
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="border border-ink px-6 py-3 font-medium hover:border-blueprint hover:text-blueprint transition-colors"
            >
              GitHub
            </a>
            <a
              href={profile.resumeUrl}
              download="Vedant_Ransingh_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 font-medium text-blueprint hover:text-brass transition-colors"
            >
              Download Résumé
              <span aria-hidden="true">↓</span>
            </a>
          </motion.div>
        </div>

        {/* Signature element: a spec-sheet / system-status readout card */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="border border-line bg-white/70 backdrop-blur-sm p-6 font-mono text-sm"
        >
          <div className="orbit" aria-label="Technology orbit"><span>R</span><span>JS</span><span>API</span><span>ML</span><b>DEV</b></div>
          <div className="flex items-center justify-between border-b border-line pb-3 mb-3">
            <span className="text-steel">status.log</span>
            <span className="flex items-center gap-2 text-live">
              <span className="w-2 h-2 rounded-full bg-live inline-block animate-pulse" />
              online
            </span>
          </div>

          {/* Passport-style ID photo - larger, centered, own breathing room */}
          <div className="flex flex-col items-center text-center pb-5 mb-5 border-b border-line">
            <div className="w-[120px] h-[155px] border border-line bg-ink overflow-hidden flex items-center justify-center mb-3">
              {!photoFailed ? (
                <img
                  src="/profile.jpg"
                  alt={profile.name}
                  onError={() => setPhotoFailed(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-paper font-display text-3xl tracking-wide">
                  {initials}
                </span>
              )}
            </div>
            <p className="font-display text-lg font-semibold text-ink">{profile.name}</p>
            <p className="text-steel text-xs mt-1">{profile.title}</p>
          </div>

          <dl className="space-y-2 text-ink">
            <div className="flex justify-between gap-4">
              <dt className="text-steel">availability</dt>
              <dd className="text-right">{profile.availability}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-steel">experience</dt>
              <dd>{profile.yearsExperience}+ years</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-steel">location</dt>
              <dd>{profile.location}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-steel">stack</dt>
              <dd className="text-right">React · Node.js</dd>
            </div>
          </dl>
          <div className="mt-4 pt-3 border-t border-line flex flex-wrap gap-4 text-blueprint">
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-brass">
              github →
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-brass">
              linkedin →
            </a>
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="hover:text-brass">
              view résumé →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
