import { useState } from 'react';
import { NextSeo } from 'next-seo';
import DATA from '../lib/data';

function Diamond({ size = 40, top, left, right, bottom, green }) {
  return (
    <div
      className={green ? 'geo-diamond geo-float' : 'geo-diamond-outline geo-float-slow'}
      style={{ width: size, height: size, top, left, right, bottom }}
    />
  );
}

const VideoModal = ({ url, onClose }) => {
  if (!url) return null;
  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      style={{ background: 'rgba(0,0,0,0.9)' }}
    >
      <div onClick={e => e.stopPropagation()} style={{ position: 'relative', width: '100%', maxWidth: '900px' }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '-40px',
            right: 0,
            background: 'none',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '24px',
            lineHeight: 1,
          }}
        >
          &times;
        </button>
        <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
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
      <main>

        <section className="bg-grid" style={{ position: 'relative', overflow: 'hidden', padding: '80px 0 96px' }}>
          <Diamond size={40} top="15%" right="10%" />

          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
            <p className="section-label">Talk Series</p>
            <h1 className="text-display-xl" style={{ marginBottom: '1.5rem' }}>
              Conversations
            </h1>
            <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#555', maxWidth: '560px' }}>
              High-profile conversations with Nobel Laureates, Fields Medalists, and frontier
              researchers. Reaching 10,000+ students since 2017.
            </p>
          </div>
        </section>

        <section style={{ borderTop: '1px solid #e0e0dc', padding: '96px 0' }}>
          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
              {DATA.talks.map(talk => (
                <div
                  key={talk.title}
                  style={{
                    borderTop: '2px solid #0a0a0a',
                    paddingTop: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  <p style={{ fontSize: '16px', fontWeight: 700, color: '#0a0a0a', lineHeight: 1.4 }}>
                    {talk.title}
                  </p>
                  <p style={{ fontSize: '13px', color: '#999' }}>{talk.meta}</p>
                  <div style={{ display: 'flex', gap: '16px', marginTop: 'auto', paddingTop: '8px' }}>
                    {talk.videoUrl && (
                      <button
                        onClick={() => setActiveVideo(talk.videoUrl)}
                        className="hover-underline"
                        style={{
                          fontSize: '13px',
                          fontWeight: 600,
                          color: '#5CB85C',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          padding: 0,
                        }}
                      >
                        Watch &rarr;
                      </button>
                    )}
                    {talk.citationUrl && (
                      <a
                        href={talk.citationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover-underline"
                        style={{ fontSize: '13px', fontWeight: 600, color: '#555', textDecoration: 'none' }}
                      >
                        Learn more &rarr;
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
