import { motion } from 'framer-motion';
import { Container, useInViewMotion } from '../components/Common';
import { ExternalLink } from 'lucide-react';

const partners = [
  {
    name: "Hausdorff Centre for Mathematics",
    shortName: "Hausdorff",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_HCM.jpg", // Store logo locally in your public/images folder
    description: "Co-hosted the Abel Symposium 2025 in Bonn in January—one of mathematics' most prestigious convenings, connected to the Abel Prize (mathematics' equivalent of the Nobel Prize). The Hausdorff Centre is one of the world's leading mathematical research institutions, recognized globally for groundbreaking work across pure and applied mathematics, geometry, and mathematical physics.",
    url: "https://www.hausdorff-center.uni-bonn.de/",
    darkBg: false
  },
  {
    name: "London Institute for Mathematical Sciences",
    shortName: "LIMS",
    logo: "https://static.wixstatic.com/media/c2f56a_b750f31f6240486fa37c8bcbfbac73bc~mv2.png",
    description: "An independent research institute dedicated to fundamental questions in physics, mathematics, and computer science. We co-hosted the Maryna Viazovska interview at the Royal Institution—bringing the only living woman Fields medalist into conversation with students globally. We also collaborate on regular meetings at the Royal Institution for research students and postdocs in theoretical physics and mathematics, creating opportunities for young researchers from different universities to meet, interact, and engage with specialists—cutting across institutions and disciplines.",
    url: "https://lims.ac.uk",
    darkBg: false
  },
  {
    name: "EPSRC National Edge AI Hub",
    shortName: "Edge AI Hub",
    logo: "https://static.wixstatic.com/media/3799c9_4ce7ac67be32482a899cca5373419dd9~mv2.webp",
    description: "Newcastle University's hub for advanced AI research and applications at the edge of computing. We're exploring collaborations in AI applications for theoretical sciences and building equitable research infrastructure that bridges cutting-edge technology with underrepresented communities in mathematics and physics.",
    url: "https://edgeaihub.co.uk/",
    darkBg: true
  },
  {
    name: "Queen's University Belfast — School of Mathematics & Physics",
    shortName: "QUB",
    logo: "https://static.wixstatic.com/media/c2f56a_9fcb6841648d4f87b43cd423c22324d8~mv2.png",
    description: "A leading research institution in theoretical physics and mathematics. We've collaborated on research schools and theoretical physics programs, creating structured pathways for students to engage with frontier research in quantum field theory, mathematical physics, and related areas.",
    url: "https://www.qub.ac.uk/schools/SchoolofMathematicsandPhysics/",
    darkBg: false
  }
];

const collaborationTypes = [
  {
    title: "Event Collaboration",
    description: "Co-host workshops, organize convenings, run technical sessions at our research schools. We've done this with Abel Symposium and the Royal Institution. We can do it with you."
  },
  {
    title: "Infrastructure Building",
    description: "Co-develop tools and frameworks for theoretical sciences. We're building infrastructure for how science advances in the AI era—join us in shaping what this looks like."
  },
  {
    title: "Funding Partnerships",
    description: "Support our mission as we formalize as a nonprofit. Your funding accelerates research schools, equitable access programs, and infrastructure that will define the next generation of scientific research."
  },
  {
    title: "Something New",
    description: "Have an idea we haven't thought of? Let's talk. The best partnerships are ones neither side imagined at first."
  }
];

