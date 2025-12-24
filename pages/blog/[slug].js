import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Container } from '../../components/Common';
import { getAllPosts, getPostBySlug } from '../../lib/mdx';
import { EventGallery, NetworkGraph, PullQuote, Divider, MathBlock } from '../../components/BlogComponents';
import Link from 'next/link';
import Head from 'next/head';
import { ArrowLeft, Clock, User } from 'lucide-react';
import 'katex/dist/katex.min.css';


const components = {
  EventGallery,
  NetworkGraph,
  PullQuote,
  Divider,
  MathBlock,
};


export default function BlogPost({ frontMatter, mdxSource }) {
  const { scrollYProgress } = useScroll();
  const spiralRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const spiralScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.9]);
  const spiralOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.08, 0.12, 0.08, 0.05]);


  return (
    <>
      <Head>
  <link
    href="https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@400;500;600&display=swap"
    rel="stylesheet"
  />
</Head>



      <main className="bg-obsidian min-h-screen">
        {/* Hero - gradient transition */}
        <section className="relative overflow-hidden bg-gradient-to-b from-obsidian via-[#0F1614] to-[#131A18] py-16 border-b border-[#6FD98A]/10">
          {/* Animated Ulam spiral - subtle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: -180 }}
            animate={{ opacity: 0.08, scale: 1, rotate: 0 }}
            style={{ rotate: spiralRotate, scale: spiralScale, opacity: spiralOpacity }}
            transition={{ duration: 2.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
          >
            <svg width="600" height="600" viewBox="0 0 600 600" className="text-[#6FD98A]">
              <circle cx="300" cy="300" r="4" fill="currentColor" opacity="1" />
              <circle cx="318" cy="300" r="4" fill="currentColor" opacity="0.9" />
              <circle cx="318" cy="318" r="4" fill="currentColor" opacity="0.95" />
              <circle cx="300" cy="318" r="4" fill="currentColor" opacity="0.85" />
              <circle cx="282" cy="318" r="4" fill="currentColor" opacity="0.9" />
              <circle cx="282" cy="300" r="4" fill="currentColor" opacity="0.85" />
              <circle cx="282" cy="282" r="4" fill="currentColor" opacity="0.9" />
              <circle cx="300" cy="282" r="4" fill="currentColor" opacity="0.8" />
              <circle cx="318" cy="282" r="4" fill="currentColor" opacity="0.85" />
              <circle cx="336" cy="282" r="4" fill="currentColor" opacity="0.9" />
              <circle cx="336" cy="300" r="4" fill="currentColor" opacity="0.8" />
              <circle cx="336" cy="318" r="4" fill="currentColor" opacity="0.85" />
              <circle cx="336" cy="336" r="4" fill="currentColor" opacity="0.9" />
              <circle cx="318" cy="336" r="4" fill="currentColor" opacity="0.75" />
              <circle cx="300" cy="336" r="4" fill="currentColor" opacity="0.8" />
              <circle cx="282" cy="336" r="4" fill="currentColor" opacity="0.85" />
              <circle cx="264" cy="336" r="4" fill="currentColor" opacity="0.9" />
              <circle cx="264" cy="318" r="4" fill="currentColor" opacity="0.75" />
              <circle cx="264" cy="300" r="4" fill="currentColor" opacity="0.8" />
              <circle cx="264" cy="282" r="4" fill="currentColor" opacity="0.85" />
              <circle cx="264" cy="264" r="4" fill="currentColor" opacity="0.9" />
              <circle cx="282" cy="264" r="4" fill="currentColor" opacity="0.75" />
              <circle cx="300" cy="264" r="4" fill="currentColor" opacity="0.8" />
              <circle cx="318" cy="264" r="4" fill="currentColor" opacity="0.85" />
              <circle cx="336" cy="264" r="4" fill="currentColor" opacity="0.9" />
              <circle cx="354" cy="264" r="4" fill="currentColor" opacity="0.8" />
            </svg>
          </motion.div>


          <Container className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mx-auto max-w-4xl text-center"
            >
              {/* Category badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center gap-3 mb-5 px-4 py-2 rounded-full bg-[#6FD98A]/10 border border-[#6FD98A]/20"
              >
                <span className="text-xs font-medium uppercase tracking-widest text-[#6FD98A]">
                  {frontMatter.contentType}
                </span>
                <span className="w-1 h-1 rounded-full bg-[#6FD98A]/50" />
                <Clock size={13} className="text-[#6FD98A]/70" />
                <span className="text-xs text-[#8B949E]">{frontMatter.readTime}</span>
              </motion.div>

              {/* Title - larger, editorial */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mb-5 text-5xl md:text-6xl font-serif text-[#E3E7EA] leading-tight tracking-tight"
              >
                {frontMatter.title}
              </motion.h1>

              {/* Meta info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex items-center justify-center gap-4 text-sm text-[#8B949E]"
              >
                <span>{frontMatter.date}</span>
                <span className="w-1 h-1 rounded-full bg-[#6FD98A]/30" />
                <span className="flex items-center gap-2">
                  <User size={14} />
                  {frontMatter.author}
                </span>
              </motion.div>


              {/* Decorative line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="mt-7 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-[#6FD98A]/30 to-transparent"
              />
            </motion.div>
          </Container>
        </section>


        {/* Hero Image Section */}
        <section className="bg-[#131A18] pt-12 pb-4">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mx-auto max-w-5xl"
            >
              <div className="relative overflow-hidden rounded-2xl border border-[#6FD98A]/20 bg-gradient-to-br from-[#0F1614] to-[#131A18] shadow-2xl shadow-black/40">
                {/* Placeholder - Replace with frontMatter.heroImage later */}
                <img
                  src={frontMatter.heroImage || "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80"}
                  alt={frontMatter.title}
                  className="w-full h-[400px] md:h-[500px] object-cover opacity-90"
                />

                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#131A18] via-transparent to-transparent opacity-60" />

                {/* Optional: Image caption/credit */}
                <div className="absolute bottom-4 right-4 text-xs text-[#8B949E]/70 bg-[#0A0E14]/60 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  Visual representation
                </div>
              </div>
            </motion.div>
          </Container>
        </section>


        {/* Article content - Inter typography for reading */}
        <section className="bg-[#131A18] py-12">
          <Container>
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mx-auto max-w-[720px]"
            >
              <div className="article-content">
              <style jsx global>{`
  .article-content {
    font-family: 'Crimson Pro', 'Georgia', 'Times New Roman', serif;
    padding: 1.5em 0; /* Even tighter */
  }

  .article-content p {
    color: #E8EBF0;
    font-size: 20px; /* Slightly bigger for the elegant serif */
    line-height: 1.7; /* Tighter for sophisticated feel */
    letter-spacing: 0.005em; /* Slight opening for serif */
    margin-bottom: 1em; /* Much tighter from 1.2em */
    font-weight: 400;
  }

  .article-content > p:first-of-type {
    font-size: 23px;
    font-weight: 500;
    line-height: 1.65;
    letter-spacing: 0.005em;
    color: #E8EBF0;
    margin-bottom: 1.25em; /* Tighter */
  }

  .article-content h2 {
    color: #E8EBF0;
    font-size: 2.25rem;
    font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
    font-weight: 700;
    margin-top: 2rem; /* Even tighter from 2.5rem */
    margin-bottom: 0.75rem; /* Tighter from 1rem */
    line-height: 1.2;
    letter-spacing: -0.015em;
  }

  .article-content h3 {
    color: #E8EBF0;
    font-size: 1.375rem;
    font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
    font-weight: 600;
    margin-top: 1.75rem; /* Tighter from 2rem */
    margin-bottom: 0.5rem; /* Tighter */
    line-height: 1.3;
    letter-spacing: -0.01em;
  }

  .article-content a {
    color: #6FD98A;
    text-decoration: none;
    font-weight: 500;
    border-bottom: 1px solid rgba(111, 217, 138, 0.3);
    transition: border-color 0.3s ease;
  }

  .article-content a:hover {
    border-bottom-color: #6FD98A;
  }

  .article-content strong {
    color: #FFFFFF;
    font-weight: 600;
  }

  .article-content em {
    font-style: italic;
    color: #E8EBF0;
  }

  .article-content ul {
    color: #E8EBF0;
    margin: 1em 0; /* Tighter from 1.25em */
    padding-left: 2rem;
  }

  .article-content li {
    font-size: 20px;
    line-height: 1.65; /* Tighter from 1.75 */
    letter-spacing: 0.005em;
    margin-bottom: 0.4em; /* Tighter from 0.5em */
    font-weight: 400;
  }

  .article-content li::marker {
    color: #6FD98A;
  }

  .article-content ol {
    color: #E8EBF0;
    margin: 1em 0;
    padding-left: 2rem;
  }

  .article-content ol li {
    font-size: 20px;
    line-height: 1.65;
    letter-spacing: 0.005em;
    margin-bottom: 0.4em;
    font-weight: 400;
  }

  .article-content code {
    color: #6FD98A;
    background-color: rgba(111, 217, 138, 0.1);
    padding: 0.3rem 0.6rem;
    border-radius: 0.25rem;
    font-size: 17px;
    font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
    font-weight: 400;
  }

  .article-content blockquote {
    border-left: 4px solid #6FD98A;
    padding-left: 2rem;
    color: #D8DEE3;
    font-size: 22px;
    font-style: italic;
    margin: 1.75em 0; /* Tighter from 2em */
    font-weight: 400;
    line-height: 1.65;
    letter-spacing: 0.005em;
    font-family: 'Crimson Pro', Georgia, serif;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .article-content {
      padding: 1em 0;
    }

    .article-content p {
      font-size: 18px;
      line-height: 1.65;
      margin-bottom: 0.9em;
    }

    .article-content > p:first-of-type {
      font-size: 20px;
      margin-bottom: 1.1em;
    }

    .article-content h2 {
      font-size: 1.875rem;
      margin-top: 1.75rem;
      margin-bottom: 0.6rem;
    }

    .article-content h3 {
      font-size: 1.25rem;
      margin-top: 1.5rem;
      margin-bottom: 0.4rem;
    }

    .article-content li {
      font-size: 18px;
      margin-bottom: 0.35em;
    }

    .article-content blockquote {
      font-size: 20px;
      padding-left: 1.5rem;
      margin: 1.5em 0;
    }
  }
`}</style>

                <MDXRemote {...mdxSource} components={components} />
              </div>
            </motion.article>


            {/* Back link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mx-auto mt-16 max-w-[720px] border-t border-[#6FD98A]/10 pt-8"
            >
              <Link href="/blog">
                <a className="group inline-flex items-center gap-2 text-sm font-medium text-[#6FD98A] hover:text-[#E3E7EA] transition-colors">
                  <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
                  Back to all articles
                </a>
              </Link>
            </motion.div>
          </Container>
        </section>
      </main>
    </>
  );
}


export async function getStaticPaths() {
  const posts = getAllPosts();
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
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


  return {
    props: {
      frontMatter,
      mdxSource,
    },
  };
}
