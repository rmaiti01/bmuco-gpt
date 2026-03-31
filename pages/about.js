import { NextSeo } from 'next-seo';
import Link from 'next/link';

const S = {
  page: { background: '#fff', color: '#0d1216', fontFamily: 'Manrope, sans-serif' },
  container: { maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' },
  label: { fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#4b5563', marginBottom: '10px' },
  h1: { fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.15, color: '#0d1216', marginBottom: '1.25rem' },
  h2: { fontSize: 'clamp(1.35rem, 2.5vw, 1.75rem)', fontWeight: 700, color: '#0d1216', marginBottom: '1rem' },
  body: { fontSize: '16px', lineHeight: 1.75, color: '#4b5563' },
  divider: { border: 'none', borderTop: '1px solid #d1d1d1', margin: '0 0 48px' },
};

export default function About() {
  return (
    <>
      <NextSeo title="About" description="BMUCO is a modern science lab and think tank focused on formal mathematics and AI theorem proving." />
      <main style={S.page}>

        {/* Hero */}
        <section style={{ padding: '72px 0 56px', borderBottom: '1px solid #d1d1d1' }}>
          <div style={S.container}>
            <p style={S.label}>Who we are</p>
            <h1 style={S.h1}>
              A modern science lab and think tank —<br />
              at the intersection of science and AI
            </h1>
            <p style={{ ...S.body, maxWidth: '640px', marginBottom: '2rem' }}>
              BMUCO is an independent, neurodivergent-led science organization. We combine rigorous theoretical science with the infrastructure work needed to power the next generation of AI reasoning.
            </p>
            {/* Stats */}
            <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
              {[{ n: '2017', l: 'Founded' }, { n: '10k+', l: 'Students reached' }, { n: '30+', l: 'Institutions' }].map(s => (
                <div key={s.l}>
                  <p style={{ fontSize: '24px', fontWeight: 800, color: '#0d1216', marginBottom: '2px' }}>{s.n}</p>
                  <p style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#4b5563' }}>{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What we do */}
        <section style={{ padding: '64px 0', borderBottom: '1px solid #d1d1d1' }}>
          <div style={S.container}>
            <p style={S.label}>Our focus</p>
            <h2 style={S.h2}>What We Work Towards</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '32px' }}>
              {[
                {
                  title: 'Formal mathematical datasets for AI',
                  body: 'Formal mathematical datasets in Lean 4 for AI theorem proving — structured process traces that capture library-quality formalisations and power automated reasoning.'
                },
                {
                  title: 'Frontier science without gatekeeping',
                  body: 'Research programs, winter schools, and direct collaborations with Nobel Laureates and Fields Medalists — built for anyone with the drive to participate, regardless of institution or geography.'
                },
                {
                  title: 'Talent pipelines from overlooked regions',
                  body: 'Systematic pathways for students in the Global South and underrepresented communities to move from curiosity to research, leadership, and entrepreneurship.'
                },
                {
                  title: 'Science-driven climate action',
                  body: 'Climate policy grounded in rigorous science, with youth from affected regions present in decision-making rooms — from UN SB sessions to COP.'
                },
              ].map(item => (
                <div key={item.title} style={{ border: '1px solid #d1d1d1', borderRadius: '10px', padding: '24px' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#0d1216', marginBottom: '10px' }}>{item.title}</h3>
                  <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section style={{ padding: '64px 0', borderBottom: '1px solid #d1d1d1' }}>
          <div style={S.container}>
            <p style={S.label}>History</p>
            <h2 style={S.h2}>A Brief Timeline</h2>
            <div style={{ maxWidth: '680px', marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {[
                { year: '2017', text: 'Founded as a grassroots effort to bring serious theoretical science into schools in the Global South rarely see research-level mathematics or physics.' },
                { year: '2018–2023', text: 'Grew into an independent, neurodivergent-led science organization — running research programs, winter schools, and seminars with Nobel Laureates, Fields Medalists, and leading researchers across Europe. Reached 10,000+ students across 30+ institutions.' },
                { year: '2024', text: 'Launched AI mathematics research assistant programs; youth delegates attended UN climate conferences SB60 and SB62.' },
                { year: '2025–2026', text: 'Co-hosting Abel Symposium 2025 in Bonn; developing formal mathematical datasets in Lean 4; formalizing as a German nonprofit.' },
              ].map(e => (
                <div key={e.year} style={{ display: 'grid', gridTemplateColumns: '96px 1fr', gap: '16px' }}>
                  <p style={{ fontSize: '13px', fontWeight: 700, color: '#1856FE', paddingTop: '2px' }}>{e.year}</p>
                  <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: 1.7 }}>{e.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '64px 0' }}>
          <div style={S.container}>
            <h2 style={S.h2}>Get Involved</h2>
            <p style={{ ...S.body, maxWidth: '520px', marginBottom: '1.5rem' }}>
              Whether you're a researcher, student, institution, or supporter — connect with us to build science that breaks barriers.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link href="/contact">
                <a style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '10px 20px', background: '#1856FE', color: '#fff', fontSize: '14px', fontWeight: 600, borderRadius: '8px', textDecoration: 'none' }}>
                  Contact Us
                </a>
              </Link>
              <Link href="/programs">
                <a style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '10px 20px', background: '#fff', color: '#0d1216', fontSize: '14px', fontWeight: 600, borderRadius: '8px', textDecoration: 'none', border: '1px solid #d1d1d1' }}>
                  Our Research
                </a>
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
