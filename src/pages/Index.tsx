
import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import { Helmet } from 'react-helmet-async';
import MainContent from '@/components/MainContent';
import { useLocation } from 'react-router-dom';

const Index = () => {
  const location = useLocation();

  // Handle direct navigation to a section via URL hash
  useEffect(() => {
    if (location.hash) {
      requestAnimationFrame(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }
  }, [location.hash]);

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
            }
          }
        `}</script>

        {/* Add preload for critical resources */}
        <link rel="preload" href="/images/logo.png" as="image" />
        <link rel="preload" as="style" href="/src/App.css" />
        <link rel="preload" as="style" href="/src/styles/glassmorphism.css" />
        
        {/* Add optimized performance settings */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#000000" />
      </Helmet>

      <div className="font-sans min-h-screen bg-black w-full max-w-[100vw] overflow-x-hidden">
        <NavBar />
        <main id="main-content" className="w-full overflow-x-hidden">
          <div className="relative z-10 w-full">
            <Hero />
          </div>
          <MainContent />
        </main>
      </div>
    </>
  );
};

export default Index;
