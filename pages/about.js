import { NextSeo } from 'next-seo';
import Link from 'next/link';

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

const timeline = [
  {
    year: '2017',
    text: 'BMUCO founded — bringing research-level theoretical science into schools across the Global South.',
  },
  {
    year: '2018–2023',
    text: 'Grew into an independent, neurodivergent-led science organisation — research programs, winter schools, and talk series with Nobel Laureates and Fields Medalists across Europe. 10,000+ students reached across 30+ institutions.',
  },
  {
    year: '2024',
    text: 'Launched research assistant programmes in AI for mathematics with Dr Edward Hirst (University of London / UNICAMP). Youth delegates represented BMUCO at UN climate conferences SB60 and SB62.',
  },
  {
    year: '2025–2026',
    text: 'Co-hosted the Abel Symposium 2025 in Bonn with the Hausdorff Centre for Mathematics. Began developing formal mathematical datasets in Lean 4 for AI theorem proving. Deep tech pivot underway.',
  },
];

export default function About() {
  return (
    <>
      <NextSeo
        title="About"
        description="BMUCO is a Deeptech and Theoretical Science lab. We operate on a non-profit basis."
      />
      <main>

        {/* ══ HERO ══ */}
        <section className="bg-grid" style={{ position: 'relative', overflow: 'hidden', padding: '80px 0 96px' }}>
          <Diamond size={60} top="10%" right="18%" />
          <Diamond size={40} top="25%" right="10%" />
          <Circle size={180} top="-50px" right="-50px" />
          <Circle size={120} bottom="10%" right="15%" />

          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
            <h1 className="text-display-xl" style={{ marginBottom: '2rem', maxWidth: '900px' }}>
              About BMUCO
            </h1>
            <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#555', maxWidth: '600px' }}>
              BMUCO is a modern science lab and think tank combined, at the intersection of science
              and AI. We build training infrastructure — formal datasets, verification tools, and
              talent pipelines — that advances the science of automated mathematical reasoning.
            </p>
          </div>
        </section>

        {/* ══ TIMELINE ══ */}
        <section style={{ borderTop: '1px solid #e0e0dc', position: 'relative', overflow: 'hidden', padding: '96px 0' }}>
          <Diamond size={24} bottom="15%" left="1%" green />

          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
            <p className="section-label">Timeline</p>
            <h2 className="text-display-md" style={{ marginBottom: '3rem', maxWidth: '500px' }}>
              From grassroots to frontier
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              {/* Left: photo */}
              <div style={{
                width: '100%',
                aspectRatio: '4 / 3',
                overflow: 'hidden',
                background: '#e8e8e6',
              }}>
                <img
                  src="/images/slideshow/3.jpeg"
                  alt="BMUCO event"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Right: timeline entries */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {timeline.map((e, i) => (
                  <div
                    key={e.year}
                    style={{
                      padding: '24px 0',
                      borderTop: i === 0 ? 'none' : '1px solid #e0e0dc',
                    }}
                  >
                    <p className="section-label-green" style={{ marginBottom: '8px' }}>{e.year}</p>
                    <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#555' }}>{e.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ WHAT WE WORK TOWARDS (DARK) ══ */}
        <section className="bg-grid-dark" style={{ position: 'relative', overflow: 'hidden', padding: '96px 0' }}>
          <div className="geo-diamond-dark geo-float" style={{ width: 50, height: 50, top: '5%', right: '8%' }} />
          <div className="geo-diamond-dark geo-float-slow" style={{ width: 70, height: 70, top: '40%', right: '3%' }} />
          <div className="geo-diamond-dark" style={{ width: 90, height: 90, bottom: '8%', left: '5%' }} />

          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
            <p className="section-label-white">What We Work Towards</p>
            <h2 className="text-display-md" style={{ color: '#fff', maxWidth: '800px', marginBottom: '1.5rem' }}>
              Deep Tech Backed by Theoretical Science
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#aaa', maxWidth: '700px', marginBottom: '3rem' }}>
              We are a deep tech organisation rooted in the rigour of theoretical science. Our
              interests span quantum computing, formal methods, and the mathematical foundations
              that underpin next-generation technology. At our core, we invest in mathematical
              formalisation — building structured datasets and verification tools in Lean 4 that
              enable AI systems to reason with library-quality precision, not just surface-level
              correctness.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Frontier Science Without Gatekeeping',
                  body: 'Research programs and direct collaborations with Nobel Laureates and Fields Medalists — open to anyone with drive, regardless of institution or geography.',
                },
                {
                  title: 'Talent Pipelines From Overlooked Regions',
                  body: 'Systematic pathways for mathematicians in the Global South to move from curiosity to formalisation research, library-quality contribution, and leadership.',
                },
                {
                  title: 'Science-Driven Climate Action',
                  body: 'Youth delegations at UN climate convenings, bridging rigorous science with climate justice — grounding policy in evidence.',
                },
              ].map(item => (
                <div key={item.title}>
                  <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#aaa' }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
