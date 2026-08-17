import { motion } from "framer-motion";
import { about, education } from "../data/content";

export default function About() {
  
  return (
    <section id="about" className="py-24 border-b border-line">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[0.3fr_0.7fr] gap-10">
        <div>
          <p className="section-label">{`// 01 ABOUT`}</p>
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
          
        </div>
      </div>
    </section>
  );
}
