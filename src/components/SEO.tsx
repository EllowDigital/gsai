
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogImageAlt?: string;
  keywords?: string[];
  noIndex?: boolean;
  structuredData?: Record<string, any>;
  children?: React.ReactNode;
}

/**
 * SEO component for managing document head metadata, social sharing tags,
 * and structured data throughout the site.
 */
export default function SEO({
  title = "Ghatak Sports Academy | Premier International Martial Arts Training in India",
  description = "Join Ghatak Sports Academy - India's elite international standard martial arts training center. Expert coaching in karate, taekwondo, MMA, boxing, and more with world-class facilities.",
  canonicalUrl = "https://ghatakgsai.netlify.app",
  ogImage = "https://ghatakgsai.netlify.app/images/logo.png",
  ogImageAlt = "Ghatak Sports Academy Logo",
  keywords = ["martial arts", "karate", "taekwondo", "sports academy", "India", "MMA", "boxing", "training"],
  noIndex = false,
  structuredData,
  children
}: SEOProps) {
  // Default structured data if none provided
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    "name": "Ghatak Sports Academy India",
    "url": "https://ghatakgsai.netlify.app",
    "logo": "https://ghatakgsai.netlify.app/images/logo.png",
    "description": "India's premier international standard martial arts training academy offering world-class training in karate, taekwondo, boxing, MMA, and self-defense with international accreditation.",
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
    "sameAs": [
      "https://www.facebook.com/ghatakgsai",
      "https://www.instagram.com/ghatak_gsai",
      "https://twitter.com/ghatakgsai"
    ]
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords.join(', ')} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={ogImageAlt} />

      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={ogImageAlt} />

      {/* Indexing control */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Performance optimizations */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="theme-color" content="#000000" />
      
      {/* Preload critical resources */}
      <link rel="preload" href="/images/logo.png" as="image" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

      {/* Structured data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Additional head elements */}
      {children}
    </Helmet>
  );
}
