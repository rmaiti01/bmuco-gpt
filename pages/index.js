import { useState } from 'react';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import DATA from '../lib/data';

/* ── Geometric decoration helpers ── */
function Diamond({ size = 40, top, left, right, bottom, green, className = '' }) {
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

/* ── Interactive Pillars Graph (SVG) — 3 nodes ── */
function PillarsGraph({ active, setActive }) {
  const nodes = [
    { id: 0, cx: 200, cy: 80, label: 'Theoretical Sciences' },
    { id: 1, cx: 100, cy: 310, label: 'Formalisation' },
    { id: 2, cx: 300, cy: 310, label: 'Code-Verified AI' },
  ];

  const lines = [
    [0, 1], [1, 2], [0, 2],
  ];

  return (
    <svg viewBox="0 0 400 400" style={{ width: '100%', maxWidth: 380, margin: '0 auto', display: 'block' }}>
      {/* Outer circle */}
      <circle cx="200" cy="200" r="155" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />

      {/* Lines */}
      {lines.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].cx} y1={nodes[a].cy}
          x2={nodes[b].cx} y2={nodes[b].cy}
          className={`node-line ${active !== null ? 'active' : ''}`}
          stroke={active !== null ? '#5CB85C' : 'rgba(0,0,0,0.1)'}
          strokeWidth="1.5"
        />
      ))}

      {/* Nodes */}
      {nodes.map((n) => {
        const isActive = active === n.id;
        const anyActive = active !== null;
        return (
          <g key={n.id}
            onMouseEnter={() => setActive(n.id)}
            onMouseLeave={() => setActive(null)}
            style={{ cursor: 'pointer' }}
          >
            <circle
              cx={n.cx} cy={n.cy} r="16"
              className={`node-dot ${isActive ? 'active' : ''}`}
              fill={isActive ? '#5CB85C' : anyActive ? '#ddd' : '#ccc'}
            />
            {isActive && (
              <circle
                cx={n.cx} cy={n.cy} r="24"
                fill="none"
                stroke="#5CB85C"
                strokeWidth="2"
                opacity="0.4"
                className="node-glow-ring"
              />
            )}
            <text
              x={n.cx}
              y={n.id === 0 ? n.cy - 28 : n.cy + 36}
              textAnchor="middle"
              fill={isActive ? '#5CB85C' : '#888'}
              fontSize="11"
              fontWeight="600"
              letterSpacing="0.05em"
              style={{ textTransform: 'uppercase', fontFamily: 'Inter, sans-serif', transition: 'fill 0.3s ease' }}
            >
              {n.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* PillarCard removed — no longer needed with new 3-node graph design */

/* ── MAIN PAGE ── */
export default function Home() {
  const [activePillar, setActivePillar] = useState(null);

  return (
    <>
      <NextSeo
        title="BMUCO — Formal Mathematics Meets AI"
        description="We develop formal mathematical datasets in Lean 4 and build AI theorem proving infrastructure — partnering with frontier research institutions."
      />
      <main>

        {/* ════════════════ HERO ════════════════ */}
        <section className="bg-grid" style={{ position: 'relative', overflow: 'hidden', padding: '80px 0 100px' }}>
          <Diamond size={50} top="15%" right="8%" green />
          <Diamond size={30} bottom="20%" left="2%" green />
          <Circle size={200} top="-60px" right="-60px" />
          <Circle size={140} bottom="-40px" right="20%" />

          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
            <h1 className="text-display-xl" style={{ marginBottom: '2rem', maxWidth: '1100px' }}>
              Formal<br className="hidden md:block" />Mathematics<br className="hidden md:block" />
              <span className="text-green">Meets</span> AI
            </h1>
            <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#555', maxWidth: '580px', marginBottom: '2.5rem' }}>
              We develop formal mathematical datasets in Lean 4 and build AI theorem proving
              infrastructure — partnering with frontier research institutions to advance the
              science of automated reasoning.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/programs" className="btn-outline">Our Research</Link>
              <Link href="/contact" className="btn-outline-light">Get in Touch</Link>
            </div>
          </div>
        </section>

        {/* ════════════════ PARTNERS MARQUEE ════════════════ */}
        <section style={{ borderTop: '1px solid #e0e0dc', borderBottom: '1px solid #e0e0dc', padding: '18px 0' }}>
          <div className="marquee-container">
            <div className="marquee-track">
              {[...DATA.partners, ...DATA.partners, ...DATA.partners, ...DATA.partners].map((p, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: '#999',
                    whiteSpace: 'nowrap',
                    padding: '0 48px',
                  }}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════ THREE PILLARS ════════════════ */}
        <section className="bg-grid" style={{ position: 'relative', overflow: 'hidden', padding: '96px 0' }}>
          <Diamond size={24} top="10%" left="1%" green />

          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
            <p className="section-label">How It Connects</p>
            <h2 className="text-display-md" style={{ maxWidth: '500px', marginBottom: '64px' }}>
              Three pillars, one infrastructure
            </h2>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <PillarsGraph active={activePillar} setActive={setActivePillar} />
            </div>
          </div>
        </section>

        {/* ════════════════ WHAT WE DO (DARK) ════════════════ */}
        <section className="bg-grid-dark" style={{ position: 'relative', overflow: 'hidden', padding: '96px 0' }}>
          <div className="geo-diamond-dark geo-float" style={{ width: 60, height: 60, top: '10%', right: '5%' }} />
          <div className="geo-diamond-dark geo-float-slow" style={{ width: 80, height: 80, bottom: '15%', left: '3%' }} />

          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
            <p className="section-label-white">What We Do</p>
            <h2 className="text-display-md" style={{ color: '#fff', maxWidth: '700px', marginBottom: '1.5rem' }}>
              Deep Tech Backed by Theoretical Science
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#aaa', maxWidth: '640px', marginBottom: '2.5rem' }}>
              We are a deep tech organisation rooted in the rigour of theoretical science. Our
              interests span quantum computing, formal methods, and the mathematical foundations
              that underpin next-generation technology. At our core, we invest in mathematical
              formalisation — building the structured datasets and verification tools in Lean 4
              that enable AI systems to reason with library-quality precision, not just surface-level
              correctness. We partner with frontier research institutions and the Lean/Mathlib
              community to build training infrastructure for code-verified AI reasoning.
            </p>
            <Link href="/programs" className="btn-outline-white" style={{ marginBottom: '4rem' }}>
              Explore Our Research
            </Link>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '3rem', marginTop: '3rem' }}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                  <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>
                    Quantum Computing
                  </h3>
                  <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#aaa' }}>
                    Exploring the intersection of quantum information science and formal verification —
                    investing in the mathematical infrastructure that quantum technologies will demand.
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>
                    Formal Methods
                  </h3>
                  <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#aaa' }}>
                    Developing formal mathematical datasets in Lean 4 and building verification tools
                    that capture not just correct proofs, but library-quality formalisations.
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>
                    Research Programs
                  </h3>
                  <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#aaa' }}>
                    Talk series with Nobel laureates and Fields medalists, winter schools in
                    theoretical physics, and talent pipelines from overlooked regions into frontier research.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════ LEAN 4 WORKSHOP ════════════════ */}
        <section className="bg-grid" style={{ position: 'relative', overflow: 'hidden', padding: '96px 0' }}>
          <Diamond size={35} top="8%" right="15%" green />
          <Diamond size={60} bottom="10%" right="3%" />
          <Circle size={160} top="5%" right="-40px" />

          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
            <p className="section-label" style={{ color: '#999' }}>Launching 2026 &middot; Bonn + Remote</p>

            <h2 className="text-display-lg" style={{ marginBottom: '2rem', maxWidth: '900px' }}>
              Lean 4<br className="hidden md:block" />Formalization<br className="hidden md:block" />Workshop
            </h2>

            <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#555', maxWidth: '640px', marginBottom: '2rem' }}>
              An intensive training programme that takes mathematicians from zero Lean experience
              to library-quality formalisers — producing the structured process trace datasets that
              power AI theorem proving. In partnership with World Scientific.
            </p>

            <div style={{ marginBottom: '2rem' }}>
              {[
                { label: 'People', body: 'Training the next generation of formalisation researchers who can produce Mathlib-quality contributions.' },
                { label: 'Data', body: 'Every formalisation generates a structured process trace — the training signal for mathematical AI.' },
                { label: 'Tools', body: 'Building quality-aware formalisation infrastructure for the Lean/Mathlib ecosystem.' },
              ].map(item => (
                <p key={item.label} style={{ fontSize: '15px', color: '#555', lineHeight: 1.7, marginBottom: '12px' }}>
                  <strong style={{ color: '#0a0a0a', fontWeight: 700 }}>{item.label}.</strong> {item.body}
                </p>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/programs" className="btn-outline">Learn More</Link>
              <Link href="/contact" className="btn-outline-light">Apply</Link>
            </div>
          </div>
        </section>

        {/* ════════════════ SCIENTIFIC COMMUNITY ════════════════ */}
        <section style={{ borderTop: '1px solid #e0e0dc', position: 'relative', overflow: 'hidden', padding: '96px 0' }}>
          <Diamond size={28} top="5%" left="1%" green />

          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
            <p className="section-label">Scientific Community</p>
            <h2 className="text-display-md" style={{ marginBottom: '1rem' }}>Our Network</h2>
            <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#555', maxWidth: '580px', marginBottom: '3rem' }}>
              Our research programs and talk series have featured Fields Medalists, Nobel Laureates,
              and frontier researchers across mathematics, physics, and AI.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {DATA.network.map(person => (
                <div key={person.name}>
                  <div style={{
                    width: '100%',
                    aspectRatio: '3 / 4',
                    overflow: 'hidden',
                    background: '#e8e8e6',
                    marginBottom: '16px',
                  }}>
                    {person.img && (
                      <img
                        src={person.img}
                        alt={person.name}
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
                    {person.name}
                  </p>
                  <p style={{ fontSize: '13px', color: '#555' }}>{person.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════ LEADERSHIP ════════════════ */}
        <section style={{ borderTop: '1px solid #e0e0dc', position: 'relative', overflow: 'hidden', padding: '96px 0' }}>
          <Diamond size={24} bottom="10%" left="1%" green />

          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
              {/* Left: text */}
              <div>
                <p className="section-label">Leadership</p>
                <h2 className="text-display-md" style={{ marginBottom: '1rem' }}>
                  Guided by world-class researchers
                </h2>
                <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#555', marginBottom: '2rem' }}>
                  Our scientific advisors bring decades of experience at the intersection of
                  pure mathematics, theoretical physics, and machine learning.
                </p>
                <Link href="/team" className="btn-outline">Full Team</Link>
              </div>

              {/* Right: advisor photos */}
              {DATA.team.advisors.map(a => (
                <div key={a.name}>
                  <div style={{
                    width: '100%',
                    aspectRatio: '4 / 5',
                    overflow: 'hidden',
                    background: '#e8e8e6',
                    marginBottom: '16px',
                  }}>
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

      </main>
    </>
  );
}
