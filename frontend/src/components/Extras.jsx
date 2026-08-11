import { testimonials } from "../data/content";

export default function Extras() {
  return <>
    <section id="testimonials" className="py-24 border-b border-line"><div className="max-w-6xl mx-auto px-6"><p className="section-label">// 05 TESTIMONIALS</p><h2 className="font-display text-3xl font-semibold mt-2 mb-9 text-ink">Built with people in mind.</h2>{testimonials.length ? <div className="grid md:grid-cols-2 gap-6">{testimonials.map(t=><blockquote key={t.name} className="border border-line p-6 text-steel">“{t.quote}”<footer className="mt-5 font-mono text-xs text-blueprint">{t.name} · {t.role}</footer></blockquote>)}</div> : <div className="border border-dashed border-line p-7 font-mono text-sm text-steel">Testimonials will be added as client collaborations are completed.</div>}</div></section>
  </>;
}
