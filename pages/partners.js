import { NextSeo } from 'next-seo';
import Link from 'next/link';
import DATA from '../lib/data';

function Diamond({ size = 40, top, left, right, bottom, green }) {
  return (
    <div
      className={green ? 'geo-diamond geo-float' : 'geo-diamond-outline geo-float-slow'}
      style={{ width: size, height: size, top, left, right, bottom }}
    />
  );
}

function Circle({ size = 120, top, right, bottom, left }) {
  return <div className="geo-circle" style={{ width: size, height: size, top, right, bottom, left }} />;
}

const collaborationTypes = [
  { title: 'Research Collaboration', description: 'Co-develop formal datasets, formalisation tools, and training infrastructure for the Lean/Mathlib ecosystem.' },
  { title: 'Event Collaboration', description: 'Co-host workshops, symposia, and technical training sessions with our international network.' },
  { title: 'Funding Partnerships', description: 'Support formalization research, talent development, and dataset infrastructure at the frontier of mathematical AI.' },
  { title: 'Something New', description: 'Open to exploring innovative partnership ideas advancing formal mathematics and AI. Let\'s talk.' },
];

export default function Partners() {
  return (
    <>
      <NextSeo
        title="Partners"
        description="BMUCO collaborates with leading research institutions across mathematics, physics, and AI."
      />
      <main>

        {/* ══ HERO ══ */}
        <section className="bg-grid" style={{ position: 'relative', overflow: 'hidden', padding: '80px 0 96px' }}>
          <Diamond size={50} top="15%" right="12%" />
          <Circle size={160} top="-40px" right="-40px" />

          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
            <p className="section-label">Strategic Collaborations</p>
            <h1 className="text-display-xl" style={{ marginBottom: '1.5rem' }}>Partners</h1>
            <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#555', maxWidth: '600px' }}>
              We collaborate with leading research institutions across mathematics, physics, and AI.
              We seek partners who move fast and think long-term — building research infrastructure together.
            </p>
          </div>
        </section>

        {/* ══ PARTNER LIST ══ */}
        <section style={{ borderTop: '1px solid #e0e0dc', position: 'relative', overflow: 'hidden', padding: '96px 0' }}>
          <Diamond size={20} bottom="15%" right="2%" green />

          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
            <h2 className="text-display-md" style={{ marginBottom: '1rem' }}>Our Collaborations</h2>
            <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#555', marginBottom: '3rem' }}>
              Organizations we've worked with to advance the mathematical sciences.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {DATA.partnersFull.map((p, i) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    padding: '32px 0',
                    borderTop: i === 0 ? '1px solid #e0e0dc' : 'none',
                    borderBottom: '1px solid #e0e0dc',
                    textDecoration: 'none',
                    transition: 'padding-left 0.2s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.paddingLeft = '12px'}
                  onMouseLeave={e => e.currentTarget.style.paddingLeft = '0px'}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '32px' }}>
                    <div>
                      <p style={{ fontSize: '18px', fontWeight: 700, color: '#0a0a0a', marginBottom: '8px' }}>
                        {p.name}
                      </p>
                      <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#555', maxWidth: '600px' }}>
                        {p.description}
                      </p>
                    </div>
                    <span style={{ fontSize: '18px', color: '#999', flexShrink: 0 }}>&rarr;</span>
                  </div>
                </a>
              ))}
            </div>

            <p style={{ fontSize: '12px', color: '#999', marginTop: '24px' }}>
              Logos displayed represent organizations we've collaborated with on specific events and programs.
              Inclusion does not imply ongoing institutional partnership or endorsement.
            </p>
          </div>
        </section>

        {/* ══ HOW WE COLLABORATE ══ */}
        <section style={{ borderTop: '1px solid #e0e0dc', padding: '96px 0' }}>
          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
            <h2 className="text-display-md" style={{ marginBottom: '1rem' }}>How We Collaborate</h2>
            <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#555', maxWidth: '560px', marginBottom: '3rem' }}>
              We're open to any partnership that advances equitable science infrastructure.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
              {collaborationTypes.map(ct => (
                <div key={ct.title} style={{ borderTop: '2px solid #0a0a0a', paddingTop: '20px' }}>
                  <p style={{ fontSize: '16px', fontWeight: 700, color: '#0a0a0a', marginBottom: '8px' }}>
                    {ct.title}
                  </p>
                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#555' }}>{ct.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CTA ══ */}
        <section className="bg-grid-dark" style={{ position: 'relative', overflow: 'hidden', padding: '96px 0' }}>
          <div className="geo-diamond-dark geo-float" style={{ width: 50, height: 50, top: '10%', right: '8%' }} />

          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
            <h2 className="text-display-md" style={{ color: '#fff', marginBottom: '1rem' }}>
              Let's Build This Together
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#aaa', maxWidth: '520px', marginBottom: '2rem' }}>
              We're formalizing as a German nonprofit in 2025–26 while building infrastructure
              for science's next chapter. Start a conversation.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link href="/contact" className="btn-outline-white">Start a conversation</Link>
              <span style={{ fontSize: '14px', color: '#aaa' }}>
                or email{' '}
                <a
                  href="mailto:contact@bmuco.org"
                  className="hover-underline"
                  style={{ color: '#5CB85C', textDecoration: 'none', fontWeight: 600 }}
                >
                  contact@bmuco.org
                </a>
              </span>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