export default function Partners() {
  return (
    <main className="bg-obsidian min-h-screen text-paper">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-nebula opacity-30" />
        <div className="noise-overlay absolute inset-0" />
        
        <Container>
          <div className="relative mx-auto max-w-5xl text-center px-4">
            {/* Title and subtitle - first animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="mb-4 md:mb-6 text-xs md:text-sm font-medium uppercase tracking-widest text-sage-mist">
                Strategic Collaborations
              </p>
              <h1 className="mb-6 md:mb-8 text-4xl md:text-5xl lg:text-7xl font-serif text-white leading-[1.1]">
                Building the Future of Science
              </h1>
            </motion.div>
            
            {/* First paragraph - delayed, BIGGER */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-5 text-base md:text-lg text-paper/80 leading-relaxed max-w-4xl mx-auto"
            >
              <p>
                We co-hosted the 2025 Abel Symposium, connect <span className="text-white font-medium">thousands of Global South science-minded people</span> to top names in science through our research schools and outreach programs, and build infrastructure where others see barriers.
              </p>
            </motion.div>

            {/* Second paragraph - more delayed, BIGGER */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-5 text-base md:text-lg text-paper/80 leading-relaxed max-w-4xl mx-auto"
            >
              <p>
                Now we're creating tools and frameworks that will shape how science advances in the AI era—and we're doing it as a student-led, mission-driven organization.
              </p>
            </motion.div>

            {/* Closing statement - most delayed, two lines */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-10 md:mt-12 space-y-2"
            >
              <p className="text-lg md:text-xl lg:text-2xl font-serif text-sage-mist leading-tight">
                This is infrastructure work. This is generational work.
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl font-serif text-white leading-tight">
                And we're doing it now.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Partners Grid - MOVED UP */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <Container>
          <motion.div {...useInViewMotion()} className="mx-auto max-w-6xl px-4">
            <div className="mb-16 md:mb-20 text-center">
              <h2 className="mb-4 md:mb-6 text-3xl md:text-4xl lg:text-5xl font-serif text-white">
                Our Collaborations
              </h2>
              <p className="text-base md:text-lg text-paper/60 max-w-3xl mx-auto leading-relaxed px-4">
                Organizations we've worked with to democratize access to theoretical sciences
              </p>
            </div>

            <div className="space-y-12 md:space-y-16">
              {partners.map((partner, idx) => (
                <motion.a
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...useInViewMotion(idx * 0.1)}
                  className="group block"
                >
                  {/* Sophisticated card design - mobile optimized */}
                  <div className="relative rounded-2xl md:rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-6 md:p-10 lg:p-12 backdrop-blur-sm transition-all duration-300 hover:border-sage-mist/30 hover:bg-white/[0.05]">
                    <div className="grid gap-6 md:gap-10 lg:grid-cols-[240px_1fr]">
                      {/* Logo - mobile optimized */}
                      <motion.div 
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.2 }}
                        className={`flex items-center justify-center rounded-xl md:rounded-2xl p-6 md:p-10 ${
                          partner.darkBg ? 'bg-charcoal/50' : 'bg-white/[0.03]'
                        } border border-white/5 group-hover:border-white/10 transition`}
                      >
                        <img 
                          src={partner.logo} 
                          alt={partner.shortName} 
                          className="max-h-20 md:max-h-28 w-full object-contain"
                          onError={(e) => {
                            // Fallback if image fails to load
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML += `<div class="text-sage-mist text-lg font-serif">${partner.shortName}</div>`;
                          }}
                        />
                      </motion.div>

                      {/* Content - mobile optimized */}
                      <div className="flex flex-col justify-center space-y-3 md:space-y-4">
                        <div className="flex items-start md:items-center gap-2 md:gap-3 flex-col md:flex-row">
                          <h3 className="text-xl md:text-2xl lg:text-3xl font-serif text-white transition-colors group-hover:text-sage-mist">
                            {partner.name}
                          </h3>
                          <ExternalLink 
                            size={20} 
                            className="text-sage-mist/40 transition-all group-hover:text-sage-mist group-hover:translate-x-1 md:mt-1" 
                          />
                        </div>
                        <p className="text-sm md:text-base text-paper/70 leading-relaxed">
                          {partner.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* How We Collaborate - mobile optimized */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <Container>
          <motion.div {...useInViewMotion()} className="mx-auto max-w-6xl px-4">
            <div className="mb-16 md:mb-20 text-center">
              <h2 className="mb-4 md:mb-6 text-3xl md:text-4xl lg:text-5xl font-serif text-white">
                How We Collaborate
              </h2>
              <p className="text-base md:text-lg text-paper/60 max-w-3xl mx-auto leading-relaxed px-4">
                We're open to any partnership that advances equitable science infrastructure. Here's what we've done and what we're exploring:
              </p>
            </div>

            <div className="grid gap-6 md:gap-8 md:grid-cols-2">
              {collaborationTypes.map((type, idx) => (
                <motion.div
                  key={type.title}
                  {...useInViewMotion(idx * 0.1)}
                  className="group relative rounded-2xl md:rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-6 md:p-10 backdrop-blur-sm transition-all duration-300 hover:border-sage-mist/30 hover:bg-white/[0.05]"
                >
                  {/* Subtle corner accent */}
                  <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-br from-sage-mist/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-2xl" />
                  
                  <div className="relative">
                    <h3 className="mb-3 md:mb-4 text-lg md:text-xl lg:text-2xl font-serif text-sage-mist">
                      {type.title}
                    </h3>
                    <p className="text-sm md:text-base text-paper/70 leading-relaxed">
                      {type.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Bottom CTA - mobile optimized */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <Container>
          <motion.div 
            {...useInViewMotion()}
            className="mx-auto max-w-4xl px-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-gradient-to-br from-oxford-green/10 via-cosmic-blue/5 to-transparent p-8 md:p-12 lg:p-16 backdrop-blur-sm"
            >
              {/* Subtle animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-sage-mist/5 to-transparent opacity-50" />
              
              <div className="relative text-center space-y-6 md:space-y-8">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white leading-tight">
                  Let's Build This Together
                </h3>
                
                <p className="text-base md:text-lg text-paper/70 leading-relaxed max-w-2xl mx-auto">
                  We're formalizing as a German nonprofit in 2025-26 while building infrastructure for science's next chapter. We collaborate with organizations that think big and move fast—whether you're funding equitable science infrastructure, building tools for research, or have ideas we haven't thought of yet.
                </p>
                
                
                <motion.p 
                  className="text-lg md:text-xl lg:text-2xl font-serif text-sage-mist leading-tight"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  This is urgent work. History doesn't wait.
                </motion.p>
                
                <div className="flex flex-col gap-4 md:gap-6 items-center pt-4">
                  <motion.a 
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 md:gap-3 rounded-full bg-sage-mist px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-medium text-obsidian shadow-lg shadow-sage-mist/20 transition-all hover:bg-white hover:shadow-xl hover:shadow-sage-mist/30"
                  >
                    Start a conversation →
                  </motion.a>
                  <p className="text-sm md:text-base text-paper/50">
                    Direct contact: <span className="text-sage-mist font-medium">partners@bmuco.org</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <p className="text-xs text-paper/50 text-center mt-8">
  Logos displayed represent organizations we've collaborated with on 
  specific events and programs. Inclusion does not imply ongoing 
  institutional partnership or endorsement.
</p>

      {/* Elegant bottom accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-sage-mist/30 to-transparent" />
    </main>
  );
}

