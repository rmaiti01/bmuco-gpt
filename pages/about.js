import { motion } from 'framer-motion';
import { Container, useInViewMotion } from '../components/Common';

export default function About() {
  const heroVariants = {
    initial: { opacity: 0, y: -20, filter: 'blur(4px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  };

  const heroTransition = (delay = 0) => ({
    duration: 2.5,
    delay,
    ease: [0.25, 0.1, 0.25, 1],
  });

  return (
    <main className="bg-obsidian min-h-screen text-paper">
      <section className="py-32">
        <Container>
          {/* HERO */}
          <div className="mx-auto max-w-4xl text-center">
            <motion.p
              variants={heroVariants}
              initial="initial"
              animate="animate"
              transition={heroTransition(0.1)}
              className="mb-4 text-sm font-medium uppercase tracking-widest text-sage-mist"
            >
              Who we are
            </motion.p>

            <motion.h1
              variants={heroVariants}
              initial="initial"
              animate="animate"
              transition={heroTransition(0.3)}
              className="mb-6 text-5xl font-serif text-white leading-tight md:text-6xl"
            >
              Building the ecosystem for the future of theoretical sciences
            </motion.h1>

            <motion.p
              variants={heroVariants}
              initial="initial"
              animate="animate"
              transition={heroTransition(0.6)}
              className="text-lg text-paper/60 leading-relaxed"
            >
              BMUCO is an independent science organization — a modern think tank advancing
              mathematics, physics, computer science, and AI through research programs,
              scientific datasets, and deep tech investment.
            </motion.p>

            {/* Metrics strip */}
            <motion.div
              variants={heroVariants}
              initial="initial"
              animate="animate"
              transition={heroTransition(0.9)}
              className="mt-10 grid gap-6 rounded-2xl border border-white/5 bg-charcoal/40 px-8 py-6 md:grid-cols-3"
            >
              <div>
                <p className="text-2xl font-serif text-white">2017</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-sage-mist/80">
                  Founded
                </p>
              </div>
              <div>
                <p className="text-2xl font-serif text-white">10k+</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-sage-mist/80">
                  Students reached
                </p>
              </div>
              <div>
                <p className="text-2xl font-serif text-white">30+</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-sage-mist/80">
                  Institutions
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mx-auto mt-32 max-w-5xl space-y-32">

            {/* A Brief History */}
            <motion.div {...useInViewMotion()} className="border-t border-white/10 pt-16">
              <div className="mb-2 h-1 w-16 bg-sage-mist" />
              <h2 className="mb-6 text-4xl font-serif text-white leading-tight">
                A brief history
              </h2>

              <div className="relative max-w-3xl">
                <div className="absolute left-1.5 top-1 bottom-1 w-px bg-white/10" />
                <div className="space-y-6 pl-6">
                  <div className="relative">
                    <div className="absolute -left-6 top-2 h-2 w-2 rounded-full bg-sage-mist" />
                    <p className="text-base text-paper/70 leading-relaxed">
                      <span className="text-white font-medium">2017 ·</span>{' '}
                      BMUCO begins as a grassroots effort to bring serious theoretical science
                      into schools in the Global South that rarely see research‑level mathematics
                      or physics.
                    </p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-6 top-2 h-2 w-2 rounded-full bg-sage-mist/80" />
                    <p className="text-base text-paper/70 leading-relaxed">
                      It grows into an{' '}
                      <span className="text-white">
                        independent, neurodivergent‑led science organization
                      </span>{' '}
                      — running research programs, winter schools, and seminars with Nobel
                      Laureates, Fields Medalists, and leading researchers across Europe.
                    </p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-6 top-2 h-2 w-2 rounded-full bg-sage-mist/60" />
                    <p className="text-base text-paper/70 leading-relaxed">
                      Today, BMUCO co‑hosts the{' '}
                      <span className="text-white">Abel Symposium 2025</span> in Bonn, develops
                      formal mathematical datasets for AI theorem proving, and builds the research
                      ecosystem with institutions and industry partners globally.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* What We Work Towards */}
            <motion.div {...useInViewMotion()} className="border-t border-white/10 pt-16">
              <div className="mb-2 h-1 w-16 bg-sage-mist" />
              <h2 className="mb-12 text-4xl font-serif text-white leading-tight">
                What we work towards
              </h2>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-lg border-l-2 border-sage-mist/30 bg-charcoal/20 pl-6 pr-4 py-4 transition-all duration-300 hover:border-sage-mist hover:bg-charcoal/40 hover:-translate-y-0.5">
                  <h3 className="mb-3 text-xl font-serif text-white">
                    Frontier science without gatekeeping
                  </h3>
                  <p className="text-sm text-paper/70 leading-relaxed">
                    Research programs, winter schools, and direct collaborations with Nobel
                    Laureates and Fields Medalists — built for anyone with the drive to
                    participate, regardless of institution or geography.
                  </p>
                </div>

                <div className="rounded-lg border-l-2 border-sage-mist/30 bg-charcoal/20 pl-6 pr-4 py-4 transition-all duration-300 hover:border-sage-mist hover:bg-charcoal/40 hover:-translate-y-0.5">
                  <h3 className="mb-3 text-xl font-serif text-white">
                    Talent pipelines from overlooked regions
                  </h3>
                  <p className="text-sm text-paper/70 leading-relaxed">
                    Systematic pathways for students in the Global South and underrepresented
                    communities to move from curiosity to research, leadership, and
                    entrepreneurship.
                  </p>
                </div>

                <div className="rounded-lg border-l-2 border-sage-mist/30 bg-charcoal/20 pl-6 pr-4 py-4 transition-all duration-300 hover:border-sage-mist hover:bg-charcoal/40 hover:-translate-y-0.5">
                  <h3 className="mb-3 text-xl font-serif text-white">
                    Science‑driven climate action
                  </h3>
                  <p className="text-sm text-paper/70 leading-relaxed">
                    Climate policy grounded in rigorous science, with youth from affected regions
                    present in decision‑making rooms — from UN SB sessions to COP.
                  </p>
                </div>

                <div className="rounded-lg border-l-2 border-sage-mist/30 bg-charcoal/20 pl-6 pr-4 py-4 transition-all duration-300 hover:border-sage-mist hover:bg-charcoal/40 hover:-translate-y-0.5">
                  <h3 className="mb-3 text-xl font-serif text-white">
                    Deep‑tech built on theoretical science
                  </h3>
                  <p className="text-sm text-paper/70 leading-relaxed">
                    Formal mathematical datasets for AI, quantum computing investment, and deep
                    tech ventures — built from first principles, not shortcuts.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Core Pillars */}
            <motion.div {...useInViewMotion()} className="border-t border-white/10 pt-16">
              <div className="mb-2 h-1 w-16 bg-sage-mist" />
              <h2 className="mb-12 text-4xl font-serif text-white leading-tight">
                Our core pillars
              </h2>

              <div className="grid gap-16 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.1fr)]">
                {/* Textual pillars */}
                <div className="space-y-12">
                  <div className="border-l-2 border-sage-mist/30 pl-6">
                    <h3 className="mb-3 text-2xl font-serif text-white">
                      Theoretical sciences & research programs
                    </h3>
                    <p className="max-w-3xl text-[17px] text-paper/70 leading-relaxed">
                      Research programs, winter schools, and symposia with world‑leading
                      mathematicians and physicists — including co‑hosting the{' '}
                      <span className="text-white">Abel Symposium 2025</span> at the University
                      of Bonn. To date, we have engaged{' '}
                      <span className="text-white">10,000+ students</span> across{' '}
                      <span className="text-white">30+ institutions</span>. Our advisor network
                      includes Nobel Laureates, Fields Medalists, and active researchers at the
                      frontier of theoretical science.
                    </p>
                  </div>

                  <div className="border-l-2 border-sage-mist/30 pl-6">
                    <h3 className="mb-3 text-2xl font-serif text-[hsl(150,35%,70%)]">
                      Climate science & policy
                    </h3>
                    <p className="max-w-3xl text-[17px] text-paper/70 leading-relaxed">
                      Connecting scientific insight with climate justice. BMUCO‑affiliated youth
                      delegates have taken part in UN climate conferences such as{' '}
                      <span className="text-white">SB60</span> and{' '}
                      <span className="text-white">SB62</span>, alongside climate dialogues we
                      organise to ensure that rigorous science and youth perspectives inform
                      global decisions.
                    </p>
                  </div>

                  <div className="border-l-2 border-sage-mist/30 pl-6">
                    <h3 className="mb-3 text-2xl font-serif text-[hsl(0,70%,68%)]">
                      Scientific infrastructure & deep tech
                    </h3>
                    <p className="max-w-3xl text-[17px] text-paper/70 leading-relaxed">
                      We develop formal mathematical datasets in Lean for AI theorem proving,
                      partnering with frontier AI organizations to build the training
                      infrastructure that mathematical AI runs on. This extends into quantum
                      computing investment and deep tech ventures grounded in theoretical
                      science — built for public good, not narrow incumbents.
                    </p>
                  </div>
                </div>

                {/* Abstract visual card */}
                <div className="relative hidden lg:block">
                  <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-oxford-green/35 via-cosmic-blue/25 to-sage-mist/30 blur-3xl" />
                  <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-charcoal/70 p-7 flex flex-col justify-between">
                    <div className="mb-6">
                      <p className="text-xs font-medium uppercase tracking-[0.25em] text-sage-mist/80 mb-3">
                        Three interlinked pillars
                      </p>
                      <p className="text-sm md:text-base text-paper/70 leading-relaxed">
                        Research programs, scientific infrastructure, and deep tech investment —
                        designed to reinforce one another, creating a continuum from theoretical
                        curiosity to real‑world impact.
                      </p>
                    </div>

                    <div className="relative mt-4 h-40">
                      <svg
                        viewBox="0 0 240 160"
                        className="h-full w-full"
                        aria-hidden="true"
                      >
                        <defs>
                          <radialGradient id="pillarGlow" cx="50%" cy="50%" r="70%">
                            <stop offset="0%" stopColor="hsl(150,35%,60%)" stopOpacity="0.9" />
                            <stop offset="50%" stopColor="hsl(200,60%,55%)" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="hsl(0,70%,55%)" stopOpacity="0" />
                          </radialGradient>
                        </defs>
                        <circle cx="60" cy="80" r="46" fill="none" stroke="hsla(150,20%,70%,0.55)" strokeWidth="1.2" />
                        <circle cx="120" cy="80" r="46" fill="none" stroke="hsla(200,35%,65%,0.55)" strokeWidth="1.2" />
                        <circle cx="180" cy="80" r="46" fill="none" stroke="hsla(0,55%,60%,0.55)" strokeWidth="1.2" />
                        <circle cx="60" cy="80" r="18" fill="url(#pillarGlow)" opacity="0.7" />
                        <circle cx="120" cy="80" r="18" fill="url(#pillarGlow)" opacity="0.7" />
                        <circle cx="180" cy="80" r="18" fill="url(#pillarGlow)" opacity="0.7" />
                      </svg>
                    </div>

                    <div className="mt-4 flex items-center gap-3 text-xs text-paper/40">
                      <span className="h-px flex-1 bg-white/10" />
                      <span>Systems‑level view of science</span>
                      <span className="h-px flex-1 bg-white/10" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </Container>
      </section>
    </main>
  );
}
