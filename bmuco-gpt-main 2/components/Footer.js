import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-obsidian py-16 text-paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          
          {/* About - With Logo */}
          <div>
            <div className="mb-4 inline-flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="BMUCO"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div>
                <p className="text-sm font-serif font-bold text-white tracking-wide">BMUCO</p>
                <p className="-mt-1 text-[10px] text-sage-mist uppercase tracking-widest">Since 2017</p>
              </div>
            </div>
            <p className="text-sm text-paper/60 leading-relaxed">
              A global, independent science organisation.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-sage-mist">Navigate</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about"><a className="text-paper/60 transition hover:text-white">About</a></Link></li>
              <li><Link href="/programs"><a className="text-paper/60 transition hover:text-white">Programs</a></Link></li>
              <li><Link href="/talks"><a className="text-paper/60 transition hover:text-white">Talks</a></Link></li>
              <li><Link href="/partners"><a className="text-paper/60 transition hover:text-white">Partners</a></Link></li>
              <li><Link href="/team"><a className="text-paper/60 transition hover:text-white">Team</a></Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-sage-mist">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/join"><a className="text-paper/60 transition hover:text-white">Join</a></Link></li>
              <li><Link href="/contact"><a className="text-paper/60 transition hover:text-white">Contact</a></Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-sage-mist">Policies</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-paper/60">Independent Organisation</span></li>
              <li><span className="text-paper/60">Privacy Policy</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-paper/40">
          © {new Date().getFullYear()} BMUCO. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
