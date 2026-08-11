import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { about, education } from "../data/content";

export default function About() {
  const [visible, setVisible] = useState(false);
  const stats = [["1+", "years building"], ["90%+", "model accuracy"], ["3", "team members led"]];
  return (
    <section id="about" className="py-24 border-b border-line" onMouseEnter={() => setVisible(true)}>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[0.3fr_0.7fr] gap-10">
        <div>
          <p className="section-label">// 01 ABOUT</p>
          <h2 className="font-display text-3xl font-semibold mt-2 text-ink">
            About me
          </h2>
        </div>
        <div className="space-y-5 max-w-2xl bg-paper/75 backdrop-blur-sm border border-line p-6">
          {about.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-steel leading-relaxed"
            >
              {p}
            </motion.p>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="border border-line p-4 font-mono text-xs text-steel mt-2"
          >
            <p className="text-blueprint mb-1">EDUCATION</p>
            <p className="text-ink">{education.degree}</p>
            <p>{education.school} · {education.period}</p>
            {education.extra && (
              <div className="mt-2 space-y-1">
                {education.extra.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            )}
          </motion.div>
          <div className="grid grid-cols-3 gap-3 pt-2">
            {stats.map(([value, label]) => <div key={label} className="border-l-2 border-blueprint pl-3"><p className="font-display text-2xl font-semibold text-ink">{visible ? value : "0"}</p><p className="font-mono text-[10px] text-steel uppercase">{label}</p></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
