import { motion } from 'framer-motion';

export const CosmicBackdrop = () => (
  <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
    <div className="absolute inset-0 bg-cosmic" />
    <div className="absolute inset-0 bg-nebula" />

    <motion.div
      className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full"
      style={{ background: 'radial-gradient(circle, hsl(160 48% 20% / 0.1) 0%, transparent 65%)' }}
      animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.35, 0.2] }}
      transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
    />

    <motion.div
      className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full"
      style={{ background: 'radial-gradient(circle, hsl(220 40% 15% / 0.12) 0%, transparent 55%)' }}
      animate={{ scale: [1.08, 1, 1.08], opacity: [0.15, 0.3, 0.15] }}
      transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
    />

    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] rounded-full"
      style={{ background: 'radial-gradient(ellipse, hsl(150 30% 28% / 0.06) 0%, transparent 55%)' }}
      animate={{ opacity: [0.2, 0.35, 0.2] }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
    />

    <div className="absolute inset-0 noise-overlay" />
  </div>
);
