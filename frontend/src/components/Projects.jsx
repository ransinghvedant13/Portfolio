import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { fallbackProjects } from "../data/content";

// In production (Vercel), the frontend and API share the same domain, so
// this defaults to a relative path. For local dev, set VITE_API_URL in
// frontend/.env to point at your local Express backend (e.g. http://localhost:5000).
const API_BASE = import.meta.env.VITE_API_URL || "";

export default function Projects() {
  const [projects, setProjects] = useState(fallbackProjects);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const filters = ["All", "React", "Machine Learning"];
  const visibleProjects = useMemo(() => filter === "All" ? projects : projects.filter(p => p.stack?.some((tech) => tech.includes(filter))), [filter, projects]);

  useEffect(() => {
    let cancelled = false;
    fetch(`${API_BASE}/api/projects`)
      .then((res) => {
        if (!res.ok) throw new Error("Request failed");
        return res.json();
      })
      .then((data) => {
        if (!cancelled && Array.isArray(data) && data.length) setProjects(data);
      })
      .catch(() => {
        // Backend not running yet - fallbackProjects from content.js is already shown
      })
      .finally(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="projects" className="py-24 border-b border-line">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="section-label">// 03 PROJECTS</p>
            <h2 className="font-display text-3xl font-semibold mt-2 text-ink">
              Selected work
            </h2>
          </div>
          {loading && (
            <span className="section-label text-steel">loading live data…</span>
          )}
        </div>
        <div className="flex flex-wrap gap-2 mb-7">{filters.map(item => <button key={item} onClick={() => setFilter(item)} className={`font-mono text-xs px-3 py-2 border transition ${filter === item ? "bg-ink text-paper border-ink" : "border-line text-steel hover:border-blueprint"}`}>{item}</button>)}</div>

        <div className="grid md:grid-cols-2 gap-8">
          {visibleProjects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border border-line bg-paper/80 backdrop-blur-sm p-6 hover:border-blueprint transition-colors group"
              whileHover={{ y: -6, rotateX: 1.5, rotateY: -1.5 }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-display text-xl font-semibold text-ink">
                  {project.name}
                </h3>
                <span
                  className={`font-mono text-xs px-2 py-1 border ${
                    project.status === "Live"
                      ? "border-live text-live"
                      : "border-brass text-brass"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <p className="text-steel text-sm mb-4">{project.summary}</p>

              {project.highlights?.length > 0 && (
                <ul className="mb-4 space-y-1">
                  {project.highlights.map((h, idx) => (
                    <li key={idx} className="text-sm text-ink flex gap-2">
                      <span className="text-blueprint">→</span>
                      {h}
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-2 mb-5">
                {project.stack?.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs bg-paper border border-line px-2 py-1 text-steel"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-5 font-mono text-sm">
                <button onClick={() => setSelected(project)} className="text-blueprint group-hover:text-brass transition-colors">details +</button>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blueprint group-hover:text-brass transition-colors"
                  >
                    live demo →
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blueprint group-hover:text-brass transition-colors"
                  >
                    source →
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
        {selected && <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 grid place-items-center bg-ink/50 p-6" onClick={() => setSelected(null)}><motion.div initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} onClick={(e)=>e.stopPropagation()} className="max-w-xl w-full bg-paper border border-line p-7 shadow-2xl max-h-[85vh] overflow-y-auto"><button onClick={()=>setSelected(null)} className="float-right font-mono text-sm text-steel hover:text-ink">close ×</button><p className="section-label">PROJECT DETAIL</p><h3 className="font-display text-2xl font-semibold mt-2 text-ink">{selected.name}</h3><p className="mt-5 text-steel leading-relaxed">{selected.summary}</p>{selected.highlights?.length > 0 && <><p className="mt-5 font-mono text-xs text-blueprint">KEY FEATURES</p><ul className="mt-2 space-y-2">{selected.highlights.map(h=><li key={h} className="text-sm text-ink">→ {h}</li>)}</ul></>}{selected.contribution && <><p className="mt-5 font-mono text-xs text-blueprint">MY CONTRIBUTION</p><p className="mt-2 text-sm text-steel leading-relaxed">{selected.contribution}</p></>}{selected.stack?.length > 0 && <><p className="mt-5 font-mono text-xs text-blueprint">TECH STACK</p><div className="flex flex-wrap gap-2 mt-2">{selected.stack.map(tech=><span key={tech} className="font-mono text-xs bg-paper border border-line px-2 py-1 text-steel">{tech}</span>)}</div></>}<div className="flex gap-5 font-mono text-sm mt-6 pt-5 border-t border-line">{selected.liveUrl && <a href={selected.liveUrl} target="_blank" rel="noreferrer" className="text-blueprint hover:text-brass">live demo →</a>}{selected.repoUrl && <a href={selected.repoUrl} target="_blank" rel="noreferrer" className="text-blueprint hover:text-brass">source →</a>}</div></motion.div></div>}
      </div>
    </section>
  );
}
