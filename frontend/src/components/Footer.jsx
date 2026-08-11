import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-2 font-mono text-xs text-steel">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Built with React, Node.js &amp; Tailwind CSS</span>
      </div>
    </footer>
  );
}
