import { motion, useReducedMotion } from "framer-motion";

export const Container = ({ className = "", children }) => (
  <div className={`mx-auto w-full max-w-7xl px-6 ${className}`}>{children}</div>
);

export const Tag = ({ children }) => (
  <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-charcoal/80 px-3 py-1 text-xs font-medium text-sage-mist backdrop-blur">
    {children}
  </span>
);

export const SectionTitle = ({ kicker, title, subtitle, align = "center" }) => (
  <div className={`mb-12 text-${align}`}>
    {kicker && (
      <div className={`mb-4 ${align === "center" ? "flex items-center justify-center" : ""}`}>
        <p className="text-xs uppercase tracking-widest text-sage-mist">{kicker}</p>
      </div>
    )}
    <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
      {title}
    </h2>
    {subtitle && (
      <p className="mx-auto mt-3 max-w-2xl text-base text-paper/70">{subtitle}</p>
    )}
  </div>
);

export const useInViewMotion = (delay = 0) => {
  const prefersReduced = useReducedMotion();
  return {
    initial: { opacity: 0, y: prefersReduced ? 0 : 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: prefersReduced ? 0 : 0.6, ease: "easeOut", delay },
  };
};

export const GradientBackdrop = () => (
  <div
    aria-hidden
    className="pointer-events-none absolute inset-0 -z-10"
    style={{
      background:
        "radial-gradient(60rem 60rem at 80% 20%, rgba(27,77,62,0.15), transparent 60%), radial-gradient(40rem 40rem at 20% 80%, rgba(143,168,159,0.1), transparent 60%)",
      maskImage: "linear-gradient(to bottom, rgba(0,0,0,.9), rgba(0,0,0,.2))",
    }}
  />
);

export const NoiseOverlay = () => (
  <div
    aria-hidden
    className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] mix-blend-overlay"
    style={{
      backgroundImage:
        "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 opacity=%220.5%22 width=%22400%22 height=%22400%22><filter id=%22n%22><feTurbulence baseFrequency=%220.9%22 stitchTiles=%22stitch%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 /></svg>')",
      backgroundSize: "300px 300px",
    }}
  />
);
