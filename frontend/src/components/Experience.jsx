import { motion } from "framer-motion";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-b border-line bg-white/40">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label">// 04 EXPERIENCE</p>
        <h2 className="font-display text-3xl font-semibold mt-2 text-ink mb-12">
          Where I've worked
        </h2>

        <div className="space-y-0 relative before:absolute before:left-[2px] before:top-3 before:bottom-3 before:w-px before:bg-line">
          {experience.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="grid md:grid-cols-[0.25fr_0.75fr] gap-6 py-6 pl-7 border-t border-line relative before:absolute before:left-0 before:top-8 before:w-[5px] before:h-[5px] before:rounded-full before:bg-brass"
            >
              <div>
                <p className="font-mono text-xs text-blueprint">{job.period}</p>
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-ink">
                  {job.role} <span className="text-steel font-normal">· {job.company}</span>
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {job.points.map((pt, idx) => (
                    <li key={idx} className="text-steel text-sm flex gap-2">
                      <span className="text-brass">—</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
