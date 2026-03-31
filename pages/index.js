import Link from 'next/link';
import { NextSeo } from 'next-seo';

const S = {
  page: { background: '#fff', color: '#0d1216', fontFamily: 'Manrope, sans-serif' },
  container: { maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' },
  divider: { border: 'none', borderTop: '1px solid #d1d1d1', margin: 0 },
  label: { fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#4b5563', marginBottom: '10px' },
  h1: { fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.1, color: '#0d1216', marginBottom: '1.25rem' },
  h2: { fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#0d1216', marginBottom: '1rem' },
  body: { fontSize: '16px', lineHeight: 1.7, color: '#4b5563' },
  btnBlue: { display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '10px 20px', background: '#1856FE', color: '#fff', fontSize: '14px', fontWeight: 600, borderRadius: '8px', textDecoration: 'none', border: 'none', cursor: 'pointer' },
  btnWhite: { display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '10px 20px', background: '#fff', color: '#0d1216', fontSize: '14px', fontWeight: 600, borderRadius: '8px', textDecoration: 'none', border: '1px solid #d1d1d1', cursor: 'pointer' },
};

export default function Home() {
  return (
    <>
      <NextSeo
        title="BMUCO — Formal Mathematics & AI"
        description="We develop formal mathematical datasets in Lean 4 and build AI theorem proving infrastructure — partnering with frontier research institutions."
      />
      <main style={S.page}>

        {/* ── HERO ── */}
        <section style={{ padding: '80px 0 72px', borderBottom: '1px solid #d1d1d1' }}>
          <div style={S.container}>
            <div style={{ maxWidth: '720px' }}>
              <p style={S.label}>Formal Mathematics Meets AI</p>
              <h1 style={S.h1}>
                Building the infrastructure for{' '}
                <span style={{ color: '#1856FE' }}>mathematical AI</span>
              </h1>
              <p style={{ ...S.body, maxWidth: '580px', marginBottom: '2rem' }}>
                We develop formal mathematical datasets in Lean 4 and build AI theorem proving infrastructure — partnering with frontier research institutions to advance the science of automated reasoning.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="/programs"><a style={S.btnBlue}>Our Research</a></Link>
                <Link href="/contact"><a style={S.btnWhite}>Get in Touch</a></Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── PARTNERS MARQUEE ── */}
        <section style={{ padding: '20px 0', borderBottom: '1px solid #d1d1d1', overflow: 'hidden' }}>
          <div style={S.container}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}>
              <p style={{ ...S.label, marginBottom: 0, whiteSpace: 'nowrap', flexShrink: 0 }}>Partners</p>
              <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', alignItems: 'center' }}>
                {['Hausdorff Centre for Mathematics', 'London Institute for Mathematical Sciences', 'EPSRC National Edge AI Hub', "Queen's University Belfast"].map(p => (
                  <span key={p} style={{ fontSize: '13px', color: '#9ca3af', fontWeight: 500 }}>{p}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW IT CONNECTS ── */}
        <section style={{ padding: '72px 0', borderBottom: '1px solid #d1d1d1' }}>
          <div style={S.container}>
            <p style={S.label}>Three pillars, one infrastructure</p>
            <h2 style={S.h2}>How It Connects</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginTop: '32px' }}>
              {[
                { title: 'FORMALISATION', items: ['Lean 4', 'Mathlib', 'Process Traces'] },
                { title: 'THEORETICAL SCIENCE', items: ['Physics', 'Pure Mathematics', 'Geometry'] },
                { title: 'AI THEOREM PROVING', items: ['Automated Reasoning', 'Verification', 'ML'] },
              ].map(col => (
                <div key={col.title} style={{ border: '1px solid #d1d1d1', borderRadius: '10px', padding: '24px' }}>
                  <p style={{ ...S.label, marginBottom: '16px' }}>{col.title}</p>
                  {col.items.map(i => (
                    <p key={i} style={{ fontSize: '14px', color: '#4b5563', marginBottom: '6px' }}>{i}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT WE DO ── */}
        <section style={{ padding: '72px 0', borderBottom: '1px solid #d1d1d1' }}>
          <div style={S.container}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>
              <div>
                <p style={S.label}>Formal Mathematics & AI</p>
                <h2 style={S.h2}>What We Do</h2>
                <p style={{ ...S.body, marginBottom: '1.5rem' }}>
                  We build the datasets and tools that mathematical AI needs. Our work centres on formal mathematical datasets in Lean 4 for AI theorem proving — structured process traces that capture not just correct proofs, but library-quality formalisations.
                </p>
                <p style={S.body}>
                  We partner with frontier AI organisations and the Lean/Mathlib community to build training infrastructure for automated reasoning.
                </p>
              </div>
              <div>
                <p style={S.label}>Research Programs</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ borderLeft: '3px solid #1856FE', paddingLeft: '16px' }}>
                    <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.6 }}>
                      Talk series with Nobel laureates and Fields medalists, winter schools in theoretical physics, intensive research training, and one-on-one mentorships — building talent pipelines from overlooked regions into frontier research.
                    </p>
                  </div>
                  <div style={{ borderLeft: '3px solid #d1d1d1', paddingLeft: '16px' }}>
                    <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.6 }}>
                      Youth delegations at UN climate convenings including SB60 and SB62, bridging rigorous science with climate justice — grounding policy in evidence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── LEAN 4 WORKSHOP ── */}
        <section style={{ padding: '72px 0', borderBottom: '1px solid #d1d1d1', background: '#f8f9fa' }}>
          <div style={S.container}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '12px' }}>
              <p style={{ ...S.label, marginBottom: 0 }}>Launching 2026 · Bonn + Remote</p>
            </div>
            <h2 style={S.h2}>Lean 4 Formalization Workshop</h2>
            <p style={{ ...S.body, maxWidth: '600px', marginBottom: '2rem' }}>
              An intensive training programme that takes mathematicians from zero Lean experience to library-quality formalisers — producing the structured process trace datasets that power AI theorem proving. In partnership with World Scientific.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '2rem' }}>
              {[
                { label: 'People', body: 'Training the next generation of formalisation researchers who can produce Mathlib-quality contributions.' },
                { label: 'Data', body: 'Every formalisation generates a structured process trace — the training signal for mathematical AI.' },
                { label: 'Tools', body: 'Building quality-aware formalisation infrastructure for the Lean/Mathlib ecosystem.' },
              ].map(item => (
                <div key={item.label} style={{ border: '1px solid #d1d1d1', borderRadius: '10px', padding: '20px', background: '#fff' }}>
                  <p style={{ fontSize: '13px', fontWeight: 700, color: '#0d1216', marginBottom: '8px' }}>{item.label}.</p>
                  <p style={{ fontSize: '13px', color: '#4b5563', lineHeight: 1.6 }}>{item.body}</p>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link href="/programs"><a style={S.btnBlue}>Learn More</a></Link>
              <Link href="/contact"><a style={S.btnWhite}>Apply</a></Link>
            </div>
          </div>
        </section>

        {/* ── SCIENTIFIC COMMUNITY ── */}
        <section style={{ padding: '72px 0', borderBottom: '1px solid #d1d1d1' }}>
          <div style={S.container}>
            <p style={S.label}>Our Network</p>
            <h2 style={S.h2}>Scientific Community</h2>
            <p style={{ ...S.body, maxWidth: '600px', marginBottom: '2.5rem' }}>
              Our research programs and talk series have featured Fields Medalists, Nobel Laureates, and frontier researchers across mathematics, physics, and AI.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
              {[
                { name: 'Maryna Viazovska', note: 'Fields Medal · Sphere Packings' },
                { name: 'Sir Roger Penrose', note: 'Nobel Laureate · Twistor Theory' },
                { name: 'Avi Loeb', note: 'Harvard · Astrophysics' },
              ].map(p => (
                <div key={p.name} style={{ border: '1px solid #d1d1d1', borderRadius: '10px', padding: '20px' }}>
                  <p style={{ fontSize: '15px', fontWeight: 700, color: '#0d1216', marginBottom: '4px' }}>{p.name}</p>
                  <p style={{ fontSize: '13px', color: '#4b5563' }}>{p.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LEADERSHIP ── */}
        <section style={{ padding: '72px 0' }}>
          <div style={S.container}>
            <p style={S.label}>Guided by world-class researchers</p>
            <h2 style={S.h2}>Leadership</h2>
            <p style={{ ...S.body, maxWidth: '560px', marginBottom: '2.5rem' }}>
              Our scientific advisors bring decades of experience at the intersection of pure mathematics, theoretical physics, and machine learning.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
              {[
                { name: 'Prof Yang-Hui He', note: 'Scientific Advisor & ML Director', url: 'https://en.wikipedia.org/wiki/Yang-Hui_He' },
                { name: 'Prof Neil Lambert', note: 'Honorary Advisor', url: 'https://en.wikipedia.org/wiki/Neil_Lambert_(physicist)' },
              ].map(a => (
                <a key={a.name} href={a.url} target="_blank" rel="noopener noreferrer"
                   style={{ display: 'block', border: '1px solid #d1d1d1', borderRadius: '10px', padding: '20px', textDecoration: 'none', transition: 'border-color 0.15s' }}
                   onMouseEnter={e => e.currentTarget.style.borderColor = '#1856FE'}
                   onMouseLeave={e => e.currentTarget.style.borderColor = '#d1d1d1'}>
                  <p style={{ fontSize: '15px', fontWeight: 700, color: '#0d1216', marginBottom: '4px' }}>{a.name}</p>
                  <p style={{ fontSize: '13px', color: '#4b5563' }}>{a.note}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
