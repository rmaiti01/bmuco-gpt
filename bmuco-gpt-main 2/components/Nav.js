import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronRight, Search } from 'lucide-react';
import { Container } from './Common';

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');

  const links = [
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/talks", label: "Talks" },
    { href: "/partners", label: "Partners" },
    { href: "/team", label: "Team" },
    { href: "/blog", label: "Blog" },
  ];

  // Comprehensive Search Index
  const searchIndex = [
    // Talks
    { name: "Maryna Viazovska — Fields Medalist Talk", url: "/talks" },
    { name: "Sir Roger Penrose — Nobel Laureate", url: "/talks" },
    { name: "Avi Loeb — Interstellar Archaeology", url: "/talks" },
    { name: "Yang-Hui He — String Theory & Machine Learning", url: "/talks" },
    { name: "Anna Zhigun — Mathematical Modelling", url: "/talks" },
    { name: "Thea Aarrestad — CERN Machine Learning", url: "/talks" },
    { name: "Roger Hunter — Kepler Mission", url: "/talks" },
    { name: "Pre-COP Climate Dialogues", url: "/talks" },
    { name: "All Talks & Interviews", url: "/talks" },
    { name: "Royal Institution", url: "/talks" },
    { name: "Fields Medal", url: "/talks" },
    { name: "Nobel Prize", url: "/talks" },
    
    // Programs
    { name: "Programs Overview", url: "/programs" },
    { name: "Theoretical Sciences & Education", url: "/programs" },
    { name: "Climate Science & Policy", url: "/programs" },
    { name: "Mathematical Frontiers & AI", url: "/programs" },
    { name: "Schools Outreach", url: "/programs" },
    { name: "Research Schools — QFT Winter School", url: "/programs" },
    { name: "Mentorship Programs", url: "/programs" },
    { name: "Youth Climate Delegates", url: "/programs" },
    { name: "Climate Dialogues", url: "/programs" },
    { name: "UN Climate Conferences", url: "/programs" },
    { name: "SB60 SB62", url: "/programs" },
    { name: "IYF Doha", url: "/programs" },
    { name: "Dr Edward Hirst — Mentor", url: "/programs" },
    { name: "Prof Neil Lambert — QFT School", url: "/programs" },
    { name: "Gleb Gribakin — Queen's Belfast", url: "/programs" },
    { name: "Elijah Cavan — Waterloo", url: "/programs" },
    
    // Team
    { name: "Madhav Tiwari — Director & Founder", url: "/team" },
    { name: "Rajarshi Maiti — Co-Director", url: "/team" },
    { name: "Sridhar Sai Gorrepatti — CTO", url: "/team" },
    { name: "Ryan Graham — Vision Manager", url: "/team" },
    { name: "Prof Neil Lambert — Honorary Advisor", url: "/team" },
    { name: "Prof Yang-Hui He — Honorary Advisor", url: "/team" },
    { name: "Core Team", url: "/team" },
    { name: "Advisory Board", url: "/team" },
    
    // Partners
    { name: "London Institute for Mathematical Sciences — LIMS", url: "/partners" },
    { name: "Queen's University Belfast — School of Maths & Physics", url: "/partners" },
    { name: "EPSRC National Edge AI Hub — Newcastle", url: "/partners" },
    { name: "All Partners & Institutions", url: "/partners" },
    
    // About
    { name: "About BMUCO", url: "/about" },
    { name: "Our History", url: "/about" },
    { name: "Mission & Vision", url: "/about" },
    { name: "Founded 2017", url: "/about" },
    { name: "Neurodivergent-led", url: "/about" },
    { name: "Abel Symposium 2025 Bonn", url: "/about" },
    
    // Other
    { name: "Join BMUCO", url: "/join" },
    { name: "Contact Us", url: "/contact" },
    { name: "Get in Touch", url: "/contact" },
    { name: "Support Our Work", url: "/join" },
  ];

  const filtered = query
    ? searchIndex.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-white/5 bg-obsidian/30 backdrop-blur-xl supports-[backdrop-filter]:bg-obsidian/20">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">

          {/* LEFT: Logo */}
          <Link href="/">
            <a className="inline-flex items-center gap-3 rounded-xl py-1 focus:outline-none focus:ring-2 focus:ring-sage-mist">
              <Image
                src="/images/logo.png"
                alt="BMUCO"
                width={40}
                height={40}
                priority
                className="rounded-lg"
              />
              <div className="hidden sm:block">
                <p className="text-sm font-serif font-bold text-white tracking-wide">BMUCO</p>
                <p className="-mt-1 text-[10px] text-sage-mist uppercase tracking-widest">Since 2017</p>
              </div>
            </a>
          </Link>

          {/* CENTER: Nav items */}
          <nav className="hidden flex-1 items-center justify-center md:flex">
            <div className="flex items-center gap-12">
              {links.map((l) => (
                <Link key={l.href} href={l.href}>
                  <a className="text-sm font-medium text-paper/80 transition hover:text-white hover:underline decoration-oxford-green decoration-2 underline-offset-4">
                    {l.label}
                  </a>
                </Link>
              ))}
            </div>
          </nav>

          {/* RIGHT: Actions - Extreme right */}
          <div className="flex items-center justify-end gap-3 md:w-[220px]">
            <button
              className="hidden rounded-lg p-2 text-paper hover:text-white transition md:block"
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            <Link href="/contact">
              <a className="hidden items-center gap-2 rounded-xl bg-oxford-green px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-oxford-green/20 transition hover:bg-sage-mist hover:text-obsidian hover:-translate-y-0.5 md:inline-flex">
                Contact Us
                <ChevronRight size={16} />
              </a>
            </Link>

            {/* Mobile menu button */}
            <button
              className="rounded-lg p-2 text-paper md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="border-t border-white/5 bg-obsidian md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col px-6 py-2">
              {links.map((l) => (
                <Link key={l.href} href={l.href}>
                  <a onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-sm font-medium text-paper hover:bg-white/5 hover:text-white">
                    {l.label}
                  </a>
                </Link>
              ))}
              <button
                onClick={() => { setOpen(false); setSearchOpen(true); }}
                className="rounded-lg px-3 py-3 text-left text-sm font-medium text-paper hover:bg-white/5 hover:text-white"
              >
                Search
              </button>
              <Link href="/contact">
                <a onClick={() => setOpen(false)} className="mt-2 rounded-lg bg-oxford-green px-3 py-3 text-sm font-semibold text-white text-center">
                  Contact Us
                </a>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-obsidian/90 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-charcoal p-6 shadow-2xl">
            <button 
              className="absolute right-4 top-4 text-paper hover:text-white" 
              onClick={() => { setSearchOpen(false); setQuery(''); }}
              aria-label="Close search"
            >
              <X />
            </button>
            <div className="flex items-center gap-3">
              <Search size={24} className="text-sage-mist" />
              <input
                autoFocus
                type="search"
                placeholder="Search talks, people, programs..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent text-xl font-medium text-white placeholder-white/30 outline-none"
              />
            </div>
            <div className="mt-4 h-px w-full bg-white/10" />
            {query && (
              <ul className="mt-4 max-h-80 space-y-1 overflow-y-auto">
                {filtered.length > 0 ? (
                  filtered.map((item, idx) => (
                    <li key={idx}>
                      <Link href={item.url}>
                        <a 
                          onClick={() => { setSearchOpen(false); setQuery(''); }} 
                          className="block rounded-lg px-3 py-2.5 text-sm text-paper hover:bg-white/5 hover:text-white transition"
                        >
                          {item.name}
                        </a>
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="px-3 py-2.5 text-sm text-paper/50">No results found for "{query}"</li>
                )}
              </ul>
            )}
            {!query && (
              <div className="mt-4 space-y-2">
                <p className="text-xs font-medium uppercase tracking-wider text-sage-mist/70">Try searching for</p>
                <div className="flex flex-wrap gap-2">
                  <button onClick={() => setQuery('Maryna')} className="rounded-full bg-white/5 px-3 py-1 text-xs text-paper/70 hover:bg-white/10 hover:text-white">Maryna Viazovska</button>
                  <button onClick={() => setQuery('Neil Lambert')} className="rounded-full bg-white/5 px-3 py-1 text-xs text-paper/70 hover:bg-white/10 hover:text-white">Neil Lambert</button>
                  <button onClick={() => setQuery('Climate')} className="rounded-full bg-white/5 px-3 py-1 text-xs text-paper/70 hover:bg-white/10 hover:text-white">Climate Programs</button>
                  <button onClick={() => setQuery('QFT')} className="rounded-full bg-white/5 px-3 py-1 text-xs text-paper/70 hover:bg-white/10 hover:text-white">QFT School</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
