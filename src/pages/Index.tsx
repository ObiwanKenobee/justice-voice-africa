
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import Header from '../components/Header';
import ReportForm from '../components/ReportForm';
import QandASection from '../components/QandASection';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { generateLegalServiceSchema } from '@/utils/schemaGenerators';

const Index = () => {
  const { t, language } = useLanguage();

  // Dynamic schema based on user language/region
  const schema = generateLegalServiceSchema({
    additionalAreas: ["Lagos", "Nairobi", "Johannesburg", "Manila", "Dhaka", "Kyiv"]
  });

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title={`${t('appName')} | ${t('tagline')}`}
        description={t('aboutText')}
        schema={schema}
        locale={language === 'en' ? 'en_US' : language === 'fr' ? 'fr_FR' : `${language}_${language.toUpperCase()}`}
      />
      
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-muted to-background py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              {t('appName')}
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto text-foreground/80 mb-8 animate-fade-in">
              {t('tagline')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" asChild>
                <a href="#report">
                  {t('reportButton')}
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#qa">{t('askQuestion')}</a>
              </Button>
            </div>
          </div>
          
          {/* Background pattern */}
          <div className="absolute inset-0 z-[-1] opacity-20 overflow-hidden">
            <div className="absolute w-96 h-96 border border-primary rounded-full top-1/4 left-1/4 animate-pulse-slow"></div>
            <div className="absolute w-64 h-64 border border-accent rounded-full bottom-1/4 right-1/4 animate-pulse-slow"></div>
          </div>
        </section>
        
        {/* Features Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Legal Help Without Barriers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Document Violations</h3>
                <p className="text-muted-foreground">Securely record human rights violations with photos, location data, and detailed descriptions.</p>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">AI Legal Guidance</h3>
                <p className="text-muted-foreground">Get accessible legal information about your rights and possible remedies in multiple languages.</p>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Connect With Advocates</h3>
                <p className="text-muted-foreground">Link with human rights organizations, lawyers, and community advocates for further support.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Location-Based Help Section */}
        <section className="py-12 px-4 bg-muted/20">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Legal Help Wherever You Are</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Supporting communities across the world with localized legal resources
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { city: "Lagos", country: "Nigeria" },
                { city: "Nairobi", country: "Kenya" },
                { city: "Johannesburg", country: "South Africa" },
                { city: "Manila", country: "Philippines" },
                { city: "Dhaka", country: "Bangladesh" },
                { city: "Detroit", country: "USA" },
                { city: "Kyiv", country: "Ukraine" },
                { city: "Gaza", country: "Palestine" }
              ].map((location) => (
                <div key={location.city} className="bg-card rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-all hover:translate-y-[-2px]">
                  <h3 className="font-bold">{location.city}</h3>
                  <p className="text-sm text-muted-foreground">{location.country}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Report Form Section */}
        <ReportForm />
        
        {/* Q&A Section */}
        <QandASection />
        
        {/* About Section */}
        <section id="about" className="py-16 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-6">{t('aboutTitle')}</h2>
            <p className="text-lg mb-8">
              {t('aboutText')}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary">120+</div>
                <div className="text-sm text-muted-foreground">Communities</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary">5</div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Cases Documented</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">AI Assistance</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
