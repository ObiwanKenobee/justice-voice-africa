
interface SitemapEntry {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

interface Location {
  city: string;
  country: string;
  seoUrl: string;
}

// Core supported locations based on SEO strategy
export const coreLocations: Location[] = [
  { city: "Lagos", country: "Nigeria", seoUrl: "lagos-nigeria" },
  { city: "Nairobi", country: "Kenya", seoUrl: "nairobi-kenya" },
  { city: "Johannesburg", country: "South Africa", seoUrl: "johannesburg-south-africa" },
  { city: "Detroit", country: "USA", seoUrl: "detroit-usa" },
  { city: "Baltimore", country: "USA", seoUrl: "baltimore-usa" },
  { city: "Kyiv", country: "Ukraine", seoUrl: "kyiv-ukraine" },
  { city: "Manila", country: "Philippines", seoUrl: "manila-philippines" },
  { city: "Dhaka", country: "Bangladesh", seoUrl: "dhaka-bangladesh" },
];

// Generate sitemap XML from entries
export const generateSitemapXml = (entries: SitemapEntry[]): string => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  entries.forEach(entry => {
    xml += '  <url>\n';
    xml += `    <loc>${entry.url}</loc>\n`;
    if (entry.lastmod) {
      xml += `    <lastmod>${entry.lastmod}</lastmod>\n`;
    }
    if (entry.changefreq) {
      xml += `    <changefreq>${entry.changefreq}</changefreq>\n`;
    }
    if (entry.priority !== undefined) {
      xml += `    <priority>${entry.priority}</priority>\n`;
    }
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  return xml;
};

// Main page urls for the site
export const getMainUrls = (baseUrl: string): SitemapEntry[] => {
  return [
    { url: `${baseUrl}`, priority: 1.0, changefreq: 'weekly' },
    { url: `${baseUrl}/cases`, priority: 0.8, changefreq: 'daily' },
    { url: `${baseUrl}/about`, priority: 0.7, changefreq: 'monthly' },
  ];
};

// Generate location-specific URLs
export const getLocationUrls = (baseUrl: string): SitemapEntry[] => {
  return coreLocations.map(location => ({
    url: `${baseUrl}/legal-help/${location.seoUrl}`,
    priority: 0.9,
    changefreq: 'weekly'
  }));
};

// Language variations of the main URLs
export const getLanguageUrls = (baseUrl: string, languages: string[]): SitemapEntry[] => {
  const mainUrls = [
    "",
    "/cases",
    "/about"
  ];
  
  const entries: SitemapEntry[] = [];
  languages.forEach(lang => {
    mainUrls.forEach(path => {
      entries.push({
        url: `${baseUrl}/${lang}${path}`,
        priority: lang === 'en' ? 0.8 : 0.6,
        changefreq: 'weekly'
      });
    });
  });
  
  return entries;
};

// Generate a full sitemap for the site
export const generateFullSitemap = (baseUrl: string): string => {
  const entries: SitemapEntry[] = [
    ...getMainUrls(baseUrl),
    ...getLocationUrls(baseUrl),
    ...getLanguageUrls(baseUrl, ['en', 'fr', 'sw', 'ha', 'yo'])
  ];
  
  return generateSitemapXml(entries);
};
