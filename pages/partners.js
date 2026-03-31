import { NextSeo } from 'next-seo';
import Link from 'next/link';

const S = {
  page: { background: '#fff', color: '#0d1216', fontFamily: 'Manrope, sans-serif' },
  container: { maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' },
  label: { fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#4b5563', marginBottom: '10px' },
  h1: { fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.15, color: '#0d1216', marginBottom: '1.25rem' },
  h2: { fontSize: 'clamp(1.35rem, 2.5vw, 1.75rem)', fontWeight: 700, color: '#0d1216', marginBottom: '1rem' },
  body: { fontSize: '15px', lineHeight: 1.75, color: '#4b5563' },
  card: { border: '1px solid #d1d1d1', borderRadius: '10px', padding: '28px', textDecoration: 'none', display: 'block', transition: 'border-color 0.15s' },
};

const partners = [
  {
    name: 'Hausdorff Centre for Mathematics',
    description: 'Co-hosted the Abel Symposium 2025 in Bonn — one of mathematics\' most prestigious convenings. One of the world\'s leading mathematical research institutions, recognized for groundbreaking work across pure and applied mathematics, geometry, and mathematical physics.',
    url: 'https://www.hausdorff-center.uni-bonn.de/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_HCM.jpg',
  },
  {
    name: 'London Institute for Mathematical Sciences',
    description: 'An independent research institute dedicated to fundamental questions in physics, mathematics, and computer science. We co-hosted the Maryna Viazovska interview at the Royal Institution and collaborate on regular meetings for research students and postdocs in theoretical physics and mathematics.',
    url: 'https://lims.ac.uk',
    logo: 'https://static.wixstatic.com/media/c2f56a_b750f31f6240486fa37c8bcbfbac73bc~mv2.png',
  },
  {
    name: 'EPSRC National Edge AI Hub',
    description: 'Newcastle University\'s hub for advanced AI research. We\'re exploring collaborations in AI applications for theoretical sciences and building equitable research infrastructure that bridges cutting-edge technology with underrepresented communities in mathematics and physics.',
    url: 'https://edgeaihub.co.uk/',
    logo: 'https://static.wixstatic.com/media/3799c9_4ce7ac67be32482a899cca5373419dd9~mv2.webp',
  },
  {
    name: "Queen's University Belfast — School of Mathematics & Physics",
    description: 'A leading research institution in theoretical physics and mathematics. We\'ve collaborated on research schools and theoretical physics programs, creating structured pathways for students to engage with frontier research in quantum field theory and mathematical physics.',
    url: 'https://www.qub.ac.uk/schools/SchoolofMathematicsandPhysics/',
    logo: 'https://static.wixstatic.com/media/c2f56a_9fcb6841648d4f87b43cd423c22324d8~mv2.png',
  },
];

const collaborationTypes = [
  { title: 'Research Collaboration', description: 'Co-develop formal datasets, formalisation tools, and training infrastructure for the Lean/Mathlib ecosystem.' },
  { title: 'Event Collaboration', description: 'Co-host workshops, symposia, and technical training sessions with our international network.' },
  { title: 'Funding Partnerships', description: 'Support formalization research, talent development, and dataset infrastructure at the frontier of mathematical AI.' },
  { title: 'Something New', description: 'Open to exploring innovative partnership ideas advancing formal mathematics and AI. Let\'s talk.' },
];

export default function Partners() {
  return (
    <>
      <NextSeo title="Partners" description="BMUCO collaborates with leading research institutions across mathematics, physics, and AI." />
      <main style={S.page}>

        {/* Hero */}
        <section style={{ padding: '72px 0 56px', borderBottom: '1px solid #d1d1d1' }}>
          <div style={S.container}>
            <p style={S.label}>Strategic Collaborations</p>
            <h1 style={S.h1}>Partners</h1>
            <p style={{ ...S.body, maxWidth: '640px' }}>
              We collaborate with leading research institutions across mathematics, physics, and AI. We seek partners who move fast and think long-term — building research infrastructure together.
            </p>
          </div>
        </section>

        {/* Partner list */}
        <section style={{ padding: '64px 0', borderBottom: '1px solid #d1d1d1' }}>
          <div style={S.container}>
            <h2 style={S.h2}>Our Collaborations</h2>
            <p style={{ ...S.body, marginBottom: '2rem' }}>Organizations we've worked with to advance the mathematical sciences.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {partners.map(p => (
                <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer"
                   style={S.card}
                   onMouseEnter={e => e.currentTarget.style.borderColor = '#1856FE'}
                   onMouseLeave={e => e.currentTarget.style.borderColor = '#d1d1d1'}>
                  <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '24px', alignItems: 'center' }}>
                    <div style={{ border: '1px solid #d1d1d1', borderRadius: '8px', padding: '12px', background: '#f8f9fa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img src={p.logo} alt={p.name} style={{ maxHeight: '56px', width: '100%', objectFit: 'contain' }} />
                    </div>
                    <div>
                      <p style={{ fontSize: '16px', fontWeight: 700, color: '#0d1216', marginBottom: '6px' }}>{p.name} →</p>
                      <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.7 }}>{p.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '20px' }}>
              Logos displayed represent organizations we've collaborated with on specific events and programs. Inclusion does not imply ongoing institutional partnership or endorsement.
            </p>
          </div>
        </section>

        {/* How we collaborate */}
        <section style={{ padding: '64px 0', borderBottom: '1px solid #d1d1d1' }}>
          <div style={S.container}>
            <h2 style={S.h2}>How We Collaborate</h2>
            <p style={{ ...S.body, maxWidth: '600px', marginBottom: '2rem' }}>
              We're open to any partnership that advances equitable science infrastructure.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
              {collaborationTypes.map(ct => (
                <div key={ct.title} style={{ border: '1px solid #d1d1d1', borderRadius: '10px', padding: '24px' }}>
                  <p style={{ fontSize: '15px', fontWeight: 700, color: '#1856FE', marginBottom: '8px' }}>{ct.title}</p>
                  <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.7 }}>{ct.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '64px 0' }}>
          <div style={S.container}>
            <h2 style={S.h2}>Let's Build This Together</h2>
            <p style={{ ...S.body, maxWidth: '560px', marginBottom: '1.5rem' }}>
              We're formalizing as a German nonprofit in 2025–26 while building infrastructure for science's next chapter. Start a conversation.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link href="/contact">
                <a style={{ display: 'inline-flex', alignItems: 'center', padding: '10px 20px', background: '#1856FE', color: '#fff', fontSize: '14px', fontWeight: 600, borderRadius: '8px', textDecoration: 'none' }}>
                  Start a conversation →
                </a>
              </Link>
              <p style={{ fontSize: '14px', color: '#9ca3af' }}>
                Direct contact: <a href="mailto:contact@bmuco.org" style={{ color: '#1856FE', textDecoration: 'none', fontWeight: 600 }}>contact@bmuco.org</a>
              </p>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
