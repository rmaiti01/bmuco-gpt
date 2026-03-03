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
  <div className="overflow-hidden py-2 px-4">
    <p className="text-xs font-medium uppercase tracking-widest text-sage-mist/60 mb-2">
      {title}
    </p>
    <div className="flex overflow-hidden">
      <div className="flex animate-marquee gap-8 whitespace-nowrap">
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
    '/images/slideshow/1.jpg',
    '/images/slideshow/2.png',
    '/images/slideshow/3.jpg',
    '/images/slideshow/4.jpg',
    '/images/slideshow/5.jpg',
    '/images/slideshow/6.JPG',
    '/images/slideshow/7.jpeg',
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
    <div className="relative h-48 w-full overflow-hidden rounded-xl">
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
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
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
    <div>
      {/* HERO SECTION */}
      <section className="relative min-h-screen overflow-hidden">
        <NoiseOverlay />
        <Starfield />
        <CosmicBackdrop />

        <Container className="relative z-10 grid gap-12 py-32 lg:grid-cols-2 lg:items-center">
          {/* LEFT: Content */}
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
                  ? 'Independent • Global South Equity'
                  : 'Independent · Theoretical Science'}
              </Tag>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={elegantVariants}
              initial="initial"
              animate="animate"
              transition={elegantTransition(0.7)}
              className="text-4xl font-serif leading-[1.15] tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              {lang === 'np' ? (
                <>
                  <span className="text-sage-mist">BMUCO</span>
                  {' '}
                  — विज्ञान, अनुसन्धान, शिक्षा र जलवायु कार्यको लागि एक वैश्विक केन्द्र
                </>
              ) : (
                <>
                  <span className="text-sage-mist">BMUCO</span>
                  {' '}
                  — Building the ecosystem for the future of theoretical sciences
                </>
              )}
            </motion.h1>

            {/* Description */}
            <motion.div
              variants={elegantVariants}
              initial="initial"
              animate="animate"
              transition={elegantTransition(1.2)}
              className="space-y-5 max-w-xl"
            >
              {lang === 'np' ? (
                <p className="text-base text-paper/70 leading-relaxed">
                  Since 2017, we connect Nobel laureates, world-leading researchers, and thousands
                  of students across continents — with deep roots in India and Nepal.
                </p>
              ) : (
                <>
                  {/* First chunk */}
                  <p className="text-base text-paper/70 leading-relaxed">
                    Since 2017, we have run research programs and winter schools with Nobel
                    Laureates and Fields Medalists, co-hosted the{' '}
                    Abel Symposium 2025, and built partnerships across 30+ institutions on five
                    continents.
                  </p>

                  {/* Visual separator */}
                  <div className="flex items-center gap-2">
                    <div className="h-px w-6 bg-sage-mist/40" />
                    <div className="h-1 w-1 rounded-full bg-sage-mist/40" />
                    <div className="h-px w-6 bg-sage-mist/40" />
                  </div>

                  {/* Second chunk */}
                  <p className="text-base text-paper/70 leading-relaxed">
                    We develop formal mathematical datasets for AI, invest in deep tech, and create
                    research pathways in mathematics, physics, CS, and AI — outside traditional
                    academic structures.
                  </p>
                </>
              )}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={elegantVariants}
              initial="initial"
              animate="animate"
              transition={elegantTransition(1.5)}
              className="flex flex-wrap items-center gap-3 pt-3"
            >
              <Link href="/about">
                <button className="flex items-center gap-2 rounded-full bg-sage-mist px-5 py-2.5 text-sm font-medium text-obsidian transition hover:bg-sage-mist/90">
                  Our Approach
                  <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
              <Link href="/programs">
                <button className="rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-paper/80 transition hover:border-white/30 hover:text-white">
                  See Our Work
                </button>
              </Link>
            </motion.div>

            {/* Stats bar */}
            <motion.div
              variants={elegantVariants}
              initial="initial"
              animate="animate"
              transition={elegantTransition(1.8)}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-6 text-sm border-t border-white/5"
            >
              <div className="flex items-center gap-1.5 text-paper/60">
                <Calendar className="h-3.5 w-3.5 text-sage-mist/70" />
                <span className="text-white font-medium">2017</span>
                <span>Founded</span>
              </div>
              <div className="flex items-center gap-1.5 text-paper/60">
                <Users className="h-3.5 w-3.5 text-sage-mist/70" />
                <span className="text-white font-medium">30+</span>
                <span>Institutions</span>
              </div>
              <div className="flex items-center gap-1.5 text-paper/60">
                <Award className="h-3.5 w-3.5 text-sage-mist/70" />
                <span className="text-white font-medium">5K+</span>
                <span>Community</span>
              </div>
              <div className="text-paper/40">
                Germany · Nepal · India · UK
              </div>
            </motion.div>

            {/* Three Pillars card */}
            <motion.div
              variants={elegantVariants}
              initial="initial"
              animate="animate"
              transition={elegantTransition(2.1)}
              className="rounded-xl border border-white/5 bg-charcoal/30 px-5 py-4 backdrop-blur-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex items-center gap-1.5 pt-0.5">
                  <div className="h-2 w-2 rounded-full bg-sage-mist/70" />
                  <div className="h-2 w-2 rounded-full bg-blue-400/70" />
                  <div className="h-2 w-2 rounded-full bg-red-400/70" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">
                    Research · Datasets · Deep Tech
                  </p>
                  <p className="mt-1 text-xs text-paper/50 leading-relaxed">
                    Three interlinked pillars: theoretical science programs, formal mathematical
                    datasets for AI, and deep tech investment for public good.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Nebula + Slideshow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.0, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-6"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/5">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-obsidian/60" />
              <motion.img
                src="/images/hero-design.png"
                alt="BMUCO Earth from orbit"
                className="h-full w-full object-cover opacity-60 transition-all duration-700 hover:opacity-80"
              />
            </div>
            <ImageSlideshow />
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
            <Marquee
              title={DATA.marquee?.title}
              items={DATA.marquee?.items ?? DATA.partners ?? []}
            />
          </Container>
        </motion.div>
      </section>

      {/* HIGHLIGHTS SECTION */}
      <section className="py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-5xl"
          >
            <div className="mb-12">
              <Tag>Recent highlights</Tag>
              <h2 className="mt-3 text-3xl font-serif text-white">
                Major collaborations & events
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {DATA.highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="border-l-2 border-sage-mist/30 pl-6 transition hover:border-sage-mist"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* FEATURED TALKS & UPCOMING */}
      <section className="py-24 bg-charcoal/20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16 text-center"
          >
            <Tag>What's happening</Tag>
            <h2 className="mt-3 text-3xl font-serif text-white">
              Featured talks & upcoming events
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Featured Talk Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-obsidian/60 p-6 backdrop-blur-sm transition hover:border-sage-mist/50"
            >
              <div className="mb-4 flex items-center gap-2">
                <Play className="h-4 w-4 text-sage-mist" />
                <span className="text-xs font-medium uppercase tracking-widest text-sage-mist">
                  Fields Medal
                </span>
              </div>
              <h3 className="mb-2 text-xl font-serif text-white">Maryna Viazovska</h3>
              <p className="mb-4 text-sm text-paper/60 leading-relaxed">
                Interview with Fields medalist on sphere packing, modular forms, and the future
                of pure mathematics.
              </p>
              <Link
                href="/talks"
                className="flex items-center gap-1 text-sm text-sage-mist hover:underline"
              >
                Watch interview <ArrowRight className="h-3.5 w-3.5" />
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
                <Calendar className="h-4 w-4 text-sage-mist" />
                <span className="text-xs font-medium uppercase tracking-widest text-sage-mist">
                  June 2025
                </span>
              </div>
              <h3 className="mb-2 text-xl font-serif text-white">Abel Symposium</h3>
              <p className="mb-4 text-sm text-paper/60 leading-relaxed">
                Co-hosting the Abel Symposium 2025 in Bonn with Hausdorff Center — connecting
                top mathematicians globally.
              </p>
              <Link
                href="/programs"
                className="flex items-center gap-1 text-sm text-sage-mist hover:underline"
              >
                Learn more <ArrowRight className="h-3.5 w-3.5" />
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
                <Award className="h-4 w-4 text-sage-mist" />
                <span className="text-xs font-medium uppercase tracking-widest text-sage-mist">
                  Climate Action
                </span>
              </div>
              <h3 className="mb-2 text-xl font-serif text-white">Youth at COP</h3>
              <p className="mb-4 text-sm text-paper/60 leading-relaxed">
                Representing young voices at UN climate conferences — from COP to SB sessions
                with science-driven policy.
              </p>
              <Link
                href="/programs"
                className="flex items-center gap-1 text-sm text-sage-mist hover:underline"
              >
                View programs <ArrowRight className="h-3.5 w-3.5" />
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
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 text-sm text-paper/60 hover:text-sage-mist transition-colors"
            >
              Explore all programs & talks
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </Container>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="mb-4 text-3xl font-serif text-white">Join the ecosystem</h2>
            <p className="mb-8 text-paper/60 leading-relaxed">
              Whether you're a researcher, institution, industry partner, or student — there are
              many ways to build with us.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <Link href="/get-involved">
                <button className="flex items-center gap-2 rounded-full bg-sage-mist px-6 py-3 font-medium text-obsidian transition hover:bg-sage-mist/90">
                  Get involved <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
              ·
              <Link
                href="/contact"
                className="text-paper/60 hover:text-sage-mist transition-colors"
              >
                Contact us
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
