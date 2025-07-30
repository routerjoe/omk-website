import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
}

const SEO = ({
  title = 'Ohana Mana Koa - Empowering Native Hawaiian Communities',
  description = 'Ohana Mana Koa is a Native Hawaiian-owned and veteran-led 501(c)(3) nonprofit organization that empowers Native Hawaiian families, veterans, and underserved communities through culturally grounded programs focused on education, economic mobility, and self-determination.',
  keywords = 'Native Hawaiian, nonprofit, veterans, community empowerment, cultural preservation, Hawaii, education, economic mobility, ohana, mana koa',
  ogImage = '/images/OMK-Logo-with-tag-line.png',
  ogType = 'website',
  canonicalUrl
}: SEOProps) => {
  const siteUrl = 'https://ohanamanakoa.org'; // Update with actual domain
  const fullTitle = title.includes('Ohana Mana Koa') ? title : `${title} | Ohana Mana Koa`;
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  return (
    <Head>
      {/* Google Analytics */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-XTG9XF7M8D"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XTG9XF7M8D', {
              page_title: '${fullTitle}',
              page_location: '${fullCanonicalUrl}'
            });
          `,
        }}
      />
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Ohana Mana Koa" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:alt" content="Ohana Mana Koa Logo" />
      <meta property="og:site_name" content="Ohana Mana Koa" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:image:alt" content="Ohana Mana Koa Logo" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#1E40AF" />
      <meta name="msapplication-TileColor" content="#1E40AF" />
      <meta name="application-name" content="Ohana Mana Koa" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NonProfit",
            "name": "Ohana Mana Koa",
            "alternateName": "OMK",
            "url": siteUrl,
            "logo": fullOgImage,
            "description": description,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "75-6125 Kuakini Hwy, PMB 1105",
              "addressLocality": "Kailua-Kona",
              "addressRegion": "HI",
              "postalCode": "96740",
              "addressCountry": "US"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "",
              "contactType": "customer service",
              "email": "info@ohanamanakoa.org"
            },
            "sameAs": [
              // Add social media URLs when available
            ],
            "foundingDate": "2014",
            "taxID": "92-3912909",
            "nonprofitStatus": "501(c)(3)"
          })
        }}
      />
    </Head>
  );
};

export default SEO;