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

export default function Programs() {
  return (
    <>
      <NextSeo
        title="Research"
        description="BMUCO's research infrastructure — formal mathematics, AI theorem proving, and equitable science programs."
      />
      <main>

        {/* ══ HERO ══ */}
        <section className="bg-grid" style={{ position: 'relative', overflow: 'hidden', padding: '80px 0 48px' }}>
          <Diamond size={60} top="15%" right="15%" />
          <Diamond size={40} top="40%" right="8%" />
          <Diamond size={30} bottom="20%" right="20%" />
          <Circle size={200} top="-60px" right="-60px" />

          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
            <h1 className="text-display-xl" style={{ marginBottom: '1.5rem', maxWidth: '1000px' }}>
              Research &<br />Infrastructure
            </h1>
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

        {/* ══ CORE RESEARCH ══ */}
        <section style={{ borderTop: '1px solid #e0e0dc', position: 'relative', overflow: 'hidden', padding: '96px 0' }}>
          <Diamond size={24} top="8%" left="1%" green />

          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
            <p className="section-label-green">Core Research</p>
            <h2 className="text-display-md" style={{ marginBottom: '1.5rem', maxWidth: '600px' }}>
              Formal Mathematics & AI Theorem Proving
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#555', maxWidth: '700px' }}>
              Mathematical formalisation faces a human capital crisis. Fewer than a few hundred people
              worldwide can formalise graduate-level mathematics in Lean 4 at library quality. The
              bottleneck is not tooling or compute — it is people who produce formalisations that are
              maintainable, correctly generalised, and integrable into mathematical libraries.
            </p>
          </div>
        </section>

        {/* ══ LEAN 4 WORKSHOP CARD ══ */}
        <section style={{ padding: '0 0 96px' }}>
          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
            <div style={{
              border: '1px solid #e0e0dc',
              padding: '48px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <Circle size={120} top="-40px" right="-40px" />

              <p className="section-label-green" style={{ marginBottom: '12px' }}>
                Launching 2026 &middot; Bonn + Remote &middot; In Partnership with World Scientific
              </p>

              <h3 className="text-display-lg" style={{ marginBottom: '1.5rem', maxWidth: '800px' }}>
                Lean 4 Formalization Workshop
              </h3>

              <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#555', maxWidth: '700px', marginBottom: '2.5rem' }}>
                An intensive 10-week training programme that takes mathematicians from zero Lean experience
                to certified library-quality formalisers who have completed a real Mathlib PR review cycle.
                The programme addresses three integrated outputs:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                {[
                  {
                    icon: '#5CB85C',
                    title: 'People',
                    body: 'Training talented mathematicians to produce Mathlib-quality formalisations — directly feeding the upstream pipeline that the broader Lean ecosystem needs. Each cohort trains ~20 participants from Bonn and internationally.',
                  },
                  {
                    icon: '#4CAF50',
                    title: 'Data',
                    body: 'Every formalisation generates a structured process trace: the complete record of attempts, errors, corrections, AI interactions, and quality-improvement decisions. A novel data type — no "PRM800K for formal proofs" currently exists.',
                  },
                  {
                    icon: '#45a049',
                    title: 'Tools',
                    body: 'A quality-aware formalisation assistant trained on our process trace corpus. Unlike existing autoformalisers that optimise for correctness alone, this system integrates library-quality evaluation into the generation loop.',
                  },
                ].map(col => (
                  <div key={col.title}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      border: '1px solid #e0e0dc',
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px',
                    }}>
                      <div style={{
                        width: '10px',
                        height: '10px',
                        background: col.icon,
                        borderRadius: '2px',
                      }} />
                    </div>
                    <h4 style={{ fontSize: '20px', fontWeight: 800, color: '#0a0a0a', marginBottom: '12px' }}>
                      {col.title}
                    </h4>
                    <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#555' }}>{col.body}</p>
                  </div>
                ))}
              </div>

              {/* Team credits */}
              <p style={{ fontSize: '14px', color: '#555', marginBottom: '1.5rem' }}>
                <strong style={{ color: '#0a0a0a' }}>Scientific Advisor:</strong> Prof. Yang-Hui He (London Institute for Mathematical Sciences).{' '}
                <strong style={{ color: '#0a0a0a' }}>Programme Director:</strong> Rajarshi Maiti (University of Bonn).{' '}
                <strong style={{ color: '#0a0a0a' }}>AI & ML Lead:</strong> Dr Edward Hirst (University of London / UNICAMP).
              </p>

              <Link href="/contact" className="btn-outline">Apply</Link>
            </div>
          </div>
        </section>

        {/* ══ WHY THIS MATTERS ══ */}
        <section style={{ borderTop: '1px solid #e0e0dc', position: 'relative', overflow: 'hidden', padding: '96px 0' }}>
          <Diamond size={30} top="10%" left="2%" />

          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#0a0a0a', marginBottom: '1.5rem' }}>
              Why This Matters
            </h2>
            <div style={{ maxWidth: '700px' }}>
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#555', marginBottom: '1.5rem' }}>
                AI-assisted formalisation tools increasingly generate Lean code that compiles but does not
                meet library standards. The Mathlib community faces a rising tide of AI-generated submissions
                that require more effort to review than to rewrite — while the review pipeline has over 2,000
                open pull requests and fewer than 60 active reviewers.
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#555' }}>
                BMUCO addresses both the talent bottleneck and the quality gap. Our training produces the
                people; our process traces produce the data; and our tools integrate quality evaluation into
                the generation loop. All outputs are designed to be complementary to existing efforts in the
                Lean/Mathlib ecosystem.
              </p>
            </div>
          </div>
        </section>

        {/* ══ RESEARCH SUPERVISION PROGRAM ══ */}
        <section style={{ borderTop: '1px solid #e0e0dc', position: 'relative', overflow: 'hidden', padding: '96px 0' }}>
          <Diamond size={40} top="10%" right="5%" />

          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
            <p className="section-label-green">Student Research</p>
            <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#0a0a0a', marginBottom: '1.5rem', maxWidth: '600px' }}>
              Research Supervision Program
            </h2>
            <div style={{ maxWidth: '700px' }}>
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#555', marginBottom: '1.5rem' }}>
                <strong style={{ color: '#0a0a0a' }}>Under Dr Edward Hirst:</strong> 3-month Summer Research Assistant Program. Devashish delved into a fascinating machine learning project focused on dessins.
              </p>
            </div>
          </div>
        </section>

        {/* ══ WINTER SCHOOL IN QUANTUM PHYSICS ══ */}
        <section style={{ borderTop: '1px solid #e0e0dc', position: 'relative', overflow: 'hidden', padding: '96px 0' }}>
          <Circle size={80} bottom="10%" left="2%" />
          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
            <p className="section-label-green">Past Programs</p>
            <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#0a0a0a', marginBottom: '1.5rem', maxWidth: '600px' }}>
              Winter School in Quantum Physics
            </h2>
            <div style={{ maxWidth: '700px' }}>
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#555', marginBottom: '1.5rem' }}>
                <strong>Date and Time:</strong> 4th - 11th January 2021<br />
                This Winter school was delivered online via Zoom, targeting Undergraduate students interested in pursuing a research career in mathematics and physics. Lectures covered the background needed for quantum field theory, including classical field theory, special relativity, and quantum mechanics, eventually leading to Quantum Field Theory.
              </p>
              
              <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#0a0a0a', marginBottom: '12px' }}>Topics Covered</h4>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#555', marginBottom: '24px', lineHeight: 1.75 }}>
                <li><strong>Classical Field theory and Special relativity:</strong> Elijah Cavan, University of Waterloo (4th & 6th)</li>
                <li><strong>Quantum Mechanics:</strong> Prof Gleb Gribarkin, Queen's University Belfast (8th)</li>
                <li><strong>Quantum Field Theory:</strong> Prof Neil Lambert, King's College London (11th)</li>
              </ul>
              
              <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#0a0a0a', marginBottom: '12px' }}>Topic Description</h4>
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#555', marginBottom: '1.5rem' }}>
                <strong>Quantum Field Theory (QFT)</strong> is the mathematical and conceptual framework for contemporary elementary particle physics. It is also a framework used in other areas of theoretical physics, such as condensed matter physics and statistical mechanics.
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#555', marginBottom: '1.5rem' }}>
                <strong>Quantum mechanics</strong> is a fundamental theory in physics that provides a description of the physical properties of nature at the scale of atoms and subatomic particles. It is the foundation of all quantum physics including quantum chemistry, quantum field theory, quantum technology, and quantum information science.
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#555', marginBottom: '1.5rem' }}>
                <strong>Classical field theory</strong> predicts how one or more physical fields interact with matter through field equations. The term is commonly reserved for describing those physical theories that describe electromagnetism and gravitation.
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#555' }}>
                <strong>Special relativity</strong> plays an important role in the modern theory of classical electromagnetism, providing formulas for how electromagnetic objects are altered under a Lorentz transformation and explaining how to transform Maxwell's equations.
              </p>
            </div>
          </div>
        </section>

        {/* ══ CLIMATE SCIENCE (DARK) ══ */}
        <section className="bg-grid-dark" style={{ position: 'relative', overflow: 'hidden', padding: '96px 0' }}>
          <div className="geo-diamond-dark geo-float" style={{ width: 50, height: 50, top: '10%', right: '8%' }} />
          <div className="geo-diamond-dark geo-float-slow" style={{ width: 70, height: 70, bottom: '15%', right: '3%' }} />

          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
            <p className="section-label-green">Climate Science & Policy</p>
            <h2 className="text-display-md" style={{ color: '#fff', maxWidth: '600px', marginBottom: '1.5rem' }}>
              Science-Driven Climate Action
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#aaa', maxWidth: '640px' }}>
              BMUCO-affiliated youth delegates have represented young voices at UN climate conferences
              including SB60 and SB62, bridging rigorous science with climate justice. Our Climate
              Dialogues bring together scientists, policymakers, and youth from affected regions in
              pre-COP engagements — grounding climate action in evidence.
            </p>
          </div>
        </section>

      </main>
    </>
  );
}
