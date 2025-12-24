import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../components/Common';
import { getAllPosts } from '../../lib/mdx';
import Link from 'next/link';
import { Calendar, Lightbulb, GraduationCap, ArrowRight, Sparkles } from 'lucide-react';

// Content Type colors (Events, Inspire, Learn)
const contentTypeConfig = {
  'Events': { 
    color: '#6FD98A',
    textColor: 'text-[#6FD98A]',
    borderColor: 'border-[#6FD98A]/30',
    hoverBorder: 'hover:border-[#6FD98A]/60',
    bgHover: 'hover:bg-[#6FD98A]/10',
    bgColor: 'bg-[#6FD98A]/15',
    shadowColor: 'shadow-[#6FD98A]/25',
    icon: Calendar 
  },
  'Inspire': { 
    color: '#5FB878',
    textColor: 'text-[#5FB878]',
    borderColor: 'border-[#5FB878]/30',
    hoverBorder: 'hover:border-[#5FB878]/60',
    bgHover: 'hover:bg-[#5FB878]/10',
    bgColor: 'bg-[#5FB878]/15',
    shadowColor: 'shadow-[#5FB878]/25',
    icon: Lightbulb 
  },
  'Learn': { 
    color: '#4EA76A',
    textColor: 'text-[#4EA76A]',
    borderColor: 'border-[#4EA76A]/30',
    hoverBorder: 'hover:border-[#4EA76A]/60',
    bgHover: 'hover:bg-[#4EA76A]/10',
    bgColor: 'bg-[#4EA76A]/15',
    shadowColor: 'shadow-[#4EA76A]/25',
    icon: GraduationCap 
  },
};

