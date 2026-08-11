import { useEffect, useState } from "react";
import { profile } from "../data/content";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-paper/90 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-semibold tracking-tight text-ink">
          {profile.name.split(" ")[0]}
          <span className="text-blueprint">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="section-label hover:text-brass transition-colors"
              >
                {String(i + 1).padStart(2, "0")} {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-4">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium border border-ink px-4 py-2 hover:border-blueprint hover:text-blueprint transition-colors"
          >
            Résumé
          </a>
          <a
            href="#contact"
            className="text-sm font-medium bg-ink text-paper px-4 py-2 hover:bg-blueprint transition-colors"
          >
            Let's talk
          </a>
        </div>
      </nav>
    </header>
  );
}
