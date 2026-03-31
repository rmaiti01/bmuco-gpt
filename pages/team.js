import { useState } from 'react';
import { NextSeo } from 'next-seo';
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

/* ── Team member modal ── */
function TeamModal({ person, onClose }) {
  if (!person) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '20px',
            color: '#999',
            lineHeight: 1,
          }}
          aria-label="Close"
        >
          &times;
        </button>

        <p style={{
          fontSize: '12px',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: '#5CB85C',
          marginBottom: '8px',
        }}>
          {person.role}
        </p>
        <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#0a0a0a', marginBottom: '4px' }}>
          {person.name}
        </h3>
        {person.institution && (
          <p style={{ fontSize: '14px', color: '#999', marginBottom: '20px' }}>{person.institution}</p>
        )}
        <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#555', marginBottom: '16px' }}>
          {person.bio}
        </p>
        {person.extendedBio && (
          <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#555' }}>
            {person.extendedBio}
          </p>
        )}
        {person.wikipedia && (
          <a
            href={person.wikipedia}
            target="_blank"
            rel="noopener noreferrer"
            className="hover-underline"
            style={{
              display: 'inline-block',
              marginTop: '20px',
              fontSize: '13px',
              fontWeight: 600,
              color: '#5CB85C',
              textDecoration: 'none',
            }}
          >
            Wikipedia profile &rarr;
          </a>
        )}
      </div>
    </div>
  );
}

export default function Team() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  return (
    <>
      <NextSeo title="Team" description="The BMUCO core team and scientific advisors." />
      <main>

        {/* ══ HERO ══ */}
        <section className="bg-grid" style={{
          position: 'relative',
          overflow: 'hidden',
          padding: '80px 0 60px',
          background: '#f2f2f0',
        }}>
          <Diamond size={50} top="15%" right="12%" />
          <Diamond size={35} top="40%" right="6%" />
          <Circle size={160} top="-40px" right="20%" />

          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
            <h1 className="text-display-xl" style={{ marginBottom: '1.5rem' }}>Team</h1>
            <p style={{
              fontSize: '12px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#555',
            }}>
              Formal Verification &middot; AI Theorem Proving &middot; Lean 4 Datasets
            </p>
          </div>
        </section>

        {/* ══ SCIENTIFIC ADVISORS ══ */}
        <section style={{ borderTop: '1px solid #e0e0dc', padding: '96px 0' }}>
          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
            <p className="section-label">Scientific Advisors</p>
            <h2 className="text-display-md" style={{ marginBottom: '3rem', maxWidth: '700px' }}>
              World-renowned experts guiding our vision
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px', maxWidth: '700px' }}>
              {DATA.team.advisors.map(a => (
                <div
                  key={a.name}
                  style={{ cursor: 'pointer' }}
                  onClick={() => setSelectedPerson(a)}
                >
                  <div style={{
                    width: '100%',
                    aspectRatio: '4 / 5',
                    overflow: 'hidden',
                    background: '#e8e8e6',
                    marginBottom: '16px',
                    transition: 'opacity 0.2s ease',
                  }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    {a.img && (
                      <img
                        src={a.img}
                        alt={a.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    )}
                  </div>
                  <p style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: '#0a0a0a',
                    marginBottom: '4px',
                  }}>
                    {a.name}
                  </p>
                  <p style={{ fontSize: '13px', color: '#555' }}>{a.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CORE TEAM ══ */}
        <section style={{ borderTop: '1px solid #e0e0dc', position: 'relative', overflow: 'hidden', padding: '96px 0' }}>
          <Diamond size={30} bottom="10%" left="2%" />
          <Circle size={100} top="5%" right="-30px" />

          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
            <h2 className="text-display-md" style={{ marginBottom: '3rem' }}>Core Team</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
              {DATA.team.core.map(m => (
                <div
                  key={m.name}
                  style={{ cursor: 'pointer' }}
                  onClick={() => setSelectedPerson(m)}
                >
                  <div style={{
                    width: '100%',
                    aspectRatio: '3 / 4',
                    overflow: 'hidden',
                    background: '#e8e8e6',
                    marginBottom: '16px',
                    transition: 'opacity 0.2s ease',
                  }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    {m.img && (
                      <img
                        src={m.img}
                        alt={m.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    )}
                  </div>
                  <p style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: '#0a0a0a',
                    marginBottom: '4px',
                  }}>
                    {m.name}
                  </p>
                  <p style={{ fontSize: '13px', fontWeight: 600, color: '#0a0a0a', marginBottom: '2px' }}>
                    {m.role}
                  </p>
                  <p style={{ fontSize: '13px', color: '#555' }}>{m.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ MODAL ══ */}
        <TeamModal person={selectedPerson} onClose={() => setSelectedPerson(null)} />

      </main>
    </>
  );
}
