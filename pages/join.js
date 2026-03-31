import { NextSeo } from 'next-seo';
import Link from 'next/link';

const S = {
  page: { background: '#fff', color: '#0d1216', fontFamily: 'Manrope, sans-serif' },
  container: { maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' },
  label: { fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#4b5563', marginBottom: '10px' },
  h1: { fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.15, color: '#0d1216', marginBottom: '1.25rem' },
  h2: { fontSize: 'clamp(1.35rem, 2.5vw, 1.75rem)', fontWeight: 700, color: '#0d1216', marginBottom: '1rem' },
  body: { fontSize: '15px', lineHeight: 1.75, color: '#4b5563' },
};

export default function Join() {
  return (
    <>
      <NextSeo title="Join" description="Join the BMUCO community — students, researchers, institutions, and supporters welcome." />
      <main style={S.page}>

        {/* Hero */}
        <section style={{ padding: '72px 0 56px', borderBottom: '1px solid #d1d1d1' }}>
          <div style={S.container}>
            <p style={S.label}>Join the mission</p>
            <h1 style={S.h1}>Be part of the change</h1>
            <p style={{ ...S.body, maxWidth: '580px' }}>
              Whether you're a student, researcher, institution, or supporter — there are many ways to contribute to BMUCO's mission.
            </p>
          </div>
        </section>

        {/* Roles */}
        <section style={{ padding: '64px 0' }}>
          <div style={S.container}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', maxWidth: '800px' }}>
              {[
                {
                  title: 'For Students',
                  body: 'Join our programs, attend talks, participate in research schools, or apply for mentorship opportunities. We welcome students from all backgrounds, especially from under-resourced regions.',
                  link: '/programs', linkLabel: 'Explore programs'
                },
                {
                  title: 'For Researchers',
                  body: 'Collaborate on research projects, offer mentorship, or present your work. BMUCO provides a platform to connect with a global community of students and fellow researchers.',
                  link: '/contact', linkLabel: 'Get in touch'
                },
                {
                  title: 'For Institutions',
                  body: 'Partner with us to co-host events, develop programs, or build research infrastructure. We work with universities, research institutes, and industry partners worldwide.',
                  link: '/partners', linkLabel: 'See our partners'
                },
                {
                  title: 'For Supporters',
                  body: 'Help us build the ecosystem for the next generation of scientists. Support our work financially or by spreading the word about BMUCO\'s mission.',
                  link: '/contact', linkLabel: 'Support our work'
                },
              ].map(item => (
                <div key={item.title} style={{ borderTop: '1px solid #d1d1d1', paddingTop: '32px' }}>
                  <h2 style={S.h2}>{item.title}</h2>
                  <p style={{ ...S.body, marginBottom: '16px' }}>{item.body}</p>
                  <Link href={item.link}>
                    <a style={{ fontSize: '14px', fontWeight: 600, color: '#1856FE', textDecoration: 'none' }}>
                      {item.linkLabel} →
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
