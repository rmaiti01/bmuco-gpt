import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, useInViewMotion } from '../components/Common';
import { Mail, Users, GraduationCap, Building2, MessageSquare, Send, Sparkles } from 'lucide-react';

export default function Contact() {
  const [result, setResult] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Elegant animation variants matching about.js
  const heroVariants = {
    initial: { opacity: 0, y: -20, filter: 'blur(4px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  };

  const heroTransition = (delay = 0) => ({
    duration: 2.5,
    delay,
    ease: [0.25, 0.1, 0.25, 1],
  });

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setResult('Sending...');

    const formData = new FormData(e.target);
    formData.append('access_key', 'YOUR_ACCESS_KEY_HERE'); // Replace with your Web3Forms key

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult('Thank you! We\'ll review your application and be in touch soon.');
        e.target.reset();
      } else {
        setResult('Something went wrong. Please try again or email us directly.');
      }
    } catch (error) {
      setResult('Something went wrong. Please try again or email us directly.');
    }

    setIsSubmitting(false);
  }

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
              Get in touch
            </motion.p>

            <motion.h1
              variants={heroVariants}
              initial="initial"
              animate="animate"
              transition={heroTransition(0.3)}
              className="mb-6 text-5xl font-serif text-white leading-tight md:text-6xl"
            >
              Join the frontier of equitable science
            </motion.h1>

            <motion.p
              variants={heroVariants}
              initial="initial"
              animate="animate"
              transition={heroTransition(0.6)}
              className="text-lg text-paper/60 leading-relaxed"
            >
              Whether you're a researcher, student, institution, or partner — connect with us to build science that breaks barriers.
            </motion.p>
          </div>

          {/* EMAIL INQUIRIES SECTION */}
          <motion.div
            {...useInViewMotion()}
            className="mx-auto mt-24 max-w-5xl"
          >
            <div className="mb-12 text-center">
              <div className="mx-auto mb-4 h-1 w-16 bg-sage-mist" />
              <h2 className="text-3xl font-serif text-white">Direct inquiries</h2>
              <p className="mt-3 text-base text-paper/60">
                For immediate response, reach us directly via email
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* Industry Partnerships */}
              <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-charcoal/40 p-6 transition-all duration-500 hover:border-sage-mist/40 hover:bg-charcoal/60 hover:-translate-y-1">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-oxford-green/20 to-sage-mist/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
                <div className="relative">
                  <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-oxford-green/20 p-3">
                    <Building2 size={20} className="text-sage-mist" />
                  </div>
                  <h3 className="mb-2 text-base font-serif text-white">Industry Partners</h3>
                  <p className="mb-4 text-xs text-paper/60 leading-relaxed">
                    Deep-tech collaborations, research funding, and strategic partnerships
                  </p>
                  <a 
                    href="mailto:bmuco.org@gmail.com?subject=Industry%20Partnership%20Inquiry"
                    className="text-xs font-medium text-sage-mist hover:text-white transition-colors"
                  >
                    bmuco.org@gmail.com →
                  </a>
                </div>
              </div>

              {/* University Events */}
              <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-charcoal/40 p-6 transition-all duration-500 hover:border-sage-mist/40 hover:bg-charcoal/60 hover:-translate-y-1">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-cosmic-blue/20 to-sage-mist/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
                <div className="relative">
                  <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-cosmic-blue/20 p-3">
                    <Users size={20} className="text-sage-mist" />
                  </div>
                  <h3 className="mb-2 text-base font-serif text-white">Universities & Institutions</h3>
                  <p className="mb-4 text-xs text-paper/60 leading-relaxed">
                    Co-host symposia, workshops, or establish institutional partnerships
                  </p>
                  <a 
                    href="mailto:bmuco.org@gmail.com?subject=University%20Event%20Co-Hosting"
                    className="text-xs font-medium text-sage-mist hover:text-white transition-colors"
                  >
                    bmuco.org@gmail.com →
                  </a>
                </div>
              </div>

              {/* Student Mentorship */}
              <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-charcoal/40 p-6 transition-all duration-500 hover:border-sage-mist/40 hover:bg-charcoal/60 hover:-translate-y-1">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-oxford-green/15 via-cosmic-blue/10 to-sage-mist/15 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
                <div className="relative">
                  <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-oxford-green/15 p-3">
                    <GraduationCap size={20} className="text-sage-mist" />
                  </div>
                  <h3 className="mb-2 text-base font-serif text-white">Students & Researchers</h3>
                  <p className="mb-4 text-xs text-paper/60 leading-relaxed">
                    Research mentorship, academic guidance, and career pathways
                  </p>
                  <a 
                    href="mailto:bmuco.org@gmail.com?subject=Mentorship%20Inquiry"
                    className="text-xs font-medium text-sage-mist hover:text-white transition-colors"
                  >
                    bmuco.org@gmail.com →
                  </a>
                </div>
              </div>

              {/* Press & Media */}
              <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-charcoal/40 p-6 transition-all duration-500 hover:border-sage-mist/40 hover:bg-charcoal/60 hover:-translate-y-1">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-sage-mist/20 to-cosmic-blue/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
                <div className="relative">
                  <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-sage-mist/20 p-3">
                    <MessageSquare size={20} className="text-sage-mist" />
                  </div>
                  <h3 className="mb-2 text-base font-serif text-white">Press & Media</h3>
                  <p className="mb-4 text-xs text-paper/60 leading-relaxed">
                    Media inquiries, interviews, and press releases
                  </p>
                  <a 
                    href="mailto:bmuco.org@gmail.com?subject=Press%20Inquiry"
                    className="text-xs font-medium text-sage-mist hover:text-white transition-colors"
                  >
                    bmuco.org@gmail.com →
                  </a>
                </div>
              </div>
            </div>

            {/* General email fallback */}
            <div className="mt-8 text-center">
              <p className="text-sm text-paper/50">
                For general inquiries:{' '}
                <a 
                  href="mailto:bmuco.org@gmail.com" 
                  className="text-sage-mist hover:text-white transition-colors font-medium"
                >
                  bmuco.org@gmail.com
                </a>
              </p>
            </div>
          </motion.div>

          {/* APPLICATION FORM SECTION */}
          <motion.div
            {...useInViewMotion()}
            className="mx-auto mt-32 max-w-3xl border-t border-white/10 pt-24"
          >
            <div className="mb-12 text-center">
              <div className="mx-auto mb-4 h-1 w-16 bg-sage-mist" />
              <h2 className="text-3xl font-serif text-white mb-3">Community application</h2>
              <p className="text-base text-paper/60 leading-relaxed max-w-2xl mx-auto">
                Apply to join our network of students, researchers, and changemakers working at the intersection of theoretical science, climate action, and deep tech.
              </p>
            </div>

            <div className="relative">
              {/* Decorative glow */}
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-oxford-green/20 via-cosmic-blue/15 to-sage-mist/20 blur-3xl opacity-30" />
              
              <form onSubmit={handleSubmit} className="relative rounded-2xl border border-white/10 bg-charcoal/60 p-10">
                {/* Honeypot */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                <div className="space-y-7">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-paper/90 mb-2">
                      Full Name <span className="text-sage-mist">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-obsidian/80 border border-white/10 text-paper placeholder-paper/40 focus:outline-none focus:border-sage-mist/60 focus:ring-1 focus:ring-sage-mist/60 transition-all"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-paper/90 mb-2">
                      Email Address <span className="text-sage-mist">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-obsidian/80 border border-white/10 text-paper placeholder-paper/40 focus:outline-none focus:border-sage-mist/60 focus:ring-1 focus:ring-sage-mist/60 transition-all"
                      placeholder="you@institution.edu"
                    />
                  </div>

                  {/* Affiliation */}
                  <div>
                    <label htmlFor="affiliation" className="block text-sm font-medium text-paper/90 mb-2">
                      Current Affiliation
                    </label>
                    <input
                      type="text"
                      id="affiliation"
                      name="affiliation"
                      className="w-full px-4 py-3 rounded-lg bg-obsidian/80 border border-white/10 text-paper placeholder-paper/40 focus:outline-none focus:border-sage-mist/60 focus:ring-1 focus:ring-sage-mist/60 transition-all"
                      placeholder="University, institute, or organization"
                    />
                  </div>

                  {/* Role / Career Stage */}
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-paper/90 mb-2">
                      Career Stage <span className="text-sage-mist">*</span>
                    </label>
                    <select
                      id="role"
                      name="role"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-obsidian/80 border border-white/10 text-paper focus:outline-none focus:border-sage-mist/60 focus:ring-1 focus:ring-sage-mist/60 transition-all"
                    >
                      <option value="">Select your career stage</option>
                      <option value="high-school">High School Student</option>
                      <option value="undergraduate">Undergraduate Student</option>
                      <option value="masters">Master's Student</option>
                      <option value="phd">PhD Candidate</option>
                      <option value="postdoc">Postdoctoral Researcher</option>
                      <option value="faculty">Faculty/Professor</option>
                      <option value="industry">Industry Professional</option>
                      <option value="independent">Independent Researcher</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Primary Interest Pillar */}
                  <div>
                    <label htmlFor="pillar" className="block text-sm font-medium text-paper/90 mb-2">
                      Primary Area of Interest <span className="text-sage-mist">*</span>
                    </label>
                    <select
                      id="pillar"
                      name="pillar"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-obsidian/80 border border-white/10 text-paper focus:outline-none focus:border-sage-mist/60 focus:ring-1 focus:ring-sage-mist/60 transition-all"
                    >
                      <option value="">Select primary pillar</option>
                      <option value="theoretical-sciences">Theoretical Sciences & Education</option>
                      <option value="climate">Climate Science & Policy</option>
                      <option value="deep-tech">Equitable Deep Tech (AI/Formal Methods)</option>
                      <option value="multiple">Multiple Pillars</option>
                    </select>
                  </div>

                  {/* Specific Research/Interest Area */}
                  <div>
                    <label htmlFor="research-area" className="block text-sm font-medium text-paper/90 mb-2">
                      Specific Research or Interest Area
                    </label>
                    <input
                      type="text"
                      id="research-area"
                      name="research-area"
                      className="w-full px-4 py-3 rounded-lg bg-obsidian/80 border border-white/10 text-paper placeholder-paper/40 focus:outline-none focus:border-sage-mist/60 focus:ring-1 focus:ring-sage-mist/60 transition-all"
                      placeholder="e.g., number theory, climate modeling, proof assistants"
                    />
                  </div>

                  {/* How They Want to Engage */}
                  <div>
                    <label htmlFor="engagement" className="block text-sm font-medium text-paper/90 mb-2">
                      How would you like to engage with BMUCO? <span className="text-sage-mist">*</span>
                    </label>
                    <select
                      id="engagement"
                      name="engagement"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-obsidian/80 border border-white/10 text-paper focus:outline-none focus:border-sage-mist/60 focus:ring-1 focus:ring-sage-mist/60 transition-all"
                    >
                      <option value="">Select engagement type</option>
                      <option value="mentorship-seeker">Seeking research mentorship</option>
                      <option value="mentorship-provider">Offering mentorship to students</option>
                      <option value="research-collaboration">Research collaboration</option>
                      <option value="event-participation">Attend/present at events</option>
                      <option value="volunteer">Volunteer/contribute</option>
                      <option value="student-community">Join student community</option>
                      <option value="policy-work">Climate policy engagement</option>
                      <option value="deep-tech-project">Deep tech project collaboration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-paper/90 mb-2">
                      Tell us about yourself <span className="text-sage-mist">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-obsidian/80 border border-white/10 text-paper placeholder-paper/40 focus:outline-none focus:border-sage-mist/60 focus:ring-1 focus:ring-sage-mist/60 transition-all resize-none"
                      placeholder="Share your background, interests, research experience, or how you envision contributing to BMUCO's mission..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full rounded-lg bg-oxford-green px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-sage-mist hover:text-obsidian disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-sage-mist/0 via-sage-mist/20 to-sage-mist/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    {isSubmitting ? (
                      <>
                        <Sparkles size={18} className="animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Submit Application
                      </>
                    )}
                  </button>

                  {/* Result Message */}
                  {result && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className={`text-center text-sm p-4 rounded-lg border ${
                        result.includes('Thank you') 
                          ? 'bg-oxford-green/20 border-sage-mist/30 text-sage-mist' 
                          : result.includes('Sending')
                          ? 'bg-charcoal/50 border-white/10 text-paper/70'
                          : 'bg-red-900/20 border-red-500/30 text-red-400'
                      }`}
                    >
                      {result}
                    </motion.div>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
