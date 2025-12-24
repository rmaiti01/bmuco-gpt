import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, SectionTitle, useInViewMotion } from '../components/Common';
import { ArrowRight, X, Play } from 'lucide-react';
import Link from 'next/link';
import DATA from '../lib/data';

// Schools Outreach Modal
const SchoolsOutreachModal = ({ onClose }) => {
  const images = [
    "https://static.wixstatic.com/media/02ca48_df92f8f1897746bcb9f15e536ea94a97~mv2.jpg",
    "https://static.wixstatic.com/media/f25f88_c7f60153389a40d3b8d6aeedeea2392f~mv2.jpg",
    "https://static.wixstatic.com/media/02ca48_9e49261af9b5461d9837735ff00fe3df~mv2.jpg",
    "https://static.wixstatic.com/media/02ca48_186591d5b7c24a5b98b3606c59355e99~mv2.jpg"
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-obsidian/95 p-4 backdrop-blur-md" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="mx-auto my-12 w-full max-w-6xl rounded-2xl border border-white/5 bg-charcoal p-16"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="absolute right-8 top-8 rounded-full bg-white/5 p-2 text-white hover:bg-white/10 transition" onClick={onClose}>
          <X size={20} />
        </button>

        <h2 className="mb-8 text-4xl font-serif text-white">Schools Outreach</h2>
        
        <div className="mb-12 grid gap-6 md:grid-cols-2">
          {images.map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-xl">
              <img src={img} alt={`Outreach ${idx + 1}`} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>

        <div className="max-w-3xl space-y-6 text-base text-paper/70 leading-relaxed">
          <p>
            Since 2017, BMUCO has brought research-level mathematics and physics directly into schools across India and Nepal that rarely see frontier science. Our hands-on seminars, interactive demonstrations, and workshops introduce students to concepts from quantum mechanics to analytic number theory.
          </p>
          <p>
            We've reached <span className="text-white">30+ schools</span> and engaged <span className="text-white">thousands of students</span>, many in under-resourced regions of the Global South. Our programs are designed to spark curiosity and show students that advanced theoretical science is within their reach.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

// Mentorship Modal
const MentorshipModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-obsidian/95 p-4 backdrop-blur-md" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="mx-auto my-12 w-full max-w-6xl rounded-2xl border border-white/5 bg-charcoal p-16"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="absolute right-8 top-8 rounded-full bg-white/5 p-2 text-white hover:bg-white/10 transition" onClick={onClose}>
          <X size={20} />
        </button>

        <h2 className="mb-8 text-4xl font-serif text-white">Mentorship Programs</h2>
        
        <div className="mb-12">
          <img 
            src="https://static.wixstatic.com/media/02ca48_69704d9d57b046d2aeee3e057ad282e7~mv2.jpg" 
            alt="Mentorship Program" 
            className="w-full rounded-xl object-cover"
          />
        </div>

        <div className="mb-12 grid gap-8 md:grid-cols-[300px_1fr]">
          <div className="overflow-hidden rounded-xl">
            <img 
              src="https://static.wixstatic.com/media/f25f88_7113a16f4e1f4ddfa846d95f2372465a~mv2.jpg" 
              alt="Dr Edward Hirst" 
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="mb-2 text-2xl font-serif text-white">Dr Edward Hirst</h3>
            <p className="mb-4 text-sm text-sage-mist">
              PhD in Mathematics, University of London | Former Queen Mary Postdoc
            </p>
            <p className="text-base text-paper/70 leading-relaxed">
              Research interests: Application of machine learning methods to problems in mathematical and theoretical physics
            </p>
          </div>
        </div>

        <div className="max-w-3xl space-y-6 text-base text-paper/70 leading-relaxed">
          <p>
            BMUCO's mentorship programs pair students with leading researchers for project-based learning, reading groups, and one-on-one guidance. Our mentors include PhDs, postdocs, and faculty from top institutions who are passionate about supporting the next generation.
          </p>
          <p>
            Mentorship sessions cover everything from research methods to career pathways, helping students navigate the journey from undergraduate curiosity to graduate research and beyond.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

// Research Schools Modal - ADD THIS ONE HERE
const ResearchSchoolsModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-obsidian/95 p-4 backdrop-blur-md" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="mx-auto my-12 w-full max-w-6xl rounded-2xl border border-white/5 bg-charcoal p-16"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="absolute right-8 top-8 rounded-full bg-white/5 p-2 text-white hover:bg-white/10 transition" onClick={onClose}>
          <X size={20} />
        </button>

        <h2 className="mb-8 text-4xl font-serif text-white">Research Schools</h2>
        
        <div className="mb-12">
          <img 
            src="https://static.wixstatic.com/media/02ca48_2bd04b5392904f05935db55eb55555fa~mv2.png" 
            alt="Winter School in QFT" 
            className="w-full rounded-xl object-cover"
          />
        </div>

        <div className="max-w-3xl space-y-6 text-base text-paper/70 leading-relaxed">
          <h3 className="text-2xl font-serif text-white">Winter School in Quantum Field Theory</h3>
          <p>
            We hosted an online winter school in QFT with the supervision of <span className="text-white">Prof. Neil Lambert</span> (King's College London), <span className="text-white">Elijah Cavan</span> (University of Waterloo), and <span className="text-white">Dr. Gleb Gribakin</span> (Queen's University Belfast).
          </p>
          <p>
            We received <span className="text-white">several hundred applications</span> and we were particularly happy to welcome many applicants from the Global South in our program.
          </p>
          <p>
            The school covered advanced topics in quantum field theory, providing students with intensive training and direct mentorship from leading researchers in theoretical physics.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

// Climate Dialogues Modal
const ClimateDialoguesModal = ({ onClose }) => {
  const [videoUrl, setVideoUrl] = useState("");

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-obsidian/95 p-4 backdrop-blur-md" onClick={onClose}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="mx-auto my-12 w-full max-w-6xl rounded-2xl border border-white/5 bg-charcoal p-16"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="absolute right-8 top-8 rounded-full bg-white/5 p-2 text-white hover:bg-white/10 transition" onClick={onClose}>
            <X size={20} />
          </button>

          <h2 className="mb-8 text-4xl font-serif text-white">Climate Dialogues</h2>
          
          <div className="mb-12 space-y-6 text-base text-paper/70 leading-relaxed">
            <p>
              BMUCO organizes pre-COP climate dialogues bringing together scientists, policymakers, and youth activists to ensure that rigorous scientific understanding informs climate action and policy decisions.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-serif text-white">Recorded Dialogues</h3>
            {DATA.climateDialogues && DATA.climateDialogues.map((dialogue) => (
              <div key={dialogue.title} className="group border-l-2 border-sage-mist/30 pl-6 transition hover:border-sage-mist">
                <p className="mb-1 text-xs text-sage-mist">{dialogue.meta}</p>
                <h4 className="mb-2 text-xl font-serif text-white">{dialogue.title}</h4>
                <button
                  onClick={() => setVideoUrl(dialogue.videoUrl)}
                  disabled={!dialogue.videoUrl}
                  className="inline-flex items-center gap-2 text-sm text-paper/60 transition hover:text-sage-mist disabled:opacity-50"
                >
                  <Play size={14} /> Watch recording
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {videoUrl && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-obsidian/95 p-4 backdrop-blur-md" onClick={() => setVideoUrl("")}>
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button className="absolute -right-4 -top-4 z-10 rounded-full bg-white/10 p-3 text-white backdrop-blur hover:bg-white/20" onClick={() => setVideoUrl("")}>
              <X />
            </button>
            <div className="aspect-video w-full overflow-hidden rounded-2xl">
              <iframe
                src={videoUrl.replace("watch?v=", "embed/")}
                title="Climate Dialogue"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Youth Delegation Modal
const YouthDelegationModal = ({ onClose }) => {
  const images = [
    "https://media.licdn.com/dms/image/v2/D4E22AQHE_Ua287U3Ig/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1719192635508?e=1767830400&v=beta&t=SWO_WTGqEGrvFRIx3I30F7YePNTeJglLMJVSfhPqB4s",
    "https://media.licdn.com/dms/image/v2/D4E22AQGjdHz9U4TR5g/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1719130283825?e=1767830400&v=beta&t=n0KRFvlO9ijgUO0tjuEk4Zd0zQp-8PtqBjZLMb3TA4Q",
    "https://media.licdn.com/dms/image/v2/D4E22AQH1drFUHB2YVA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1719092046941?e=1767830400&v=beta&t=qEYbuLfIyFj5TC4QTWBAV4XsB44VH93xtE6vPX_NtLw"
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-obsidian/95 p-4 backdrop-blur-md" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="mx-auto my-12 w-full max-w-6xl rounded-2xl border border-white/5 bg-charcoal p-16"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="absolute right-8 top-8 rounded-full bg-white/5 p-2 text-white hover:bg-white/10 transition" onClick={onClose}>
          <X size={20} />
        </button>

        <h2 className="mb-8 text-4xl font-serif text-white">Youth Delegation</h2>
        
        <div className="mb-12 space-y-6 text-base text-paper/70 leading-relaxed">
          <p>
            BMUCO has been represented at various UN conferences, ensuring that youth voices from the Global South are present in rooms where critical climate decisions are made.
          </p>
          <p>
            Our delegates have participated in:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><span className="text-white">UN SB60 and SB62</span> — Subsidiary Body meetings on climate policy</li>
            <li><span className="text-white">IYF Doha</span> — International Youth Forum (supported by UNDESA)</li>
          </ul>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {images.map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-xl">
              <img src={img} alt={`UN Conference ${idx + 1}`} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

// Main Programs Component
export default function Programs() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <main className="bg-obsidian min-h-screen text-paper">
      <section className="py-32">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-sage-mist">What we do</p>
            <h1 className="mb-6 text-5xl font-serif text-white leading-tight md:text-6xl">
              Programs across three core pillars
            </h1>
            <p className="text-lg text-paper/60 leading-relaxed">
              From frontier mathematics to climate justice, we connect students with world-leading researchers and create pathways from curiosity to impact.
            </p>
          </div>

          <div className="mx-auto mt-32 max-w-5xl space-y-32">
            
            {/* PILLAR 1: Theoretical Sciences & Education */}
            <motion.div {...useInViewMotion()} className="border-t border-white/10 pt-16">
              <div className="mb-12 grid gap-12 lg:grid-cols-[300px_1fr]">
                <div>
                  <div className="mb-2 h-1 w-16 bg-sage-mist"></div>
                  <h2 className="mb-4 text-4xl font-serif text-white leading-tight">
                    Theoretical Sciences & Education
                  </h2>
                  <p className="text-base text-paper/60 leading-relaxed">
                    Connecting students with Nobel laureates, Fields medalists, and frontier researchers.
                  </p>
                </div>
                <div className="flex items-center gap-12">
                  <div className="text-center">
                    <p className="text-4xl font-serif text-white">10k+</p>
                    <p className="mt-1 text-sm text-sage-mist">Students reached</p>
                  </div>
                  <div className="h-12 w-px bg-white/10"></div>
                  <div className="text-center">
                    <p className="text-4xl font-serif text-white">30+</p>
                    <p className="mt-1 text-sm text-sage-mist">Schools visited</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Link href="/talks">
                  <a className="group block border-l-2 border-sage-mist/30 pl-6 transition hover:border-sage-mist">
                    <h3 className="mb-2 text-xl font-serif text-white">Talk Series</h3>
                    <p className="mb-3 text-sm text-paper/60 leading-relaxed">
                      Conversations with laureates and leading researchers
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm text-sage-mist transition group-hover:gap-3">
                      View talks <ArrowRight size={16} />
                    </span>
                  </a>
                </Link>

                <button
                  onClick={() => setActiveModal('schools')}
                  className="group block border-l-2 border-sage-mist/30 pl-6 text-left transition hover:border-sage-mist"
                >
                  <h3 className="mb-2 text-xl font-serif text-white">Schools Outreach</h3>
                  <p className="mb-3 text-sm text-paper/60 leading-relaxed">
                    Bringing research-level science to the Global South
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm text-sage-mist transition group-hover:gap-3">
                    Learn more <ArrowRight size={16} />
                  </span>
                </button>

                <button
                  onClick={() => setActiveModal('researchSchools')}
                  className="group block border-l-2 border-sage-mist/30 pl-6 text-left transition hover:border-sage-mist"
                >
                  <h3 className="mb-2 text-xl font-serif text-white">Research Schools</h3>
                  <p className="mb-3 text-sm text-paper/60 leading-relaxed">
                    Intensive programs in QFT, mathematics, and more
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm text-sage-mist transition group-hover:gap-3">
                    Learn more <ArrowRight size={16} />
                  </span>
                </button>

                <button
                  onClick={() => setActiveModal('mentorship')}
                  className="group block border-l-2 border-sage-mist/30 pl-6 text-left transition hover:border-sage-mist"
                >
                  <h3 className="mb-2 text-xl font-serif text-white">Mentorship Programs</h3>
                  <p className="mb-3 text-sm text-paper/60 leading-relaxed">
                    One-on-one guidance from PhDs and postdocs
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm text-sage-mist transition group-hover:gap-3">
                    Learn more <ArrowRight size={16} />
                  </span>
                </button>
              </div>
            </motion.div>

            {/* PILLAR 2: Climate Science & Policy */}
            <motion.div {...useInViewMotion()} className="border-t border-white/10 pt-16">
              <div className="mb-12 grid gap-12 lg:grid-cols-[300px_1fr]">
                <div>
                  <div className="mb-2 h-1 w-16 bg-sage-mist"></div>
                  <h2 className="mb-4 text-4xl font-serif text-white leading-tight">
                    Climate Science & Policy
                  </h2>
                  <p className="text-base text-paper/60 leading-relaxed">
                    Bridging rigorous science with climate justice through youth leadership.
                  </p>
                </div>
                <div className="flex items-center gap-12">
                  <div className="text-center">
                    <p className="text-4xl font-serif text-white">SB60+62</p>
                    <p className="mt-1 text-sm text-sage-mist">UN conferences</p>
                  </div>
                  <div className="h-12 w-px bg-white/10"></div>
                  <div className="text-center">
                    <p className="text-4xl font-serif text-white">Global South</p>
                    <p className="mt-1 text-sm text-sage-mist">Focus</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <button
                  onClick={() => setActiveModal('climateDialogues')}
                  className="group block border-l-2 border-sage-mist/30 pl-6 text-left transition hover:border-sage-mist"
                >
                  <h3 className="mb-2 text-xl font-serif text-white">Climate Dialogues</h3>
                  <p className="mb-3 text-sm text-paper/60 leading-relaxed">
                    Pre-COP engagements with scientists and policymakers
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm text-sage-mist transition group-hover:gap-3">
                    View dialogues <ArrowRight size={16} />
                  </span>
                </button>

                <button
                  onClick={() => setActiveModal('youthDelegation')}
                  className="group block border-l-2 border-sage-mist/30 pl-6 text-left transition hover:border-sage-mist"
                >
                  <h3 className="mb-2 text-xl font-serif text-white">Youth Delegates</h3>
                  <p className="mb-3 text-sm text-paper/60 leading-relaxed">
                    BMUCO representatives at global climate conferences
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm text-sage-mist transition group-hover:gap-3">
                    Learn more <ArrowRight size={16} />
                  </span>
                </button>
              </div>
            </motion.div>

            {/* PILLAR 3: Mathematical Frontiers & AI */}
            <motion.div {...useInViewMotion()} className="border-t border-white/10 pt-16">
              <div className="mb-12 grid gap-12 lg:grid-cols-[300px_1fr]">
                <div>
                  <div className="mb-2 h-1 w-16 bg-sage-mist"></div>
                  <h2 className="mb-4 text-4xl font-serif text-white leading-tight">
                    Equitable Deep Tech
                  </h2>
                  <p className="text-base text-paper/60 leading-relaxed">
                    Investing in Deep Tech that benefits theoretical sciences and drives equitable innovation such as Building AI systems that reason about mathematics.
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="rounded-lg border border-sage-mist/20 bg-oxford-green/5 px-6 py-3">
                    <p className="text-sm font-medium uppercase tracking-wider text-sage-mist">
                      Launching 2025-26
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {[
                  { title: 'Formalism in Mathematics', desc: 'Training in mathematical formalization and verification' },
                  { title: 'Research Initiatives', desc: 'Collaborative projects in finance and climate modeling' },
                  { title: 'AI Lab Partnerships', desc: 'Partnerships with universities and AI startups' }
                ].map((item) => (
                  <div key={item.title} className="border-l-2 border-white/10 pl-6 opacity-50">
                    <h3 className="mb-2 text-xl font-serif text-white">{item.title}</h3>
                    <p className="mb-3 text-sm text-paper/50 leading-relaxed">{item.desc}</p>
                    <span className="text-sm text-sage-mist/50">Coming soon</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div {...useInViewMotion()} className="mx-auto mt-32 max-w-3xl border-t border-white/10 pt-16 text-center">
            <h3 className="mb-4 text-3xl font-serif text-white">Want to get involved?</h3>
            <p className="mb-8 text-base text-paper/60 leading-relaxed">
              Whether you're a student, researcher, institution, or supporter — there are many ways to join BMUCO's mission.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/join">
                <a className="inline-flex items-center gap-2 border-b-2 border-sage-mist pb-1 text-base font-medium text-white transition hover:border-white">
                  Join BMUCO <ArrowRight size={16} />
                </a>
              </Link>
              <span className="text-paper/30">·</span>
              <Link href="/contact">
                <a className="inline-flex items-center gap-2 border-b-2 border-transparent pb-1 text-base font-medium text-sage-mist transition hover:border-sage-mist">
                  Partner with us <ArrowRight size={16} />
                </a>
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>

      <AnimatePresence>
        {activeModal === 'schools' && <SchoolsOutreachModal onClose={() => setActiveModal(null)} />}
        {activeModal === 'mentorship' && <MentorshipModal onClose={() => setActiveModal(null)} />}
        {activeModal === 'researchSchools' && <ResearchSchoolsModal onClose={() => setActiveModal(null)} />}
        {activeModal === 'climateDialogues' && <ClimateDialoguesModal onClose={() => setActiveModal(null)} />}
        {activeModal === 'youthDelegation' && <YouthDelegationModal onClose={() => setActiveModal(null)} />}
      </AnimatePresence>
    </main>
  );
}
