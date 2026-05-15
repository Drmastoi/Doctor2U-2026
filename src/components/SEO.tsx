import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  schema?: Record<string, any>;
  faq?: { question: string; answer: string; }[];
}

export default function SEO({ 
  title, 
  description, 
  canonical, 
  ogType = 'website',
  ogImage = 'https://www.doctor2u.co.uk/og-image.jpg',
  schema,
  faq
}: SEOProps) {
  const siteName = "Doctor2U";
  const fullTitle = `${title} | ${siteName}`;
  const url = `https://www.doctor2u.co.uk${canonical || ''}`;

  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Doctor2U | Dr Awais Iqbal",
    "description": "Private GP and Home Visit Doctor service covering Lancashire and Greater Manchester.",
    "url": "https://www.doctor2u.co.uk",
    "telephone": "07488 879077",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Preston",
      "addressRegion": "Lancashire",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "53.7632",
      "longitude": "-2.7044"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "08:00",
        "closes": "22:00"
      }
    ],
    "medicalSpecialty": "GeneralPractice",
    "priceRange": "££"
  };

  const faqSchema = faq ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(medicalBusinessSchema)}
      </script>

      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}

      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
