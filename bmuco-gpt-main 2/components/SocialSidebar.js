import { motion } from 'framer-motion';
import { Twitter, Linkedin, Youtube, Instagram, Facebook } from 'lucide-react';

export const SocialSidebar = () => {
  const socials = [
    { icon: Linkedin, href: 'https://linkedin.com/company/bmuco', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/bmuco_org', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/bmuco.org', label: 'Facebook' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4"
    >
      {/* Decorative line */}
      <div className="h-16 w-px bg-gradient-to-b from-transparent via-sage-mist/30 to-transparent mx-auto" />
      
      {socials.map((social, idx) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 + idx * 0.1 }}
          whileHover={{ scale: 1.15, x: -3 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex h-11 w-11 items-center justify-center rounded-xl border border-sage-mist/20 bg-obsidian/80 backdrop-blur-sm transition-all hover:border-sage-mist/60 hover:bg-sage-mist/10"
        >
          <social.icon size={18} className="text-sage-mist/70 transition-colors group-hover:text-sage-mist" />
          
          {/* Tooltip */}
          <span className="absolute right-14 whitespace-nowrap rounded-lg bg-charcoal border border-sage-mist/30 px-3 py-1.5 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none">
            {social.label}
          </span>
        </motion.a>
      ))}
      
      {/* Bottom decorative line */}
      <div className="h-16 w-px bg-gradient-to-b from-sage-mist/30 via-transparent to-transparent mx-auto" />
    </motion.div>
  );
};
