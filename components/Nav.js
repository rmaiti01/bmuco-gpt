import { useState } from 'react';
import Link from 'next/link';

const Nav = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '/about', label: 'About' },
    { href: '/programs', label: 'Research' },
    { href: '/team', label: 'Team' },
    { href: '/partners', label: 'Partners' },
  ];

  return (
    <header style={{ borderBottom: '1px solid #d1d1d1', background: '#fff', position: 'sticky', top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '60px' }}>

        {/* Logo */}
        <Link href="/">
          <a style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <img src="/images/logo.png" alt="BMUCO" style={{ width: '32px', height: '32px', borderRadius: '6px' }} />
            <span style={{ fontSize: '15px', fontWeight: 700, color: '#0d1216' }}>BMUCO</span>
          </a>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex" style={{ alignItems: 'center', gap: '32px' }}>
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              <a style={{ fontSize: '14px', fontWeight: 500, color: '#4b5563', textDecoration: 'none' }}
                 onMouseEnter={e => e.currentTarget.style.color = '#0d1216'}
                 onMouseLeave={e => e.currentTarget.style.color = '#4b5563'}>
                {l.label}
              </a>
            </Link>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Link href="/contact">
            <a className="hidden md:inline-flex"
               style={{ padding: '8px 16px', background: '#1856FE', color: '#fff', fontSize: '14px', fontWeight: 600, borderRadius: '8px', textDecoration: 'none' }}
               onMouseEnter={e => e.currentTarget.style.background = '#1449e0'}
               onMouseLeave={e => e.currentTarget.style.background = '#1856FE'}>
              Get in Touch
            </a>
          </Link>

          <button
            className="md:hidden"
            onClick={() => setOpen(v => !v)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', color: '#0d1216', display: 'flex', alignItems: 'center' }}
            aria-label="Menu"
          >
            {open ? (
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
            ) : (
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ borderTop: '1px solid #d1d1d1', background: '#fff', padding: '8px 24px 16px' }}>
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              <a onClick={() => setOpen(false)}
                 style={{ display: 'block', padding: '10px 0', fontSize: '15px', fontWeight: 500, color: '#0d1216', textDecoration: 'none', borderBottom: '1px solid #f3f4f6' }}>
                {l.label}
              </a>
            </Link>
          ))}
          <Link href="/contact">
            <a onClick={() => setOpen(false)}
               style={{ display: 'block', marginTop: '12px', padding: '10px 16px', background: '#1856FE', color: '#fff', fontSize: '14px', fontWeight: 600, borderRadius: '8px', textDecoration: 'none', textAlign: 'center' }}>
              Get in Touch
            </a>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Nav;
