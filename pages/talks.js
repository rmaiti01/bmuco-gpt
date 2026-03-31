import { useState } from 'react';
import { NextSeo } from 'next-seo';
import DATA from '../lib/data';

const S = {
  page: { background: '#fff', color: '#0d1216', fontFamily: 'Manrope, sans-serif' },
  container: { maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' },
  label: { fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#4b5563', marginBottom: '10px' },
  h1: { fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.15, color: '#0d1216', marginBottom: '1.25rem' },
  body: { fontSize: '15px', lineHeight: 1.75, color: '#4b5563' },
};

const VideoModal = ({ url, onClose }) => {
  if (!url) return null;
  return (
    <div
      onClick={onClose}
      style={{ position: 'fixed', inset: 0, zIndex: 50, background: 'rgba(0,0,0,0.85)', display: 'grid', placeItems: 'center', padding: '16px' }}
    >
      <div onClick={e => e.stopPropagation()} style={{ position: 'relative', width: '100%', maxWidth: '900px' }}>
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '-40px', right: 0, background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '24px', lineHeight: 1 }}
        >
          ×
        </button>
        <div style={{ aspectRatio: '16/9', overflow: 'hidden', borderRadius: '10px' }}>
          <iframe
            src={url.replace('watch?v=', 'embed/')}
            title="BMUCO video"
            style={{ width: '100%', height: '100%', border: 'none' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default function Talks() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <>
      <NextSeo title="Talks" description="Talk series featuring Nobel Laureates, Fields Medalists, and frontier researchers." />
      <main style={S.page}>

        {/* Hero */}
        <section style={{ padding: '72px 0 56px', borderBottom: '1px solid #d1d1d1' }}>
          <div style={S.container}>
            <p style={S.label}>Talk Series</p>
            <h1 style={S.h1}>Conversations with world-leading researchers</h1>
            <p style={{ ...S.body, maxWidth: '600px' }}>
              High-profile conversations with Nobel Laureates, Fields Medalists, and frontier researchers. Reaching 10,000+ students since 2017.
            </p>
          </div>
        </section>

        {/* Talks grid */}
        <section style={{ padding: '64px 0' }}>
          <div style={S.container}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
              {DATA.talks.map(talk => (
                <div key={talk.title} style={{ border: '1px solid #d1d1d1', borderRadius: '10px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <p style={{ fontSize: '15px', fontWeight: 700, color: '#0d1216', lineHeight: 1.4 }}>{talk.title}</p>
                  <p style={{ fontSize: '12px', color: '#9ca3af' }}>{talk.meta}</p>
                  <div style={{ display: 'flex', gap: '12px', marginTop: 'auto', paddingTop: '4px' }}>
                    {talk.videoUrl && (
                      <button
                        onClick={() => setActiveVideo(talk.videoUrl)}
                        style={{ fontSize: '13px', fontWeight: 600, color: '#1856FE', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                      >
                        Watch →
                      </button>
                    )}
                    {talk.citationUrl && (
                      <a href={talk.citationUrl} target="_blank" rel="noopener noreferrer"
                         style={{ fontSize: '13px', fontWeight: 600, color: '#4b5563', textDecoration: 'none' }}>
                        Learn more →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <VideoModal url={activeVideo} onClose={() => setActiveVideo(null)} />
      </main>
    </>
  );
}
