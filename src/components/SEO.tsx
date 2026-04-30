import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  schema?: Record<string, any>;
}

export default function SEO({ 
  title, 
  description, 
  canonical, 
  ogType = 'website',
  ogImage = 'https://doctor2u.co.uk/og-image.jpg',
  schema
}: SEOProps) {
  const siteName = "Doctor2U";
  const fullTitle = `${title} | ${siteName}`;
  const url = `https://doctor2u.co.uk${canonical || ''}`;

  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Doctor2U",
    "description": "Private GP service covering Lancashire and Manchester",
    "url": "https://www.doctor2u.co.uk",
    "telephone": "07488 879077",
    "medicalSpecialty": "GeneralPractice",
    "areaServed": ["Lancashire", "Manchester", "Preston", "Blackburn", "Burnley"],
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Lancashire",
      "addressCountry": "GB"
    }
  };

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

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Global Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify(medicalBusinessSchema)}
      </script>

      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
