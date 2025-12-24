import { Container } from '../components/Common';
import { motion } from 'framer-motion';
import { useInViewMotion } from '../components/Common';

export default function Join() {
  return (
    <main className="bg-obsidian min-h-screen text-paper">
      <section className="py-32">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-sage-mist">Join the mission</p>
            <h1 className="mb-6 text-5xl font-serif text-white leading-tight md:text-6xl">
              Be part of the change
            </h1>
            <p className="text-lg text-paper/60 leading-relaxed">
              Whether you're a student, researcher, institution, or supporter — there are many ways to contribute to BMUCO's mission.
            </p>
          </div>

          <div className="mx-auto mt-20 max-w-5xl space-y-16">
            
            <motion.div {...useInViewMotion()} className="border-t border-white/10 pt-12">
              <div className="mb-2 h-1 w-16 bg-sage-mist"></div>
              <h2 className="mb-6 text-3xl font-serif text-white">For Students</h2>
              <p className="mb-6 max-w-3xl text-base text-paper/70 leading-relaxed">
                Join our programs, attend talks, participate in research schools, or apply for mentorship opportunities. We welcome students from all backgrounds, especially from under-resourced regions.
              </p>
              <a href="/programs" className="inline-flex items-center gap-2 border-b-2 border-sage-mist pb-1 text-base font-medium text-white transition hover:border-white">
                Explore programs →
              </a>
            </motion.div>

            <motion.div {...useInViewMotion()} className="border-t border-white/10 pt-12">
              <div className="mb-2 h-1 w-16 bg-sage-mist"></div>
              <h2 className="mb-6 text-3xl font-serif text-white">For Researchers & Institutions</h2>
              <p className="mb-6 max-w-3xl text-base text-paper/70 leading-relaxed">
                Partner with us to co-host events, provide mentorship, or collaborate on research initiatives. We're always looking for experts passionate about democratizing science.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 border-b-2 border-sage-mist pb-1 text-base font-medium text-white transition hover:border-white">
                Get in touch →
              </a>
            </motion.div>

            <motion.div {...useInViewMotion()} className="border-t border-white/10 pt-12">
              <div className="mb-2 h-1 w-16 bg-sage-mist"></div>
              <h2 className="mb-6 text-3xl font-serif text-white">Support Our Work</h2>
              <p className="mb-6 max-w-3xl text-base text-paper/70 leading-relaxed">
                BMUCO is an independent, non-profit organization. Your support helps us expand access to theoretical science for students worldwide, particularly in the Global South.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 border-b-2 border-sage-mist pb-1 text-base font-medium text-white transition hover:border-white">
                Contact us to support →
              </a>
            </motion.div>
          </div>
        </Container>
      </section>
    </main>
  );
}
