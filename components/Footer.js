import Link from 'next/link';

export default function Footer() {
  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/programs', label: 'Research' },
    { href: '/team', label: 'Team' },
    { href: '/partners', label: 'Partners' },
    { href: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    { href: 'https://x.com/bmuco_org', label: 'X (Twitter)' },
    { href: 'https://www.linkedin.com/company/bmuco', label: 'LinkedIn' },
    { href: 'https://www.youtube.com/@bmuco5856', label: 'YouTube' },
    { href: 'https://www.facebook.com/bmuco.org/', label: 'Facebook' },
  ];

  return (
    <footer style={{ borderTop: '1px solid #e0e0dc', background: '#fafaf8' }}>
      {/* Top section: 3-column links */}
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '64px 2rem 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px' }}>
          {/* Navigation */}
          <div>
            <p className="section-label" style={{ marginBottom: '20px' }}>Navigation</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {navLinks.map(l => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="hover-underline"
                  style={{ fontSize: '15px', color: '#555555', textDecoration: 'none', width: 'fit-content' }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="section-label" style={{ marginBottom: '20px' }}>Contact</p>
            <a
              href="mailto:contact@bmuco.org"
              className="hover-underline"
              style={{ fontSize: '15px', color: '#555555', textDecoration: 'none' }}
            >
              contact@bmuco.org
            </a>
          </div>

          {/* Social */}
          <div>
            <p className="section-label" style={{ marginBottom: '20px' }}>Social</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {socialLinks.map(s => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-underline"
                  style={{ fontSize: '15px', color: '#555555', textDecoration: 'none', width: 'fit-content' }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Large BMUCO wordmark */}
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem 24px' }}>
        <div style={{
          fontSize: 'clamp(5rem, 18vw, 14rem)',
          fontWeight: 900,
          lineHeight: 0.85,
          letterSpacing: '-0.04em',
          color: '#0a0a0a',
          textTransform: 'uppercase',
          userSelect: 'none',
        }}>
          BMUCO
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid #e0e0dc' }}>
        <div style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '20px 2rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <p style={{ fontSize: '13px', color: '#999999' }}>&copy; 2026 BMUCO. All rights reserved.</p>
          <p style={{ fontSize: '13px', color: '#999999' }}>Formal mathematics &middot; AI theorem proving &middot; Bonn, Germany</p>
        </div>
      </div>
    </footer>
  );
}
