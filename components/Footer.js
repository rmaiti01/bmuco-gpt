import Link from 'next/link';

export default function Footer() {
  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/programs', label: 'Research' },
    { href: '/team', label: 'Team' },
    { href: '/partners', label: 'Partners' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <footer style={{ borderTop: '1px solid #d1d1d1', background: '#fff', padding: '48px 0 32px' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Follow us + nav row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'space-between', marginBottom: '40px' }}>

          {/* Follow Us */}
          <div>
            <p style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#4b5563', marginBottom: '14px' }}>Follow Us</p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              {[
                { href: 'https://x.com/bmuco_org', label: 'X (Twitter)' },
                { href: 'https://www.facebook.com/bmuco.org/', label: 'Facebook' },
                { href: 'https://www.linkedin.com/company/bmuco', label: 'LinkedIn' },
                { href: 'https://www.youtube.com/@bmuco5856', label: 'YouTube' },
              ].map(s => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer"
                   style={{ fontSize: '14px', fontWeight: 500, color: '#4b5563', textDecoration: 'none' }}
                   onMouseEnter={e => e.currentTarget.style.color = '#0d1216'}
                   onMouseLeave={e => e.currentTarget.style.color = '#4b5563'}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <nav style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
            {navLinks.map(l => (
              <Link key={l.href} href={l.href}>
                <a style={{ fontSize: '14px', fontWeight: 500, color: '#4b5563', textDecoration: 'none' }}
                   onMouseEnter={e => e.currentTarget.style.color = '#0d1216'}
                   onMouseLeave={e => e.currentTarget.style.color = '#4b5563'}>
                  {l.label}
                </a>
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid #d1d1d1', paddingTop: '24px', display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: '13px', color: '#9ca3af' }}>© 2026 BMUCO. All rights reserved.</p>
          <p style={{ fontSize: '13px', color: '#9ca3af' }}>Formal mathematics · AI theorem proving · Bonn, Germany</p>
        </div>
      </div>
    </footer>
  );
}
