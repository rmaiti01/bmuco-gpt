import { useState } from 'react';
import { getAllPosts } from '../../lib/mdx';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

const S = {
  page: { background: '#fff', color: '#0d1216', fontFamily: 'Manrope, sans-serif' },
  container: { maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' },
  label: { fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#4b5563', marginBottom: '10px' },
  h1: { fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.15, color: '#0d1216', marginBottom: '1.25rem' },
  body: { fontSize: '15px', lineHeight: 1.75, color: '#4b5563' },
};

export default function BlogIndex({ posts }) {
  const [contentTypeFilter, setContentTypeFilter] = useState('All');
  const [departmentFilter, setDepartmentFilter] = useState('All');

  const filtered = posts.filter(post => {
    const matchesContentType = contentTypeFilter === 'All' || post.contentType === contentTypeFilter;
    const matchesDepartment = departmentFilter === 'All' || post.department === departmentFilter;
    return matchesContentType && matchesDepartment;
  });

  return (
    <>
      <NextSeo title="Blog" description="Stories, insights, and deep dives from the BMUCO community." />
      <main style={S.page}>

        {/* Hero */}
        <section style={{ padding: '72px 0 56px', borderBottom: '1px solid #d1d1d1' }}>
          <div style={S.container}>
            <p style={S.label}>Stories & Insights</p>
            <h1 style={S.h1}>BMUCOlog</h1>
            <p style={{ ...S.body, maxWidth: '560px' }}>
              Event recaps, tips on how to embrace science, and deep dives into theoretical science.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section style={{ borderBottom: '1px solid #d1d1d1', padding: '16px 0', position: 'sticky', top: '60px', zIndex: 40, background: '#fff' }}>
          <div style={{ ...S.container, display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {['All', 'Events', 'Inspire', 'Learn'].map(cat => (
                <button key={cat} onClick={() => setContentTypeFilter(cat)}
                  style={{ padding: '6px 14px', borderRadius: '6px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', border: '1px solid', transition: 'all 0.15s',
                    borderColor: contentTypeFilter === cat ? '#1856FE' : '#d1d1d1',
                    background: contentTypeFilter === cat ? '#eff4ff' : '#fff',
                    color: contentTypeFilter === cat ? '#1856FE' : '#4b5563',
                  }}>
                  {cat}
                </button>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', color: '#9ca3af', fontWeight: 500 }}>Department:</span>
              {['All', 'Theoretical Sciences', 'Climate Science', 'Deep Tech'].map(dept => (
                <button key={dept} onClick={() => setDepartmentFilter(dept)}
                  style={{ padding: '4px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 600, cursor: 'pointer', border: '1px solid', transition: 'all 0.15s',
                    borderColor: departmentFilter === dept ? '#1856FE' : '#d1d1d1',
                    background: departmentFilter === dept ? '#eff4ff' : '#fff',
                    color: departmentFilter === dept ? '#1856FE' : '#4b5563',
                  }}>
                  {dept}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Posts grid */}
        <section style={{ padding: '48px 0' }}>
          <div style={S.container}>
            {filtered.length === 0 ? (
              <p style={{ color: '#9ca3af', fontSize: '16px', textAlign: 'center', padding: '48px 0' }}>
                No articles found for this filter.
              </p>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                {filtered.map(post => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <a style={{ display: 'block', border: '1px solid #d1d1d1', borderRadius: '10px', padding: '24px', textDecoration: 'none', transition: 'border-color 0.15s' }}
                       onMouseEnter={e => e.currentTarget.style.borderColor = '#1856FE'}
                       onMouseLeave={e => e.currentTarget.style.borderColor = '#d1d1d1'}>
                      <div style={{ display: 'flex', gap: '6px', marginBottom: '12px', flexWrap: 'wrap' }}>
                        {post.contentType && (
                          <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#1856FE', padding: '2px 8px', border: '1px solid #1856FE', borderRadius: '4px' }}>
                            {post.contentType}
                          </span>
                        )}
                        {post.department && (
                          <span style={{ fontSize: '11px', fontWeight: 600, color: '#9ca3af', padding: '2px 8px', border: '1px solid #d1d1d1', borderRadius: '4px' }}>
                            {post.department}
                          </span>
                        )}
                      </div>
                      <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#0d1216', lineHeight: 1.4, marginBottom: '8px' }}>{post.title}</h2>
                      {post.excerpt && <p style={{ fontSize: '13px', color: '#4b5563', lineHeight: 1.6, marginBottom: '12px' }}>{post.excerpt}</p>}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '12px', color: '#9ca3af' }}>{post.date}</span>
                        {post.readTime && <span style={{ fontSize: '12px', color: '#9ca3af' }}>{post.readTime}</span>}
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

      </main>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}
