import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Nav = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const links = [
    { href: '/about', label: 'About' },
    { href: '/programs', label: 'Research' },
    { href: '/team', label: 'Team' },
    { href: '/partners', label: 'Partners' },
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(250, 250, 248, 0.9)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid #e0e0dc',
      }}
    >
      <div
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '64px',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <img src="/images/logo.png" alt="BMUCO" style={{ width: '28px', height: '28px' }} />
          <span style={{ fontSize: '14px', fontWeight: 700, color: '#0a0a0a', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            BMUCO
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex" style={{ alignItems: 'center', gap: '36px' }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover-underline"
              style={{
                fontSize: '14px',
                fontWeight: 500,
                color: router.pathname === l.href ? '#0a0a0a' : '#555555',
                textDecoration: router.pathname === l.href ? 'underline' : 'none',
                textUnderlineOffset: '4px',
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link
            href="/contact"
            className="hidden md:inline-flex"
            style={{
              padding: '10px 24px',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#0a0a0a',
              border: '1px solid #0a0a0a',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#0a0a0a'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#0a0a0a'; }}
          >
            Get in Touch
          </Link>

          <button
            className="md:hidden"
            onClick={() => setOpen(v => !v)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              color: '#0a0a0a',
              display: 'flex',
              alignItems: 'center',
            }}
            aria-label="Menu"
          >
            {open ? (
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ borderTop: '1px solid #e0e0dc', background: '#fafaf8', padding: '16px 2rem 24px' }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                padding: '12px 0',
                fontSize: '15px',
                fontWeight: 500,
                color: '#0a0a0a',
                textDecoration: 'none',
                borderBottom: '1px solid #eeeeec',
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-outline"
            style={{ marginTop: '16px', width: '100%', textAlign: 'center' }}
          >
            Get in Touch
          </Link>
        </div>
      )}
    </header>
  );
};

export default Nav;
