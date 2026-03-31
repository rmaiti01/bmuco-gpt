import { useState } from 'react';
import { NextSeo } from 'next-seo';

const S = {
  page: { background: '#fff', color: '#0d1216', fontFamily: 'Manrope, sans-serif' },
  container: { maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' },
  label: { fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#4b5563', marginBottom: '10px' },
  h1: { fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.15, color: '#0d1216', marginBottom: '1.25rem' },
  h2: { fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', fontWeight: 700, color: '#0d1216', marginBottom: '1rem' },
  body: { fontSize: '15px', lineHeight: 1.75, color: '#4b5563' },
  input: {
    width: '100%', boxSizing: 'border-box', padding: '10px 14px', border: '1px solid #d1d1d1', borderRadius: '8px',
    fontSize: '14px', color: '#0d1216', background: '#fff', outline: 'none', fontFamily: 'Manrope, sans-serif',
    transition: 'border-color 0.15s',
  },
};

const directInquiries = [
  { title: 'Industry Partners', body: 'Deep-tech collaborations and strategic partnerships', subject: 'Industry%20Partnership%20Inquiry' },
  { title: 'Universities & Institutions', body: 'Co-host symposia, workshops, or institutional partnerships', subject: 'University%20Event%20Co-Hosting' },
  { title: 'Students & Researchers', body: 'Mentorship, academic guidance, and career pathways', subject: 'Mentorship%20Inquiry' },
  { title: 'Press & Media', body: 'Media inquiries, interviews, and press releases', subject: 'Press%20Inquiry' },
];

export default function Contact() {
  const [result, setResult] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setResult('Sending...');

    const formData = new FormData(e.target);
    formData.append('access_key', '8bd4d19a-b5b7-4eb4-b3ce-8d5dda27f376');

    try {
      const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
      const data = await response.json();
      if (data.success) {
        setResult("Thank you! We'll be in touch soon.");
        e.target.reset();
      } else {
        setResult('Something went wrong. Please try again or email us directly.');
      }
    } catch {
      setResult('Something went wrong. Please try again or email us directly.');
    }

    setIsSubmitting(false);
  }

  return (
    <>
      <NextSeo title="Contact" description="Get in touch with BMUCO — whether you're a researcher, student, partner, or press." />
      <main style={S.page}>

        {/* Hero */}
        <section style={{ padding: '72px 0 56px', borderBottom: '1px solid #d1d1d1' }}>
          <div style={S.container}>
            <h1 style={S.h1}>Let's talk</h1>
            <p style={{ ...S.body, maxWidth: '580px' }}>
              Whether you're an investor, research partner, institution, or ambitious student — we'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Info + Form */}
        <section style={{ padding: '64px 0', borderBottom: '1px solid #d1d1d1' }}>
          <div style={S.container}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '64px', alignItems: 'start' }}>

              {/* Left: contact info */}
              <div>
                <h2 style={S.h2}>Send us a message</h2>
                <p style={{ ...S.body, marginBottom: '2rem' }}>
                  Whether you are an investor, research partner, institution, or student — we would love to hear from you.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {[
                    { label: 'General Inquiries', value: 'contact@bmuco.org' },
                    { label: 'Partnerships', value: 'contact@bmuco.org' },
                    { label: 'Based in', value: 'Munich & Bonn, Germany' },
                    { label: 'Status', value: 'Formalizing as a German nonprofit, 2025–26' },
                  ].map(item => (
                    <div key={item.label} style={{ borderBottom: '1px solid #f3f4f6', paddingBottom: '16px' }}>
                      <p style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#9ca3af', marginBottom: '4px' }}>{item.label}</p>
                      <p style={{ fontSize: '14px', fontWeight: 500, color: '#0d1216' }}>{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: form */}
              <div>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

                  {[
                    { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name', required: true },
                    { id: 'affiliation', label: 'Affiliation', type: 'text', placeholder: 'University or organization', required: false },
                    { id: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com', required: true },
                    { id: 'subject', label: 'Subject', type: 'text', placeholder: 'How can we help?', required: true },
                  ].map(f => (
                    <div key={f.id}>
                      <label htmlFor={f.id} style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#0d1216', marginBottom: '6px' }}>
                        {f.label}{f.required && <span style={{ color: '#1856FE' }}> *</span>}
                      </label>
                      <input
                        type={f.type}
                        id={f.id}
                        name={f.id}
                        required={f.required}
                        placeholder={f.placeholder}
                        style={S.input}
                        onFocus={e => e.currentTarget.style.borderColor = '#1856FE'}
                        onBlur={e => e.currentTarget.style.borderColor = '#d1d1d1'}
                      />
                    </div>
                  ))}

                  <div>
                    <label htmlFor="message" style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#0d1216', marginBottom: '6px' }}>
                      Message <span style={{ color: '#1856FE' }}>*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell us about yourself or your inquiry..."
                      style={{ ...S.input, resize: 'vertical', lineHeight: 1.6 }}
                      onFocus={e => e.currentTarget.style.borderColor = '#1856FE'}
                      onBlur={e => e.currentTarget.style.borderColor = '#d1d1d1'}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      padding: '11px 24px', background: '#1856FE', color: '#fff', fontSize: '14px', fontWeight: 600,
                      borderRadius: '8px', border: 'none', cursor: 'pointer', transition: 'background 0.15s',
                      opacity: isSubmitting ? 0.6 : 1,
                    }}
                    onMouseEnter={e => { if (!isSubmitting) e.currentTarget.style.background = '#1449e0'; }}
                    onMouseLeave={e => e.currentTarget.style.background = '#1856FE'}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>

                  {result && (
                    <p style={{
                      fontSize: '14px', padding: '10px 14px', borderRadius: '8px', border: '1px solid',
                      borderColor: result.includes('Thank you') ? '#1856FE' : result.includes('Sending') ? '#d1d1d1' : '#f87171',
                      color: result.includes('Thank you') ? '#1856FE' : result.includes('Sending') ? '#4b5563' : '#dc2626',
                      background: result.includes('Thank you') ? '#eff4ff' : '#f8f9fa',
                    }}>
                      {result}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Direct Inquiries */}
        <section style={{ padding: '64px 0' }}>
          <div style={S.container}>
            <h2 style={S.h2}>Direct Inquiries</h2>
            <p style={{ ...S.body, marginBottom: '2rem' }}>Reach us directly</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
              {directInquiries.map(item => (
                <div key={item.title} style={{ border: '1px solid #d1d1d1', borderRadius: '10px', padding: '24px' }}>
                  <p style={{ fontSize: '15px', fontWeight: 700, color: '#0d1216', marginBottom: '6px' }}>{item.title}</p>
                  <p style={{ fontSize: '13px', color: '#4b5563', marginBottom: '12px', lineHeight: 1.6 }}>{item.body}</p>
                  <a
                    href={`mailto:contact@bmuco.org?subject=${item.subject}`}
                    style={{ fontSize: '13px', fontWeight: 600, color: '#1856FE', textDecoration: 'none' }}
                  >
                    contact@bmuco.org →
                  </a>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '14px', color: '#9ca3af', marginTop: '24px' }}>
              For general inquiries:{' '}
              <a href="mailto:contact@bmuco.org" style={{ color: '#1856FE', textDecoration: 'none', fontWeight: 600 }}>
                contact@bmuco.org
              </a>
            </p>
          </div>
        </section>

      </main>
    </>
  );
}
