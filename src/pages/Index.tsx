
import { Suspense } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import { Helmet } from 'react-helmet-async';
import { usePageSections } from '@/hooks/use-page-sections';
import SectionLoader from '@/components/SectionLoader';
import MainContent from '@/components/MainContent';

const Index = () => {
  const { isMounted, visibleSections } = usePageSections();

  return (
    <>
      <Helmet>
        <title>Ghatak Sports Academy | Top Martial Arts Training in India</title>
        <meta name="description"
          content="Join Ghatak Sports Academy - India's premier martial arts training center. Expert coaching in karate, taekwondo, self-defense, and more." />
        <link rel="canonical" href="https://ghatakgsai.netlify.app" />
        {/* Structured data added through Helmet */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "SportsOrganization",
            "name": "Ghatak Sports Academy India",
            "url": "https://ghatakgsai.netlify.app",
            "logo": "https://ghatakgsai.netlify.app/images/logo.png",
            "description": "India's premier martial arts training academy offering classes in karate, taekwondo, boxing, MMA, and self-defense.",
            "telephone": "+91 6394135988",
            "email": "ghatakgsai@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Naubasta Pulia, Takrohi Road, Amrai Gaon",
              "addressLocality": "Lucknow",
              "addressRegion": "Uttar Pradesh",
              "postalCode": "226021",
              "addressCountry": "IN"
            },
            "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 06:00-20:00",
            "foundingDate": "2019-01-01",
            "foundingLocation": "Lucknow, India"
          }
        `}</script>

        {/* Add preload for critical resources */}
        <link rel="preload" href="/images/logo.png" as="image" />
        <link rel="preload" href="/images/founder.webp" as="image" />
        
        {/* Add optimized performance settings */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      </Helmet>

      <div className="font-sans min-h-screen bg-black">
        <NavBar />
        <main id="main-content">
          <div className="relative z-10">
            <Hero />
          </div>
          <MainContent isMounted={isMounted} visibleSections={visibleSections} />
        </main>
      </div>
    </>
  );
};

export default Index;
