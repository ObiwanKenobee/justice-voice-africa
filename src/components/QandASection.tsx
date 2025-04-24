
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Loader2 } from 'lucide-react';

const QandASection = () => {
  const { t } = useLanguage();
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;
    
    // Simulate an AI response
    setIsLoading(true);
    
    setTimeout(() => {
      // This would be replaced with an actual API call to an AI service
      const simulatedResponses = [
        "Based on international human rights law, you have the right to peaceful assembly and freedom of expression. Local authorities must respect these rights and can only restrict them under specific legal conditions.",
        "Housing is recognized as a basic right under several African charters. If faced with eviction, you should be given reasonable notice and alternative accommodation options. Document all communications with authorities.",
        "Gender discrimination in employment is prohibited under both international standards and many national laws in Africa. You have the right to equal pay for equal work and a workplace free of harassment."
      ];
      
      const randomResponse = simulatedResponses[Math.floor(Math.random() * simulatedResponses.length)];
      setAnswer(randomResponse);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section id="qa" className="py-12 px-4 bg-muted/30">
      <div className="container mx-auto max-w-3xl">
        <Card className="shadow-lg border-0 animate-fade-in">
          <CardHeader className="bg-accent/10">
            <CardTitle className="text-2xl font-bold flex items-center gap-2">
              <MessageCircle size={24} />
              {t('qaTitle')}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Textarea
                placeholder={t('qaPlaceholder')}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                rows={3}
                className="resize-none"
              />
              
              <Button 
                type="submit" 
                disabled={isLoading || !question.trim()}
                className="w-full"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  t('qaButton')
                )}
              </Button>
            </form>

            {answer && (
              <div className="mt-6 p-4 bg-background rounded-lg border">
                <h3 className="font-semibold mb-2">Response:</h3>
                <p className="text-foreground/90">{answer}</p>
                <div className="mt-4 text-xs text-muted-foreground">
                  Note: This is AI-generated guidance and should not replace professional legal advice.
                </div>
              </div>
            )}

            <div className="mt-6 text-sm text-muted-foreground">
              <p>Ask questions about your rights, legal processes, or how to document violations. Our AI will provide general guidance based on human rights standards.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QandASection;
