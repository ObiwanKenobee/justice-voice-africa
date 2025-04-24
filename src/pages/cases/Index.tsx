
import { CasesList } from '@/components/cases/CasesList';
import { SEOHead } from '@/components/seo/SEOHead';
import { generateLegalServiceSchema } from '@/utils/schemaGenerators';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

export default function CasesPage() {
  const { t } = useLanguage();
  
  const schema = generateLegalServiceSchema({
    serviceType: "Human Rights Case Documentation",
    additionalAreas: ["Lagos", "Nairobi", "Johannesburg", "Manila", "Dhaka"]
  });

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead 
        title="Human Rights Cases | JusticeOS"
        description="Document and track human rights cases in your community. Free access to legal tools and resources."
        keywords="human rights cases, legal documentation, justice system, case tracking"
        schema={schema}
      />
      
      <Header />
      
      <div className="container py-8 flex-grow">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Human Rights Cases</h1>
            <p className="text-muted-foreground">Document, track and resolve human rights violations</p>
          </div>
          
          <Link to="/cases/new">
            <Button className="mt-4 md:mt-0">
              <Plus className="mr-2 h-4 w-4" />
              New Case
            </Button>
          </Link>
        </div>
        
        <CasesList />
      </div>
      
      <Footer />
    </div>
  );
}
