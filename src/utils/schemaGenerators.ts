
interface SchemaOptions {
  location?: string;
  country?: string;
  serviceType?: string;
  url?: string;
  additionalAreas?: string[];
  imagePath?: string;
}

export const generateLegalServiceSchema = ({
  location = "",
  country = "",
  serviceType = "Legal Aid Tech Platform",
  url = "https://www.justiceos.org",
  additionalAreas = [],
  imagePath = "/justiceos-logo.jpg"
}: SchemaOptions) => {
  const areas = location ? [location, ...additionalAreas] : additionalAreas;
  
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "JusticeOS",
    "description": `Digital legal aid and human rights documentation platform${location ? ` serving ${location}${country ? `, ${country}` : ''}` : ''}`,
    "url": url,
    "logo": `${url}${imagePath}`,
    "serviceType": serviceType,
    "areaServed": areas.length > 0 ? areas : undefined,
    "availableLanguage": [
      "English", "Swahili", "French", "Hausa", "Yoruba"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@justiceos.org",
      "availableLanguage": [
        "English", "Swahili", "French", "Hausa", "Yoruba"
      ]
    }
  };
};

export const generateFAQSchema = (faqs: Array<{question: string; answer: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

export const generateArticleSchema = ({
  title,
  description,
  url,
  imageUrl,
  authorName,
  publishDate,
  modifiedDate,
}: {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  authorName: string;
  publishDate: string;
  modifiedDate?: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": imageUrl,
    "author": {
      "@type": "Person",
      "name": authorName
    },
    "publisher": {
      "@type": "Organization",
      "name": "JusticeOS",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.justiceos.org/justiceos-logo.jpg"
      }
    },
    "datePublished": publishDate,
    "dateModified": modifiedDate || publishDate
  };
};
