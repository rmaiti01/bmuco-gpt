import { NextSeo } from 'next-seo';
import Link from 'next/link';
import DATA from '../lib/data';

const S = {
  page: { background: '#fff', color: '#0d1216', fontFamily: 'Manrope, sans-serif' },
  container: { maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' },
  label: { fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#4b5563', marginBottom: '10px' },
  h1: { fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.15, color: '#0d1216', marginBottom: '1.25rem' },
  h2: { fontSize: 'clamp(1.35rem, 2.5vw, 1.75rem)', fontWeight: 700, color: '#0d1216', marginBottom: '1rem' },
  h3: { fontSize: '15px', fontWeight: 700, color: '#0d1216', marginBottom: '8px' },
  body: { fontSize: '15px', lineHeight: 1.75, color: '#4b5563' },
  card: { border: '1px solid #d1d1d1', borderRadius: '10px', padding: '24px' },
};

export default function Programs() {
  return (
    <>
      <NextSeo title="Research" description="BMUCO's research infrastructure — formal mathematics, AI theorem proving, and equitable science programs." />
      <main style={S.page}>

        {/* Hero */}
        <section style={{ padding: '72px 0 56px', borderBottom: '1px solid #d1d1d1' }}>
          <div style={S.container}>
            <p style={S.label}>Research & Infrastructure</p>
            <h1 style={S.h1}>Formal Mathematics & AI Theorem Proving</h1>
            <p style={{ ...S.body, maxWidth: '660px' }}>
              Mathematical formalisation faces a human capital crisis. Fewer than a few hundred people worldwide can formalise graduate-level mathematics in Lean 4 at library quality. We're building the people, data, and tools to fix that.
            </p>
          </div>
        </section>

        {/* Lean 4 Workshop — Core Program */}
        <section style={{ padding: '64px 0', borderBottom: '1px solid #d1d1d1' }}>
          <div style={S.container}>
            <p style={S.label}>Core Research</p>
            <h2 style={S.h2}>Lean 4 Formalization Workshop</h2>
            <p style={{ ...S.body, maxWidth: '640px', marginBottom: '2rem' }}>
              An intensive 10-week training programme launching in 2026 (Bonn + Remote). Takes mathematicians from zero Lean experience to library-quality formalisers — producing the structured process trace datasets that power AI theorem proving. In partnership with World Scientific.
            </p>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '12px', fontWeight: 600, padding: '4px 10px', border: '1px solid #d1d1d1', borderRadius: '6px', color: '#4b5563' }}>Launching 2026</span>
              <span style={{ fontSize: '12px', fontWeight: 600, padding: '4px 10px', border: '1px solid #d1d1d1', borderRadius: '6px', color: '#4b5563' }}>Bonn + Remote</span>
              <span style={{ fontSize: '12px', fontWeight: 600, padding: '4px 10px', border: '1px solid #d1d1d1', borderRadius: '6px', color: '#4b5563' }}>~20 participants/cohort</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '2rem' }}>
              {[
                { title: 'People', body: 'Training the next generation of formalisation researchers who can produce Mathlib-quality contributions.' },
                { title: 'Data', body: 'Every formalisation generates a structured process trace — the training signal for mathematical AI.' },
                { title: 'Tools', body: 'Building quality-aware formalisation infrastructure for the Lean/Mathlib ecosystem.' },
              ].map(item => (
                <div key={item.title} style={S.card}>
                  <p style={S.h3}>{item.title}.</p>
                  <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
            <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '20px' }}>
              <p style={{ fontSize: '13px', color: '#4b5563', marginBottom: '6px' }}><strong style={{ color: '#0d1216' }}>Scientific Advisor:</strong> Prof. Yang-Hui He</p>
              <p style={{ fontSize: '13px', color: '#4b5563', marginBottom: '6px' }}><strong style={{ color: '#0d1216' }}>Programme Director:</strong> Rajarshi Maiti</p>
              <p style={{ fontSize: '13px', color: '#4b5563' }}><strong style={{ color: '#0d1216' }}>AI & ML Lead:</strong> Dr Edward Hirst</p>
            </div>
          </div>
        </section>

        {/* Talk Series */}
        <section style={{ padding: '64px 0', borderBottom: '1px solid #d1d1d1' }}>
          <div style={S.container}>
            <p style={S.label}>Programs & Training</p>
            <h2 style={S.h2}>Talk Series</h2>
            <p style={{ ...S.body, maxWidth: '640px', marginBottom: '2rem' }}>
              High-profile conversations with Nobel Laureates, Fields Medalists, and frontier researchers. Reaching 10,000+ students since 2017.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
              {DATA.talks.slice(0, 6).map(talk => (
                <div key={talk.title} style={{ ...S.card, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <p style={{ fontSize: '14px', fontWeight: 600, color: '#0d1216', lineHeight: 1.4 }}>{talk.title}</p>
                  <p style={{ fontSize: '12px', color: '#9ca3af' }}>{talk.meta}</p>
                  {talk.videoUrl && (
                    <a href={talk.videoUrl} target="_blank" rel="noopener noreferrer"
                       style={{ fontSize: '13px', color: '#1856FE', textDecoration: 'none', fontWeight: 600, marginTop: 'auto' }}>
                      Watch →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Programs */}
        <section style={{ padding: '64px 0', borderBottom: '1px solid #d1d1d1' }}>
          <div style={S.container}>
            <h2 style={S.h2}>Additional Programs</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginTop: '24px' }}>
              {[
                { title: 'Winter School on Theoretical Physics', body: 'Intensive online school in QFT supervised by Prof. Neil Lambert (KCL), Dr. Gleb Gribakin (QUB), and Elijah Cavan (Waterloo). Received several hundred applications.' },
                { title: 'Research Assistant Programme', body: 'Running since 2023. One-on-one mentorship pairing students with PhDs and postdocs for project-based learning and academic guidance.' },
                { title: 'Mentorship Programs', body: 'Peer cohorts, reading groups, and direct mentorship from leading researchers. Pathways from undergraduate curiosity to graduate research.' },
                { title: 'Climate Science & Policy', body: 'Youth delegations at UN SB60 and SB62. Pre-COP climate dialogues bridging rigorous science with climate justice.' },
              ].map(item => (
                <div key={item.title} style={S.card}>
                  <p style={S.h3}>{item.title}</p>
                  <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '64px 0' }}>
          <div style={S.container}>
            <h2 style={S.h2}>Want to get involved?</h2>
            <p style={{ ...S.body, maxWidth: '520px', marginBottom: '1.5rem' }}>
              Whether you're a student, researcher, institution, or supporter — there are many ways to join BMUCO's mission.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link href="/contact">
                <a style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '10px 20px', background: '#1856FE', color: '#fff', fontSize: '14px', fontWeight: 600, borderRadius: '8px', textDecoration: 'none' }}>
                  Contact Us
                </a>
              </Link>
              <Link href="/partners">
                <a style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '10px 20px', background: '#fff', color: '#0d1216', fontSize: '14px', fontWeight: 600, borderRadius: '8px', textDecoration: 'none', border: '1px solid #d1d1d1' }}>
                  Partner with us
                </a>
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
