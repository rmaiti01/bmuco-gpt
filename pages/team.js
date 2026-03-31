import { NextSeo } from 'next-seo';
import DATA from '../lib/data';

const S = {
  page: { background: '#fff', color: '#0d1216', fontFamily: 'Manrope, sans-serif' },
  container: { maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' },
  label: { fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#4b5563', marginBottom: '10px' },
  h1: { fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.15, color: '#0d1216', marginBottom: '1.25rem' },
  h2: { fontSize: 'clamp(1.35rem, 2.5vw, 1.75rem)', fontWeight: 700, color: '#0d1216', marginBottom: '1rem' },
  body: { fontSize: '15px', lineHeight: 1.75, color: '#4b5563' },
};

export default function Team() {
  return (
    <>
      <NextSeo title="Team" description="The BMUCO core team and scientific advisors." />
      <main style={S.page}>

        {/* Hero */}
        <section style={{ padding: '72px 0 56px', borderBottom: '1px solid #d1d1d1' }}>
          <div style={S.container}>
            <p style={S.label}>Our People</p>
            <h1 style={S.h1}>Core team & advisors</h1>
            <p style={{ ...S.body, maxWidth: '580px' }}>
              BMUCO is built by a diverse, neurodivergent-led team committed to equity and excellence in theoretical science and AI.
            </p>
          </div>
        </section>

        {/* Scientific Advisors */}
        <section style={{ padding: '64px 0', borderBottom: '1px solid #d1d1d1' }}>
          <div style={S.container}>
            <p style={S.label}>World-class guidance</p>
            <h2 style={S.h2}>Scientific Advisors</h2>
            <p style={{ ...S.body, marginBottom: '2rem' }}>World renowned experts guiding BMUCO's vision.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {DATA.team.advisors.map(a => (
                <a key={a.name} href={a.wikipedia} target="_blank" rel="noopener noreferrer"
                   style={{ display: 'block', border: '1px solid #d1d1d1', borderRadius: '10px', padding: '24px', textDecoration: 'none', transition: 'border-color 0.15s' }}
                   onMouseEnter={e => e.currentTarget.style.borderColor = '#1856FE'}
                   onMouseLeave={e => e.currentTarget.style.borderColor = '#d1d1d1'}>
                  <p style={{ fontSize: '17px', fontWeight: 700, color: '#0d1216', marginBottom: '4px' }}>{a.name}</p>
                  <p style={{ fontSize: '13px', color: '#4b5563', marginBottom: '10px' }}>{a.note}</p>
                  <p style={{ fontSize: '12px', color: '#1856FE', fontWeight: 600 }}>View Wikipedia profile →</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Core Team */}
        <section style={{ padding: '64px 0' }}>
          <div style={S.container}>
            <p style={S.label}>Core Team</p>
            <h2 style={S.h2}>Directors & Leads</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '24px', marginTop: '24px' }}>
              {DATA.team.core.map(m => (
                <div key={m.name} style={{ border: '1px solid #d1d1d1', borderRadius: '10px', overflow: 'hidden' }}>
                  {/* Portrait */}
                  <div style={{ width: '100%', aspectRatio: '1 / 1', overflow: 'hidden', background: '#f3f4f6' }}>
                    {m.img ? (
                      <img src={m.img} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <div style={{ width: '100%', height: '100%', background: '#f3f4f6' }} />
                    )}
                  </div>
                  {/* Info */}
                  <div style={{ padding: '16px' }}>
                    <p style={{ fontSize: '15px', fontWeight: 700, color: '#0d1216', marginBottom: '2px' }}>{m.name}</p>
                    <p style={{ fontSize: '13px', fontWeight: 600, color: '#1856FE', marginBottom: '8px' }}>{m.role}</p>
                    <p style={{ fontSize: '13px', color: '#4b5563', lineHeight: 1.6 }}>{m.shortBio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
