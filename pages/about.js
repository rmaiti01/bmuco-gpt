import { motion } from 'framer-motion';
import { Container, useInViewMotion } from '../components/Common';

export default function About() {
  // Slow, elegant variant for hero heading + text
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
              Independent, global, and purpose‑driven
            </motion.h1>

            <motion.p
              variants={heroVariants}
              initial="initial"
              animate="animate"
              transition={heroTransition(0.6)}
              className="text-lg text-paper/60 leading-relaxed"
            >
              Our mission is to democratise access to theoretical science and utilise deep tech to ensure that
              breakthroughs genuinely drive inclusive innovation and meaningful climate action globally.
            </motion.p>

            {/* Metrics strip – 3 items */}
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
            {/* A Brief History – timeline style */}
            <motion.div {...useInViewMotion()} className="border-t border-white/10 pt-16">
              <div className="mb-2 h-1 w-16 bg-sage-mist" />
              <h2 className="mb-6 text-4xl font-serif text-white leading-tight">
                A brief history
              </h2>

              <div className="relative max-w-3xl">
                {/* vertical line */}
                <div className="absolute left-1.5 top-1 bottom-1 w-px bg-white/10" />
                <div className="space-y-6 pl-6">
                  <div className="relative">
                    <div className="absolute -left-6 top-2 h-2 w-2 rounded-full bg-sage-mist" />
                    <p className="text-base text-paper/70 leading-relaxed">
                      <span className="text-white font-medium">2017 ·</span>{' '}
                      BMUCO begins as a grassroots effort to bring serious theoretical science into
                      schools in the Global South that rarely see research‑level mathematics or physics.
                    </p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-6 top-2 h-2 w-2 rounded-full bg-sage-mist/80" />
                    <p className="text-base text-paper/70 leading-relaxed">
                      It grows into an <span className="text-white">independent, neurodivergent‑led organisation</span>{' '}
                      partnering with universities and institutes across Europe.
                    </p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-6 top-2 h-2 w-2 rounded-full bg-sage-mist/60" />
                    <p className="text-base text-paper/70 leading-relaxed">
                      BMUCO co‑hosts major events such as the{' '}
                      <span className="text-white">Abel Symposium 2025</span> in Bonn and engages
                      <span className="text-white"> thousands of students</span> in live dialogues
                      with leading researchers.
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
                    A world where access to Nobel laureates, Fields medalists, and cutting‑edge researchers is
                    not restricted by geography, money, or background.
                  </p>
                </div>

                <div className="rounded-lg border-l-2 border-sage-mist/30 bg-charcoal/20 pl-6 pr-4 py-4 transition-all duration-300 hover:border-sage-mist hover:bg-charcoal/40 hover:-translate-y-0.5">
                  <h3 className="mb-3 text-xl font-serif text-white">
                    Talent pipelines from overlooked regions
                  </h3>
                  <p className="text-sm text-paper/70 leading-relaxed">
                    Systematic pathways for students in the Global South and underrepresented communities to move
                    from curiosity to research, leadership, and entrepreneurship.
                  </p>
                </div>

                <div className="rounded-lg border-l-2 border-sage-mist/30 bg-charcoal/20 pl-6 pr-4 py-4 transition-all duration-300 hover:border-sage-mist hover:bg-charcoal/40 hover:-translate-y-0.5">
                  <h3 className="mb-3 text-xl font-serif text-white">
                    Science‑driven climate action
                  </h3>
                  <p className="text-sm text-paper/70 leading-relaxed">
                    Climate policy and community action grounded in rigorous scientific understanding, with youth
                    from affected regions present in decision‑making rooms.
                  </p>
                </div>

                <div className="rounded-lg border-l-2 border-sage-mist/30 bg-charcoal/20 pl-6 pr-4 py-4 transition-all duration-300 hover:border-sage-mist hover:bg-charcoal/40 hover:-translate-y-0.5">
                  <h3 className="mb-3 text-xl font-serif text-white">
                    Deep‑tech for public good
                  </h3>
                  <p className="text-sm text-paper/70 leading-relaxed">
                    Using formal methods, AI, and advanced tools to build infrastructures that benefit society
                    broadly, not just narrow incumbents.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Core Pillars with abstract side graphic */}
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
                      Theoretical sciences & education
                    </h3>
                    <p className="max-w-3xl text-[17px] text-paper/70 leading-relaxed">
                      Live dialogues, workshops, and symposia with world‑leading researchers in mathematics,
                      physics, and related fields — including co‑hosting the{' '}
                      <span className="text-white">Abel Symposium 2025</span> at the University of Bonn. To date,
                      we have engaged <span className="text-white">10,000+ students</span> across{' '}
                      <span className="text-white">30+ institutions</span>. We have also hosted research schools
                      and mentorship programs in collaboration with UK universities.
                    </p>
                  </div>

                  <div className="border-l-2 border-sage-mist/30 pl-6">
                    {/* tinted green to match left circle */}
                    <h3 className="mb-3 text-2xl font-serif text-[hsl(150,35%,70%)]">
                      Climate science & policy
                    </h3>
                    <p className="max-w-3xl text-[17px] text-paper/70 leading-relaxed">
                      Connecting scientific insight with climate justice. BMUCO‑affiliated youth delegates have
                      taken part in UN climate conferences such as <span className="text-white">SB60</span> and{' '}
                      <span className="text-white">SB62</span>, alongside climate dialogues we organise to ensure
                      that rigorous science and youth perspectives inform global decisions.
                    </p>
                  </div>

                  <div className="border-l-2 border-sage-mist/30 pl-6">
                    {/* tinted red to match right circle */}
                    <h3 className="mb-3 text-2xl font-serif text-[hsl(0,70%,68%)]">
                      Equitable Deep Tech  
                    </h3>
                    <p className="max-w-3xl text-[17px] text-paper/70 leading-relaxed">
                      Future planned collaborations with universities and AI‑focused startups to train
                      future mathematicians on formalism (proof assistants such as Lean) and create verification experts. This pillar builds the AI systems that can reason
                      about mathematics, verify algorithms, and support high‑stakes domains like{' '}
                      <span className="text-white">finance</span> and{' '}
                      <span className="text-white">climate modelling</span>. This also includes investing in future technologies such as quantum computing.
                    </p>
                  </div>
                </div>

                {/* Abstract visual / narrative card */}
                <div className="relative hidden lg:block">
                  {/* glowing gradient background */}
                  <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-oxford-green/35 via-cosmic-blue/25 to-sage-mist/30 blur-3xl" />
                  <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-charcoal/70 p-7 flex flex-col justify-between">
                    <div className="mb-6">
                      <p className="text-xs font-medium uppercase tracking-[0.25em] text-sage-mist/80 mb-3">
                        Three interlinked pillars
                      </p>
                      <p className="text-sm md:text-base text-paper/70 leading-relaxed">
                        Education, climate action, and deep tech are designed to reinforce one another,
                        creating a continuum from school‑level curiosity to research leadership and policy
                        impact.
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
                        <circle
                          cx="60"
                          cy="80"
                          r="46"
                          fill="none"
                          stroke="hsla(150,20%,70%,0.55)"
                          strokeWidth="1.2"
                        />
                        <circle
                          cx="120"
                          cy="80"
                          r="46"
                          fill="none"
                          stroke="hsla(200,35%,65%,0.55)"
                          strokeWidth="1.2"
                        />
                        <circle
                          cx="180"
                          cy="80"
                          r="46"
                          fill="none"
                          stroke="hsla(0,55%,60%,0.55)"
                          strokeWidth="1.2"
                        />
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
