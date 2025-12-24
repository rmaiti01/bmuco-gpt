import { useState, useEffect, useContext } from 'react';
import { NoiseOverlay, Tag, Container, useInViewMotion } from '../components/Common';
import { Starfield } from '../components/Starfield';
import { CosmicBackdrop } from '../components/CosmicBackdrop';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Calendar, Users, Award } from 'lucide-react';
import { LangContext } from './_app';
import DATA from '../lib/data';
import Link from 'next/link';

// Marquee Component
const Marquee = ({ title, items }) => (
  <div className="flex items-center gap-8 overflow-hidden">
    <p className="shrink-0 text-xs font-semibold uppercase tracking-widest text-oxford-green">
      {title}
    </p>
    <div className="relative flex-1 overflow-hidden mask-gradient">
      <div className="flex gap-12 whitespace-nowrap animate-scroll">
        {items.concat(items).map((t, i) => (
          <span
            key={i}
            className="text-sm font-medium text-sage-mist/70 hover:text-sage-mist transition-colors"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// Image Slideshow Component
const ImageSlideshow = () => {
  const images = [
    'https://static.wixstatic.com/media/f25f88_9176800854b044728395f13ed2e2b097~mv2.jpg',
    'https://static.wixstatic.com/media/02ca48_df92f8f1897746bcb9f15e536ea94a97~mv2.jpg',
    'https://static.wixstatic.com/media/3799c9_a9074ea36e4348e5904bcdce5d1bd97e~mv2.png',
    'https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-6/489956213_9771256502931040_1327026192259489543_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=4KPflz9feIoQ7kNvwEb_9-0&_nc_oc=AdmW4aqbAYvxqX23YX1rCQ5jGkmgtSQ5RSYMH1dvgVRebsKLnq5qSaqzkUVVYOFsFCM&_nc_zt=23&_nc_ht=scontent-dus1-1.xx&_nc_gid=AJtBo60-JWPPgcRoSorkIA&oh=00_AfnUUjc_4Ra-BPp_PW4ozHNl1mgMOTGrioYUgDXejXKxQQ&oe=694F54E4',
    'https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-6/469803422_1501226533890735_6596758392813270821_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=EO79kzfbOogQ7kNvwERE6l2&_nc_oc=Adml_9-jqtNmYV5zsJTJfTxDTrupyW7ZJTxlEKMApOVLUJ-mtEAzJBhE2y5AxMWvcZM&_nc_zt=23&_nc_ht=scontent-dus1-1.xx&_nc_gid=k8zMUMOCOX2hm73Ai5kW_A&oh=00_AflbhcJxbAWPxb2n_InkB5XBGhDN0FGf13RJ5mBEyzQHtw&oe=694F5A71',
    'https://media.licdn.com/dms/image/v2/D4E22AQGjdHz9U4TR5g/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1719130283825?e=1767830400&v=beta&t=n0KRFvlO9ijgUO0tjuEk4Zd0zQp-8PtqBjZLMb3TA4Q',
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % images.length),
      4000
    );
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-charcoal/30 shadow-xl">
      {images.map((img, idx) => (
        <motion.img
          key={idx}
          src={img}
          alt={`BMUCO Activity ${idx + 1}`}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: idx === current ? 1 : 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />
      ))}
      <div className="slideshow-dots absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === current ? 'w-8 bg-sage-mist' : 'w-1.5 bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  const motionProps = useInViewMotion();
  const { lang } = useContext(LangContext);

  const elegantVariants = {
    initial: { opacity: 0, y: -25, filter: 'blur(4px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  };

  const elegantTransition = (delay) => ({
    duration: 2.6,
    delay,
    ease: [0.25, 0.1, 0.25, 1],
  });

  return (
    <main className="bg-obsidian min-h-screen text-paper selection:bg-oxford-green selection:text-white">
      {/* HERO SECTION */}
      <section id="hero" className="relative overflow-hidden">
        <CosmicBackdrop />
        <Starfield />
        <NoiseOverlay />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-obsidian/90 via-obsidian/70 to-obsidian/95" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(184,212,200,0.04),transparent_60%)]" />

        <Container className="relative z-10 grid min-h-[90vh] grid-cols-1 items-center gap-16 py-20 md:grid-cols-2 lg:gap-20">
          <div className="space-y-8">
            {/* Tag */}
            <motion.div
              variants={elegantVariants}
              initial="initial"
              animate="animate"
              transition={elegantTransition(0.3)}
              className="inline-block"
            >
              <Tag>
                {lang === 'np'
                  ? 'Independent • Neurodivergent-led • Global South Equity'
                  : 'Independent • Neurodivergent-led • Global South Equity'}
              </Tag>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={elegantVariants}
              initial="initial"
              animate="animate"
              transition={elegantTransition(0.7)}
              className="hero-h1 text-5xl font-serif leading-[1.2] tracking-tight text-gradient-hero md:text-6xl lg:text-7xl pb-2"
            >
              {lang === 'np' ? (
                <>
                  <span className="hero-bmuco">BMUCO</span> — विज्ञान, अनुसन्धान, शिक्षा र जलवायु कार्यको लागि एक वैश्विक केन्द्र
                </>
              ) : (
                <>
                  <span className="hero-bmuco">BMUCO</span> — Building the future of science with equity
                </>
              )}
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={elegantVariants}
              initial="initial"
              animate="animate"
              transition={elegantTransition(1.2)}
              className="hero-desc max-w-xl text-base leading-relaxed text-paper/80 md:text-lg"
            >
              {lang === 'np'
                ? 'Since 2017, we connect Nobel laureates, world-leading researchers, and thousands of students across continents — with deep roots in India and Nepal.'
                : 'Since 2017, we have connected frontier researchers- Nobel laureates, Fields medalists alike with thousands of students from Global South to Europe. We co-host major symposia (Abel 2025, Bonn), represent the youth in UN climate conferences and partner with leading AI labs to prepare the next generation of mathematicians for the future.'}
            </motion.p>

            {/* Hero abstract graphic */}
            <motion.div
              variants={elegantVariants}
              initial="initial"
              animate="animate"
              transition={elegantTransition(1.4)}
              className="max-w-xl rounded-2xl border border-white/5 bg-charcoal/40 px-4 py-3 md:px-5 md:py-4"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-32">
                  <svg viewBox="0 0 240 120" className="h-full w-full" aria-hidden="true">
                    <defs>
                      <radialGradient id="heroGlow" cx="50%" cy="50%" r="70%">
                        <stop offset="0%" stopColor="hsl(150,35%,60%)" stopOpacity="0.8" />
                        <stop offset="45%" stopColor="hsl(200,55%,55%)" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="hsl(0,65%,55%)" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    <circle cx="70" cy="60" r="34" fill="none" stroke="hsla(150,20%,70%,0.45)" strokeWidth="1.1" />
                    <circle cx="120" cy="60" r="34" fill="none" stroke="hsla(200,30%,68%,0.45)" strokeWidth="1.1" />
                    <circle cx="170" cy="60" r="34" fill="none" stroke="hsla(0,50%,60%,0.45)" strokeWidth="1.1" />
                    <circle cx="70" cy="60" r="14" fill="url(#heroGlow)" opacity="0.7" />
                    <circle cx="120" cy="60" r="14" fill="url(#heroGlow)" opacity="0.7" />
                    <circle cx="170" cy="60" r="14" fill="url(#heroGlow)" opacity="0.7" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-sage-mist/80">
                    Education · Climate · Deep Tech
                  </p>
                  <p className="text-xs text-paper/60 leading-relaxed md:text-sm">
                    Three interlinked pillars shaping BMUCO&apos;s work: theoretical sciences, science‑driven
                    climate action, and deep tech for public good.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={elegantVariants}
              initial="initial"
              animate="animate"
              transition={elegantTransition(1.7)}
              className="flex flex-wrap items-center gap-3"
            >
              <Link href="/programs">
                <a className="cta-mobile group inline-flex items-center gap-2 rounded-xl bg-oxford-green px-5 py-2.5 text-sm font-semibold text-paper shadow-lg shadow-oxford-green/25 transition-all duration-300 hover:bg-sage-mist hover:text-obsidian hover:-translate-y-0.5">
                  {lang === 'np' ? 'कार्यक्रम हेर्नुहोस्' : 'Explore programs'}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
              </Link>
              <Link href="/talks">
                <a className="cta-mobile inline-flex items-center gap-2 rounded-xl border border-sage-mist/25 bg-transparent px-5 py-2.5 text-sm font-semibold text-paper transition-all duration-300 hover:bg-charcoal hover:border-sage-mist/50">
                  <Play size={16} />
                  {lang === 'np' ? 'वार्ता हेर्नुहोस्' : 'Watch talks'}
                </a>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={elegantVariants}
              initial="initial"
              animate="animate"
              transition={elegantTransition(2.1)}
              className="stats-mobile grid grid-cols-3 gap-6 pt-4 md:max-w-lg"
            >
              {DATA.stats.map((s) => (
                <div
                  key={s.l}
                  className="rounded-xl border border-white/5 bg-charcoal/50 p-4 text-center backdrop-blur-sm"
                >
                  <p className="text-2xl font-serif font-semibold text-paper md:text-3xl">{s.n}</p>
                  <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-sage-mist">
                    {s.l}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Nebula + Slideshow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.0, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="absolute -inset-5 rounded-3xl bg-gradient-to-br from-oxford-green/15 via-transparent to-cosmic-blue/8 blur-3xl" />
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 bg-charcoal/40 p-3 shadow-2xl backdrop-blur-md md:aspect-[5/4]">
                <div className="relative h-full w-full overflow-hidden rounded-2xl">
                  <img
                    src="/images/hero-design.png"
                    alt="BMUCO Earth from orbit"
                    className="h-full w-full object-cover opacity-60 transition-all duration-700 hover:opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-obsidian/85 via-obsidian/30 to-transparent" />
                </div>
              </div>
            </div>

            <div className="opacity-90">
              <ImageSlideshow />
            </div>
          </motion.div>
        </Container>

        {/* Partners Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2.5 }}
          className="relative z-10 border-t border-b border-white/5 bg-obsidian/90 py-3 backdrop-blur-sm"
        >
          <Container>
            <Marquee title="PARTNERS & FRIENDS" items={DATA.partners} />
          </Container>
        </motion.div>
      </section>

      {/* HIGHLIGHTS SECTION */}
      <section className="border-t border-white/10 py-24 bg-obsidian">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-5xl"
          >
            <div className="mb-12">
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-sage-mist">
                Recent highlights
              </p>
              <h2 className="text-4xl font-serif text-white leading-tight">Major collaborations & events</h2>
            </div>

            <div className="space-y-6">
              {DATA.highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="border-l-2 border-sage-mist/30 pl-6 transition hover:border-sage-mist"
                >
                  <p className="text-base font-serif text-paper/80 leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* FEATURED TALKS & UPCOMING */}
      <section className="border-t border-white/10 py-24 bg-charcoal/20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16 text-center"
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-sage-mist">
              What's happening
            </p>
            <h2 className="text-4xl font-serif text-white leading-tight">
              Featured talks & upcoming events
            </h2>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Featured Talk Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-obsidian/60 p-6 backdrop-blur-sm transition hover:border-sage-mist/50"
            >
              <div className="mb-4 flex items-center gap-2">
                <Award className="text-sage-mist" size={20} />
                <span className="text-xs font-medium uppercase tracking-wider text-sage-mist">
                  Fields Medal
                </span>
              </div>
              <h3 className="mb-3 text-2xl font-serif text-white">Maryna Viazovska</h3>
              <p className="mb-4 text-sm text-paper/70 leading-relaxed">
                Interview with Fields medalist on sphere packing, modular forms, and the future of pure
                mathematics.
              </p>
              <Link href="/talks">
                <a className="inline-flex items-center gap-2 text-sm font-medium text-sage-mist transition group-hover:gap-3">
                  Watch interview <ArrowRight size={16} />
                </a>
              </Link>
            </motion.div>

            {/* Event Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-obsidian/60 p-6 backdrop-blur-sm transition hover:border-sage-mist/50"
            >
              <div className="mb-4 flex items-center gap-2">
                <Calendar className="text-sage-mist" size={20} />
                <span className="text-xs font-medium uppercase tracking-wider text-sage-mist">
                  June 2025
                </span>
              </div>
              <h3 className="mb-3 text-2xl font-serif text-white">Abel Symposium</h3>
              <p className="mb-4 text-sm text-paper/70 leading-relaxed">
                Co-hosting the Abel Symposium 2025 in Bonn with Hausdorff Center — connecting top
                mathematicians globally.
              </p>
              <Link href="/programs">
                <a className="inline-flex items-center gap-2 text-sm font-medium text-sage-mist transition group-hover:gap-3">
                  Learn more <ArrowRight size={16} />
                </a>
              </Link>
            </motion.div>

            {/* Program Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-obsidian/60 p-6 backdrop-blur-sm transition hover:border-sage-mist/50"
            >
              <div className="mb-4 flex items-center gap-2">
                <Users className="text-sage-mist" size={20} />
                <span className="text-xs font-medium uppercase tracking-wider text-sage-mist">
                  Climate Action
                </span>
              </div>
              <h3 className="mb-3 text-2xl font-serif text-white">Youth at COP</h3>
              <p className="mb-4 text-sm text-paper/70 leading-relaxed">
                Representing young voices at UN climate conferences — from COP to SB sessions with
                science-driven policy.
              </p>
              <Link href="/programs">
                <a className="inline-flex items-center gap-2 text-sm font-medium text-sage-mist transition group-hover:gap-3">
                  View programs <ArrowRight size={16} />
                </a>
              </Link>
            </motion.div>
          </div>

          {/* View all link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <Link href="/programs">
              <a className="inline-flex items-center gap-2 rounded-xl border border-sage-mist/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-sage-mist hover:bg-sage-mist/5">
                Explore all programs & talks
                <ArrowRight size={16} />
              </a>
            </Link>
          </motion.div>
        </Container>
      </section>

      {/* BOTTOM CTA */}
      <section className="border-t border-white/10 py-24 bg-obsidian">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="mb-4 text-4xl font-serif text-white leading-tight">Join the mission</h2>
            <p className="mb-8 text-lg text-paper/70 leading-relaxed">
              Whether you're a student, researcher, institution, or supporter — there are many ways
              to contribute to democratising science.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/join">
                <a className="inline-flex items-center gap-2 border-b-2 border-sage-mist pb-1 text-base font-medium text-white transition hover:border-white">
                  Get involved <ArrowRight size={16} />
                </a>
              </Link>
              <span className="text-paper/30">·</span>
              <Link href="/contact">
                <a className="inline-flex items-center gap-2 border-b-2 border-transparent pb-1 text-base font-medium text-sage-mist transition hover:border-sage-mist">
                  Contact us <ArrowRight size={16} />
                </a>
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
