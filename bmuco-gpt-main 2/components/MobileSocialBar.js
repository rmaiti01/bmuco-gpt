import { motion } from 'framer-motion';
import { Twitter, Linkedin, Youtube, Instagram, Facebook } from 'lucide-react';

export const MobileSocialBar = () => {
  const socials = [
    { icon: Twitter, href: 'https://twitter.com/bmuco_org' },
    { icon: Linkedin, href: 'https://linkedin.com/company/bmuco' },
    { icon: Youtube, href: 'https://youtube.com/@bmuco' },
    { icon: Instagram, href: 'https://instagram.com/bmuco' },
    { icon: Facebook, href: 'https://facebook.com/bmuco' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden border-t border-sage-mist/20 bg-obsidian/95 backdrop-blur-xl px-4 py-3"
    >
      <div className="flex items-center justify-between max-w-sm mx-auto gap-2">
        {socials.map((social, idx) => (
          <motion.a
            key={idx}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.9 }}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-sage-mist/20 bg-charcoal/60 transition-all active:bg-sage-mist/10 active:border-sage-mist/60"
          >
            <social.icon size={18} className="text-sage-mist/70" />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};
