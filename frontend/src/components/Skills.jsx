import { motion } from "framer-motion";
import { useState } from "react";
import { skills } from "../data/content";

export default function Skills() {
  const [active, setActive] = useState(skills[0].category);
  return (
    <section id="skills" className="py-24 border-b border-line bg-white/40">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label">// 02 SKILLS</p>
        <h2 className="font-display text-3xl font-semibold mt-2 text-ink mb-12">
          What I work with
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onMouseEnter={() => setActive(group.category)}
              onFocus={() => setActive(group.category)}
              tabIndex="0"
              className={`cursor-default border p-5 transition-all ${group.category === "Currently Learning" ? "border-dashed" : ""} ${active === group.category ? "border-blueprint bg-paper shadow-sm -translate-y-1" : "border-transparent hover:border-line"}`}
            >
              <h3 className={`font-mono text-xs tracking-wide mb-3 ${group.category === "Currently Learning" ? "text-brass" : "text-blueprint"}`}>
                {group.category.toUpperCase()}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-ink text-sm border-b border-line pb-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className={`mt-5 text-xs leading-relaxed text-steel transition-opacity ${active === group.category ? "opacity-100" : "opacity-0"}`}>Explore the tools I use to take an idea from a clear interface to a dependable release.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
