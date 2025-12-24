import { motion } from 'framer-motion';
import { useState } from 'react';

// Ornate section divider
export const Divider = () => (
  <div className="my-12 flex items-center justify-center gap-4">
    <span className="text-[#6FD98A]/40 text-xl">∴</span>
    <div className="h-px w-20 bg-[#6FD98A]/20" />
    <span className="text-[#6FD98A]/40 text-xl">∵</span>
  </div>
);

// Pull quote with frame
export const PullQuote = ({ children }) => (
  <motion.blockquote
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="my-10 border-l-4 border-[#6FD98A] bg-[#0F1614]/60 pl-6 pr-5 py-5 italic text-lg text-[#D8DEE3] leading-relaxed rounded-r-lg"
  >
    {children}
  </motion.blockquote>
);

// Event image gallery - FIXED
export const EventGallery = ({ images = [] }) => {
  const [selected, setSelected] = useState(null);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <>
      <div className="my-10 grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer"
            onClick={() => setSelected(img)}
          >
            <img
              src={img}
              alt={`Event ${idx + 1}`}
              className="rounded-lg border border-[#6FD98A]/20 hover:border-[#6FD98A]/50 transition-all duration-300 w-full h-48 object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-obsidian/95 p-4 backdrop-blur-sm cursor-pointer"
          onClick={() => setSelected(null)}
        >
          <img src={selected} alt="Enlarged" className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl" />
        </div>
      )}
    </>
  );
};

// Network graph (simplified nodes)
export const NetworkGraph = ({ title, nodes = [] }) => {
  if (!nodes || nodes.length === 0) {
    return null;
  }

  return (
    <div className="my-12 rounded-xl border border-[#6FD98A]/20 bg-[#0F1614]/60 p-7 backdrop-blur-sm">
      <h3 className="mb-6 text-2xl font-serif text-[#E3E7EA]">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {nodes.map((node, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.4 }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="rounded-lg border border-[#6FD98A]/30 bg-[#131A18]/80 px-4 py-2.5 text-sm hover:border-[#6FD98A]/50 hover:bg-[#6FD98A]/5 transition-all cursor-default"
          >
            <p className="font-medium text-[#E3E7EA]">{node.name}</p>
            <p className="text-xs text-[#8B949E] mt-0.5">{node.country}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Math block wrapper
export const MathBlock = ({ children }) => (
  <div className="my-10 overflow-x-auto rounded-xl border border-[#6FD98A]/20 bg-[#0F1614]/60 p-6 text-center backdrop-blur-sm">
    <div className="text-[#E3E7EA]">
      {children}
    </div>
  </div>
);
