import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { getAllPosts, getPostBySlug } from '../../lib/mdx';
import { EventGallery, NetworkGraph, PullQuote, Divider, MathBlock } from '../../components/BlogComponents';
import Link from 'next/link';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import 'katex/dist/katex.min.css';

const components = { EventGallery, NetworkGraph, PullQuote, Divider, MathBlock };

export default function BlogPost({ frontMatter, mdxSource }) {
  return (
    <>
      <NextSeo title={frontMatter.title} description={frontMatter.excerpt || ''} />
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <main style={{ background: '#fff', color: '#0d1216', fontFamily: 'Manrope, sans-serif' }}>

        {/* Hero */}
        <section style={{ padding: '64px 0 48px', borderBottom: '1px solid #d1d1d1' }}>
          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
            <Link href="/blog">
              <a style={{ fontSize: '13px', fontWeight: 600, color: '#1856FE', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '28px' }}>
                ← Back to Blog
              </a>
            </Link>

            {/* Badges */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
              {frontMatter.contentType && (
                <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#1856FE', padding: '3px 10px', border: '1px solid #1856FE', borderRadius: '4px' }}>
                  {frontMatter.contentType}
                </span>
              )}
              {frontMatter.readTime && (
                <span style={{ fontSize: '11px', fontWeight: 600, color: '#9ca3af', padding: '3px 10px', border: '1px solid #d1d1d1', borderRadius: '4px' }}>
                  {frontMatter.readTime}
                </span>
              )}
            </div>

            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, lineHeight: 1.15, color: '#0d1216', marginBottom: '16px', maxWidth: '800px' }}>
              {frontMatter.title}
            </h1>

            <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: '#9ca3af' }}>
              {frontMatter.date && <span>{frontMatter.date}</span>}
              {frontMatter.author && <span>By {frontMatter.author}</span>}
            </div>
          </div>
        </section>

        {/* Hero image */}
        {(frontMatter.heroImage || true) && (
          <section style={{ borderBottom: '1px solid #d1d1d1' }}>
            <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
              <img
                src={frontMatter.heroImage || 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80'}
                alt={frontMatter.title}
                style={{ width: '100%', height: '420px', objectFit: 'cover' }}
              />
            </div>
          </section>
        )}

        {/* Article body */}
        <section style={{ padding: '56px 0 80px' }}>
          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
            <article style={{ maxWidth: '720px', margin: '0 auto' }} className="prose">
              <MDXRemote {...mdxSource} components={components} />
            </article>

            {/* Back link */}
            <div style={{ maxWidth: '720px', margin: '48px auto 0', paddingTop: '24px', borderTop: '1px solid #d1d1d1' }}>
              <Link href="/blog">
                <a style={{ fontSize: '14px', fontWeight: 600, color: '#1856FE', textDecoration: 'none' }}>
                  ← Back to all articles
                </a>
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

export async function getStaticPaths() {
  const posts = getAllPosts();
  return {
    paths: posts.map(post => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { frontMatter, content } = getPostBySlug(params.slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    },
  });
  return { props: { frontMatter, mdxSource } };
}
