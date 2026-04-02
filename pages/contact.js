import { useState } from 'react';
import { NextSeo } from 'next-seo';

function Diamond({ size = 40, top, left, right, bottom, green }) {
  return (
    <div
      className={green ? 'geo-diamond geo-float' : 'geo-diamond-outline geo-float-slow'}
      style={{ width: size, height: size, top, left, right, bottom }}
    />
  );
}

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
      <NextSeo title="Contact" description="Get in touch with BMUCO." />
      <main>

        {/* ══ HERO ══ */}
        <section className="bg-grid" style={{ position: 'relative', overflow: 'hidden', padding: '80px 0 96px' }}>
          <Diamond size={40} top="20%" right="10%" />

          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
            <h1 className="text-display-xl" style={{ marginBottom: '1.5rem' }}>Let's Talk</h1>
            <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#555', maxWidth: '520px' }}>
              Whether you're an investor, research partner, institution, or ambitious student
              — we'd love to hear from you.
            </p>
          </div>
        </section>

        {/* ══ FORM + INFO ══ */}
        <section style={{ borderTop: '1px solid #e0e0dc', padding: '96px 0' }}>
          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 items-start">

              {/* Left: contact info */}
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0a0a0a', marginBottom: '1rem' }}>
                  Send us a message
                </h2>
                <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#555', marginBottom: '2.5rem' }}>
                  Whether you are an investor, research partner, institution, or student
                  — we would love to hear from you.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {[
                    { label: 'General Inquiries', value: 'contact@bmuco.org' },
                    { label: 'Partnerships', value: 'contact@bmuco.org' },
                    { label: 'Based in', value: 'Munich & Bonn, Germany' },
                    { label: 'Status', value: 'Formalizing as a German nonprofit, 2025–26' },
                  ].map(item => (
                    <div key={item.label} style={{ borderBottom: '1px solid #eeeeec', paddingBottom: '16px' }}>
                      <p style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: '#999',
                        marginBottom: '4px',
                      }}>
                        {item.label}
                      </p>
                      <p style={{ fontSize: '15px', fontWeight: 500, color: '#0a0a0a' }}>{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: form */}
              <div>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

                  {[
                    { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name', required: true },
                    { id: 'affiliation', label: 'Affiliation', type: 'text', placeholder: 'University or organization', required: false },
                    { id: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com', required: true },
                    { id: 'subject', label: 'Subject', type: 'text', placeholder: 'How can we help?', required: true },
                  ].map(f => (
                    <div key={f.id}>
                      <label
                        htmlFor={f.id}
                        style={{
                          display: 'block',
                          fontSize: '11px',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          color: '#0a0a0a',
                          marginBottom: '8px',
                        }}
                      >
                        {f.label}{f.required && <span style={{ color: '#5CB85C' }}> *</span>}
                      </label>
                      <input
                        type={f.type}
                        id={f.id}
                        name={f.id}
                        required={f.required}
                        placeholder={f.placeholder}
                        className="input-field"
                      />
                    </div>
                  ))}

                  <div>
                    <label
                      htmlFor="message"
                      style={{
                        display: 'block',
                        fontSize: '11px',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: '#0a0a0a',
                        marginBottom: '8px',
                      }}
                    >
                      Message <span style={{ color: '#5CB85C' }}>*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell us about yourself or your inquiry..."
                      className="input-field"
                      style={{ resize: 'vertical', lineHeight: 1.6 }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-outline"
                    style={{
                      alignSelf: 'flex-start',
                      opacity: isSubmitting ? 0.5 : 1,
                      width: '100%',
                    }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>

                  {result && (
                    <p style={{
                      fontSize: '14px',
                      padding: '12px 16px',
                      border: '1px solid',
                      borderColor: result.includes('Thank you') ? '#5CB85C' : result.includes('Sending') ? '#e0e0dc' : '#f87171',
                      color: result.includes('Thank you') ? '#5CB85C' : result.includes('Sending') ? '#555' : '#dc2626',
                      background: result.includes('Thank you') ? '#e8f5e9' : '#fafaf8',
                    }}>
                      {result}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* ══ DIRECT INQUIRIES ══ */}
        <section style={{ borderTop: '1px solid #e0e0dc', padding: '96px 0' }}>
          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0a0a0a', marginBottom: '1rem' }}>
              Direct Inquiries
            </h2>
            <p style={{ fontSize: '15px', color: '#555', marginBottom: '2.5rem' }}>Reach us directly</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {directInquiries.map(item => (
                <div key={item.title} style={{ borderTop: '2px solid #0a0a0a', paddingTop: '20px' }}>
                  <p style={{ fontSize: '16px', fontWeight: 700, color: '#0a0a0a', marginBottom: '8px' }}>
                    {item.title}
                  </p>
                  <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.7, marginBottom: '16px' }}>
                    {item.body}
                  </p>
                  <a
                    href={`mailto:contact@bmuco.org?subject=${item.subject}`}
                    className="hover-underline"
                    style={{ fontSize: '13px', fontWeight: 600, color: '#5CB85C', textDecoration: 'none' }}
                  >
                    contact@bmuco.org &rarr;
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
