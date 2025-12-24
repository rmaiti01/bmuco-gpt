import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, NoiseOverlay, Tag, useInViewMotion } from '../components/Common';
import { X, ExternalLink } from 'lucide-react';
import DATA from '../lib/data';

// Modal Component for Team Member Details
const TeamMemberModal = ({ member, onClose }) => {
  if (!member) return null;
  
  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-obsidian/90 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Team member details"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-charcoal shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute right-4 top-4 z-10 rounded-lg bg-white/10 p-2 text-white backdrop-blur hover:bg-white/20 transition"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="grid gap-6 p-8 md:grid-cols-[200px_1fr]">
          {/* Left: Image */}
          <div className="overflow-hidden rounded-2xl bg-charcoal">
            {member.img ? (
              <img 
                src={member.img} 
                alt={member.name} 
                className="aspect-square w-full object-cover" 
              />
            ) : (
              <div className="aspect-square w-full bg-gradient-to-br from-charcoal to-oxford-green/20" />
            )}
          </div>

          {/* Right: Details */}
          <div>
            <h3 className="text-2xl font-serif text-white">{member.name}</h3>
            <p className="mt-1 text-sm font-medium text-sage-mist">{member.role}</p>
            
            <div className="mt-4 space-y-4">
              {/* Full Bio */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-sage-mist">About</h4>
                <p className="mt-2 text-sm text-paper/80 leading-relaxed">{member.bio}</p>
              </div>

              {/* Extended Bio */}
              {member.extendedBio && (
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-sage-mist">Background</h4>
                  <p className="mt-2 text-sm text-paper/80 leading-relaxed">{member.extendedBio}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <main className="bg-obsidian min-h-screen text-paper selection:bg-oxford-green selection:text-white">
      {/* Background element */}
      <NoiseOverlay />

      <section id="team" className="relative scroll-mt-24 py-24">
        <Container>
          {/* Hero Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <Tag>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-mist/90">
                Our People
              </p>
            </Tag>
            <h1 className="mt-6 text-4xl font-serif text-white leading-tight md:text-5xl lg:text-6xl">
              Core team & advisors
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-paper/80 leading-relaxed md:text-lg">
              {DATA.team.aboutInclusion}
            </p>
          </motion.div>
          
          {/* Core Team Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {DATA.team.core.map((m, idx) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.6 }}
                className="group cursor-pointer rounded-2xl border border-white/10 bg-charcoal/50 p-6 backdrop-blur-sm hover:border-sage-mist/50 transition-all duration-300"
                onClick={() => openModal(m)}
              >
                {/* Image */}
                <div className="mb-4 overflow-hidden rounded-2xl bg-charcoal">
                  {m.img ? (
                    <img 
                      src={m.img} 
                      alt={m.name} 
                      className="aspect-square w-full object-cover grayscale opacity-70 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105" 
                    />
                  ) : (
                    <div className="aspect-square w-full bg-gradient-to-br from-charcoal to-oxford-green/20" />
                  )}
                </div>
                <h4 className="text-lg font-serif text-white">{m.name}</h4>
                <p className="text-sm font-medium text-sage-mist mt-1">{m.role}</p>
                
                {/* Short bio - compact format */}
                <p className="mt-3 text-xs text-paper/60 leading-relaxed">{m.shortBio}</p>
                
                {/* Click indicator */}
                <p className="mt-4 text-xs font-medium text-sage-mist/50 group-hover:text-sage-mist transition">
                  Click to learn more →
                </p>
              </motion.div>
            ))}
          </div>

          {/* ENHANCED ADVISORS SECTION */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24 rounded-2xl border border-white/10 bg-gradient-to-br from-charcoal/80 to-oxford-green/5 p-10 shadow-2xl backdrop-blur-sm"
          >
            <div className="mb-8 text-center">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-sage-mist">World-class guidance</p>
              <h2 className="text-3xl font-serif text-white md:text-4xl">Scientific Advisors</h2>
              <p className="mt-3 text-sm text-paper/70">World renowned experts guiding BMUCO's vision</p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              {DATA.team.advisors.map((advisor, idx) => (
                <motion.a
                  key={advisor.name}
                  href={advisor.wikipedia}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-charcoal/50 p-6 transition-all duration-300 hover:border-sage-mist/50 hover:bg-charcoal/70 hover:shadow-lg"
                >
                  {/* Decorative gradient */}
                  <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/3 rounded-full bg-gradient-to-br from-oxford-green/20 to-sage-mist/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-50" />
                  
                  <div className="relative flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-serif text-white group-hover:text-sage-mist transition-colors duration-300">
                        {advisor.name}
                      </h4>
                      <p className="mt-1 text-sm font-medium text-sage-mist/70">{advisor.note}</p>
                    </div>
                    <ExternalLink 
                      size={20} 
                      className="text-sage-mist/40 group-hover:text-sage-mist transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
                    />
                  </div>
                  
                  <p className="mt-3 text-xs text-paper/50 group-hover:text-paper/70 transition-colors duration-300">
                    View Wikipedia profile →
                  </p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </Container>

        {/* Modal */}
        <TeamMemberModal member={selectedMember} onClose={closeModal} />
      </section>
    </main>
  );
}
