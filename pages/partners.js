import { motion } from 'framer-motion';
import { Container, useInViewMotion } from '../components/Common';
import { ExternalLink } from 'lucide-react';

const partners = [
  {
    name: "London Institute for Mathematical Sciences",
    shortName: "LIMS",
    logo: "https://static.wixstatic.com/media/c2f56a_b750f31f6240486fa37c8bcbfbac73bc~mv2.png",
    description: "Co-hosting the Maryna Viazovska interview at the Royal Institution",
    url: "https://lims.ac.uk",
    darkBg: false
  },
  {
    name: "EPSRC National Edge AI Hub",
    shortName: "Edge AI Hub",
    logo: "https://static.wixstatic.com/media/3799c9_4ce7ac67be32482a899cca5373419dd9~mv2.webp",
    description: "Newcastle University — Advanced AI research and applications",
    url: "https://edgeaihub.co.uk/",
    darkBg: true
  },
  {
    name: "Queen's University Belfast — School of Mathematics & Physics",
    shortName: "QUB",
    logo: "https://static.wixstatic.com/media/c2f56a_9fcb6841648d4f87b43cd423c22324d8~mv2.png",
    description: "Collaborative research schools and theoretical physics programs",
    url: "https://www.qub.ac.uk/schools/SchoolofMathematicsandPhysics/",
    darkBg: false
  }
];

export default function Partners() {
  return (
    <main className="bg-obsidian min-h-screen text-paper">
      <section className="py-32">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-sage-mist">Collaborations</p>
            <h1 className="mb-6 text-5xl font-serif text-white leading-tight md:text-6xl">
              Partners & Institutions
            </h1>
            <p className="text-lg text-paper/60 leading-relaxed">
              BMUCO works with leading research institutions across Europe to deliver world-class programs and expand access to theoretical science.
            </p>
          </div>

          {/* Partners Grid */}
          <div className="mx-auto mt-20 max-w-5xl space-y-12">
            {partners.map((partner, idx) => (
              <motion.a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                {...useInViewMotion(idx * 0.1)}
                className="group block border-t border-white/10 pt-12"
              >
                <div className="grid gap-8 lg:grid-cols-[200px_1fr]">
                  {/* Logo */}
                  <div className={`flex items-center justify-center rounded-2xl p-8 ${partner.darkBg ? 'bg-charcoal' : 'bg-white/5'}`}>
                    <img 
                      src={partner.logo} 
                      alt={partner.shortName} 
                      className="max-h-24 w-full object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center">
                    <div className="mb-2 flex items-center gap-2">
                      <h2 className="text-2xl font-serif text-white transition group-hover:text-sage-mist">
                        {partner.name}
                      </h2>
                      <ExternalLink size={20} className="text-sage-mist/50 transition group-hover:text-sage-mist" />
                    </div>
                    <p className="text-base text-paper/70 leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div 
            {...useInViewMotion()}
            className="mx-auto mt-24 max-w-3xl border-t border-white/10 pt-16 text-center"
          >
            <h3 className="mb-4 text-3xl font-serif text-white">Interested in partnering?</h3>
            <p className="mb-8 text-base text-paper/60 leading-relaxed">
              We collaborate with universities, research labs, NGOs, and organizations that share our mission of democratizing access to science.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 border-b-2 border-sage-mist pb-1 text-base font-medium text-white transition hover:border-white"
            >
              Get in touch →
            </a>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
