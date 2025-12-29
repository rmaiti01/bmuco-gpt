import '../styles/globals.css';
import { useState, useEffect, createContext } from 'react';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { SocialSidebar } from '../components/SocialSidebar';
import { MobileSocialBar } from '../components/MobileSocialBar';


export const LangContext = createContext();


function MyApp({ Component, pageProps }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'en';
    return localStorage.getItem('lang') || 'en';
  });


  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);


  return (
    <>
      {/* Favicon links */}
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </Head>

      {/* Global SEO defaults */}
      <DefaultSeo
        titleTemplate="%s | BMUCO — Building science with equity"
        defaultTitle="BMUCO — Building science with equity"
        description="Independent, neurodivergent-led science organization. Since 2017, connecting Nobel laureates, Fields medalists, and 10k+ students across Global South ↔ Europe. Co-hosting Abel Symposium 2025."
        canonical="https://bmuco.org"
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://bmuco.org',
          site_name: 'BMUCO',
          title: 'BMUCO — Building science with equity',
          description: 'Independent science organization connecting frontier researchers with Global South students. Co-hosting Abel Symposium 2025 in Bonn.',
          images: [
            {
              url: 'https://bmuco.org/images/og-image.jpg',
              width: 1200,
              height: 630,
              alt: 'BMUCO — Independent science organization',
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
            content: 'BMUCO, Abel Symposium 2025, Maryna Viazovska, Fields Medal, climate science, Global South, mathematics education, neurodivergent science',
          },
          {
            name: 'author',
            content: 'Rajarshi Chatterjee',
          },
          {
            property: 'og:image:width',
            content: '1200',
          },
          {
            property: 'og:image:height',
            content: '630',
          },
        ]}
      />

      {/* Structured data for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "BMUCO",
            "alternateName": "Building Mathematics Understanding and Climate Organization",
            "url": "https://bmuco.org",
            "description": "Independent, neurodivergent-led science organization connecting frontier researchers with Global South students since 2017.",
            "founder": {
              "@type": "Person",
              "name": "Rajarshi Chatterjee"
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "DE"
            },
            "event": [
              {
                "@type": "Event",
                "name": "Abel Symposium 2025",
                "description": "International mathematics symposium co-hosted by BMUCO and Hausdorff Center",
                "startDate": "2025-06-01",
                "location": {
                  "@type": "Place",
                  "name": "University of Bonn",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Bonn",
                    "addressCountry": "DE"
                  }
                }
              }
            ],
            "sameAs": [
              "https://twitter.com/bmuco_org",
              "https://linkedin.com/company/bmuco"
            ],
            "audience": {
              "@type": "Audience",
              "audienceType": ["students", "researchers", "mathematicians"]
            }
          }),
        }}
      />

      <LangContext.Provider value={{ lang, setLang }}>
        {/* Social media sidebars */}
        <SocialSidebar />
        <MobileSocialBar />
        
        <Nav />
        <Component {...pageProps} />
        <Footer />
        <Analytics />
      </LangContext.Provider>
    </>
  );
}


export default MyApp;
