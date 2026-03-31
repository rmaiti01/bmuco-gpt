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

export default function Join() {
  return (
    <>
      <NextSeo title="Join" description="Join the BMUCO community." />
      <main>

        <section className="bg-grid" style={{ position: 'relative', overflow: 'hidden', padding: '80px 0 96px' }}>
          <Diamond size={40} top="20%" right="10%" />

          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
            <p className="section-label">Join the Mission</p>
            <h1 className="text-display-xl" style={{ marginBottom: '1.5rem' }}>Be Part of the Change</h1>
            <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#555', maxWidth: '520px' }}>
              Whether you're a student, researcher, institution, or supporter — there are many ways to contribute to BMUCO's mission.
            </p>
          </div>
        </section>

        <section style={{ borderTop: '1px solid #e0e0dc', padding: '96px 0' }}>
          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', maxWidth: '700px' }}>
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
              ].map((item, i) => (
                <div key={item.title} style={{ borderTop: i === 0 ? '1px solid #e0e0dc' : 'none', borderBottom: '1px solid #e0e0dc', padding: '32px 0' }}>
                  <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#0a0a0a', marginBottom: '10px' }}>{item.title}</h2>
                  <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#555', marginBottom: '16px' }}>{item.body}</p>
                  <Link
                    href={item.link}
                    className="hover-underline"
                    style={{ fontSize: '13px', fontWeight: 600, color: '#5CB85C', textDecoration: 'none' }}
                  >
                    {item.linkLabel} &rarr;
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
