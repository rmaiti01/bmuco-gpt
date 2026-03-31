import '../styles/globals.css';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </Head>

      <DefaultSeo
        titleTemplate="%s | BMUCO — Formal Mathematics Meets AI"
        defaultTitle="BMUCO — Formal Mathematics Meets AI"
        description="We develop formal mathematical datasets in Lean 4 and build AI theorem proving infrastructure — partnering with frontier research institutions to advance the science of automated reasoning."
        canonical="https://bmuco.org"
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://bmuco.org',
          site_name: 'BMUCO',
          title: 'BMUCO — Formal Mathematics Meets AI',
          description: 'We develop formal mathematical datasets in Lean 4 and build AI theorem proving infrastructure.',
          images: [
            {
              url: 'https://bmuco.org/images/og-image.jpg',
              width: 1200,
              height: 630,
              alt: 'BMUCO — Formal Mathematics Meets AI',
            },
          ],
        }}
        twitter={{
          handle: '@bmuco_org',
          site: '@bmuco_org',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'BMUCO, Lean 4, formal mathematics, AI theorem proving, Mathlib, automated reasoning, process traces',
          },
          {
            name: 'author',
            content: 'Rajarshi Maiti',
          },
        ]}
      />

      <Script
        strategy="afterInteractive"
        data-website-id=""
        src="https://umami-production-5c2e.up.railway.app/script.js"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "BMUCO",
            "url": "https://bmuco.org",
            "description": "Independent science organization developing formal mathematical datasets in Lean 4 and AI theorem proving infrastructure.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bonn",
              "addressCountry": "DE"
            },
            "sameAs": [
              "https://twitter.com/bmuco_org",
              "https://linkedin.com/company/bmuco"
            ],
          }),
        }}
      />

      <Nav />
      <Component {...pageProps} />
      <Footer />
      <Analytics />
    </>
  );
}

export default MyApp;