export default function BlogIndex({ posts }) {
  const [contentTypeFilter, setContentTypeFilter] = useState('All');
  const [departmentFilter, setDepartmentFilter] = useState('All');
  const [hoveredCard, setHoveredCard] = useState(null);

  // Two-level filtering
  const filtered = posts.filter(post => {
    const matchesContentType = contentTypeFilter === 'All' || post.contentType === contentTypeFilter;
    const matchesDepartment = departmentFilter === 'All' || post.department === departmentFilter;
    return matchesContentType && matchesDepartment;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.7, 
        ease: [0.25, 0.1, 0.25, 1],
      } 
    },
  };

  return (
    <main className="bg-obsidian min-h-screen">
      {/* Hero - Gradient transition from main site black to blog background */}
      <section className="relative py-20 bg-gradient-to-b from-obsidian via-[#0F1614] to-[#131A18]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[#6FD98A]/10 border border-[#6FD98A]/20"
            >
              <Sparkles size={15} className="text-[#6FD98A]" />
              <p className="text-xs font-medium uppercase tracking-widest text-[#6FD98A]">
                Stories & Insights
              </p>
            </motion.div>
            
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-5 text-6xl md:text-7xl font-serif text-[#E3E7EA] leading-tight tracking-tight"
            >
              <span className="text-[#6FD98A]">B</span>MUCO<span className="text-[#6FD98A]">log</span>
            </motion.h1>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mx-auto max-w-2xl text-lg text-[#8B949E] leading-relaxed"
            >
              Event recaps, tips on how to embrace science, and deep dives into theoretical science.
            </motion.p>

            {/* Decorative divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="mt-8 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-[#6FD98A]/30 to-transparent"
            />
          </motion.div>
        </Container>
      </section>

      {/* Two-level filter tabs */}
      <section className="sticky top-16 z-40 bg-[#131A18]/95 backdrop-blur-xl border-b border-[#6FD98A]/10 shadow-lg shadow-black/20">
        <Container>
          {/* First level: Content Type */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3 pt-5 pb-3"
          >
            {['All', 'Events', 'Inspire', 'Learn'].map((cat, idx) => {
              const config = contentTypeConfig[cat];
              const Icon = config?.icon;
              const isActive = contentTypeFilter === cat;
              
              return (
                <motion.button
                  key={cat}
                  onClick={() => setContentTypeFilter(cat)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + idx * 0.08 }}
                  whileHover={{ scale: 1.04, y: -1 }}
                  whileTap={{ scale: 0.96 }}
                  className={`relative overflow-hidden rounded-lg px-5 py-2.5 text-sm font-semibold transition-all ${
                    isActive
                      ? 'text-[#0A0E14] shadow-lg'
                      : 'border border-[#6FD98A]/20 text-[#8B949E] hover:border-[#6FD98A]/40 hover:bg-[#6FD98A]/5 hover:text-[#D8DEE3]'
                  }`}
                  style={isActive ? {
                    backgroundColor: config?.color || '#6FD98A',
                    boxShadow: `0 4px 14px ${config?.color || '#6FD98A'}33`
                  } : {}}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeContentType"
                      className="absolute inset-0"
                      style={{ backgroundColor: config?.color || '#6FD98A' }}
                      transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {Icon && <Icon size={14} />}
                    {cat}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Second level: Department */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-2 pb-5"
          >
            <span className="text-xs text-[#8B949E] mr-2">Department:</span>
            {['All', 'Theoretical Sciences', 'Climate Science', 'Deep Tech'].map((dept, idx) => (
              <motion.button
                key={dept}
                onClick={() => setDepartmentFilter(dept)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + idx * 0.06 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
                  departmentFilter === dept
                    ? 'bg-white/10 text-[#E3E7EA] border border-white/20'
                    : 'border border-white/5 text-[#76808A] hover:border-white/15 hover:bg-white/5 hover:text-[#8B949E]'
                }`}
              >
                {dept}
              </motion.button>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Blog content canvas - distinct #131A18 reading area */}
      <section className="bg-[#131A18] py-16">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.length === 0 ? (
              <div className="col-span-full text-center py-16">
                <p className="text-[#8B949E] text-lg">No articles found for this filter combination.</p>
              </div>
            ) : (
              filtered.map((post, idx) => {
                const config = contentTypeConfig[post.contentType] || contentTypeConfig['Events'];
                const Icon = config.icon;

                return (
                  <motion.div
                    key={post.slug}
                    variants={cardVariants}
                    onHoverStart={() => setHoveredCard(idx)}
                    onHoverEnd={() => setHoveredCard(null)}
                    whileHover={{ y: -6, scale: 1.01 }}
                    className="group"
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <a className="block h-full">
                        <div 
                          className={`h-full rounded-xl border-2 bg-[#0F1614]/60 backdrop-blur-sm p-6 transition-all duration-300 group-hover:shadow-2xl`}
                          style={{
                            borderColor: hoveredCard === idx ? `${config.color}99` : `${config.color}33`,
                            boxShadow: hoveredCard === idx ? `0 20px 40px ${config.color}22` : 'none'
                          }}
                        >
                          {/* Category badges - both content type and department */}
                          <div className="mb-4 flex items-center justify-between flex-wrap gap-2">
                            <div className="flex items-center gap-2">
                              <span 
                                className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-md border-2`}
                                style={{
                                  color: config.color,
                                  backgroundColor: `${config.color}22`,
                                  borderColor: `${config.color}66`
                                }}
                              >
                                <Icon size={13} />
                                {post.contentType}
                              </span>
                              <span className="text-xs text-[#76808A] border border-white/10 px-2 py-1 rounded-md bg-white/5">
                                {post.department}
                              </span>
                            </div>
                            <span className="text-xs text-[#76808A]">{post.readTime}</span>
                          </div>

                          {/* Title */}
                          <h2 
                            className="mb-3 text-xl font-serif text-[#E3E7EA] leading-snug transition-colors duration-300"
                            style={{
                              color: hoveredCard === idx ? config.color : '#E3E7EA'
                            }}
                          >
                            {post.title}
                          </h2>

                          {/* Excerpt */}
                          <p className="mb-5 text-sm text-[#8B949E] leading-relaxed line-clamp-2">
                            {post.excerpt}
                          </p>

                          {/* Meta row */}
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-[#76808A]">{post.date}</span>
                            <motion.span
                              animate={hoveredCard === idx ? { x: 3 } : { x: 0 }}
                              className="flex items-center gap-1 font-medium"
                              style={{ color: config.color }}
                            >
                              Read <ArrowRight size={13} />
                            </motion.span>
                          </div>

                          {/* Ornament */}
                          <div 
                            className="mt-5 pt-4 text-center text-base"
                            style={{ 
                              borderTop: `1px solid ${config.color}33`,
                              color: `${config.color}66`
                            }}
                          >
                            ∴
                          </div>
                        </div>
                      </a>
                    </Link>
                  </motion.div>
                );
              })
            )}
          </motion.div>
        </Container>
      </section>
    </main>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}
