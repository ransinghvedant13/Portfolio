import { testimonials, researchProjects, achievements } from "../data/content";

export default function Extras() {
  return <>
    <section id="research" className="py-24 border-b border-line bg-white/40">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[0.3fr_0.7fr] gap-10">
        <div>
          <p className="section-label">// 05 RESEARCH & ACHIEVEMENTS</p>
          <h2 className="font-display text-2xl font-semibold mt-2 text-ink">Research & achievements</h2>
        </div>
        <div className="space-y-8">
          {researchProjects.length > 0 && (
            <div>
              <p className="font-mono text-xs text-blueprint mb-3">RESEARCH PROJECT</p>
              {researchProjects.map((r) => (
                <div key={r.id} className="border border-line p-5">
                  <h3 className="font-display font-semibold text-ink">{r.name}</h3>
                  <p className="text-steel text-sm mt-2">{r.summary}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {r.stack.map((tech) => (
                      <span key={tech} className="font-mono text-xs bg-paper border border-line px-2 py-1 text-steel">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
          {achievements.length > 0 && (
            <div>
              <p className="font-mono text-xs text-blueprint mb-3">ACHIEVEMENTS</p>
              <ul className="space-y-3">
                {achievements.map((a) => (
                  <li key={a.title} className="border-b border-line pb-3">
                    <p className="text-ink font-medium text-sm">{a.title}</p>
                    <p className="text-steel text-sm mt-1">{a.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
    <section id="testimonials" className="py-24 border-b border-line"><div className="max-w-6xl mx-auto px-6"><p className="section-label">// TESTIMONIALS</p><h2 className="font-display text-3xl font-semibold mt-2 mb-9 text-ink">Built with people in mind.</h2>{testimonials.length ? <div className="grid md:grid-cols-2 gap-6">{testimonials.map(t=><blockquote key={t.name} className="border border-line p-6 text-steel">“{t.quote}”<footer className="mt-5 font-mono text-xs text-blueprint">{t.name} · {t.role}</footer></blockquote>)}</div> : <div className="border border-dashed border-line p-7 font-mono text-sm text-steel">Testimonials will be added as client collaborations are completed.</div>}</div></section>
  </>;
}
