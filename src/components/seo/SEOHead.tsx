
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  schema?: Record<string, any>;
  locale?: string;
  canonicalUrl?: string;
  children?: React.ReactNode;
  type?: string;
}

const defaultDescription = "Get fair access to legal help. Use JusticeOS to file cases, access forms, and understand your rights.";
const defaultTitle = "JusticeOS | AI-Powered Legal Access";
const defaultKeywords = "legal aid, human rights, justice technology, legal help";
const defaultImage = "/justiceos-social.jpg"; // Default social image

export const SEOHead = ({
  title = defaultTitle,
  description = defaultDescription,
  keywords = defaultKeywords,
  image = defaultImage, 
  schema,
  locale = "en_US",
  canonicalUrl,
  children,
  type = "website",
}: SEOProps) => {
  const location = useLocation();
  const siteUrl = "https://justiceos.org"; // Should be configured from env or constants
  const url = canonicalUrl || `${siteUrl}${location.pathname}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content="JusticeOS" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />

      {/* JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
      
      {children}
    </Helmet>
  );
};
