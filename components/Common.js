export const Container = ({ className = "", children }) => (
  <div className={`mx-auto w-full max-w-7xl px-6 lg:px-8 ${className}`}>{children}</div>
);

export const SectionLabel = ({ children }) => (
  <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#4b5563', marginBottom: '8px' }}>
    {children}
  </p>
);

export const Divider = () => (
  <hr style={{ border: 'none', borderTop: '1px solid #d1d1d1', margin: 0 }} />
);
