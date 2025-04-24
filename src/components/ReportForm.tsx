
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, MapPin, Upload } from 'lucide-react';

const ReportForm = () => {
  const { t } = useLanguage();

  const issueTypes = [
    'Police Misconduct', 
    'Property Rights Violation',
    'Discrimination',
    'Gender-Based Violence',
    'Freedom of Speech Violation',
    'Unlawful Detention',
    'Environmental Injustice',
    'Labor Rights Violation',
    'Other'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would submit the form data to an API
    alert('Report submitted successfully!');
  };

  return (
    <section id="report" className="py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        <Card className="shadow-lg border-0 animate-fade-in">
          <CardHeader className="bg-secondary/10">
            <CardTitle className="text-2xl font-bold">{t('reportFormTitle')}</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="issueType">{t('issueType')}</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select issue type" />
                  </SelectTrigger>
                  <SelectContent>
                    {issueTypes.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location" className="flex items-center gap-2">
                  <MapPin size={16} />
                  {t('issueLocation')}
                </Label>
                <div className="flex gap-2">
                  <Input id="location" placeholder="City, Region, Country" />
                  <Button variant="outline" type="button" size="icon">
                    <Search size={16} />
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">{t('issueDescription')}</Label>
                <Textarea
                  id="description"
                  placeholder="Describe what happened in as much detail as possible..."
                  rows={5}
                />
              </div>

              <div className="border border-dashed rounded-md p-6 text-center cursor-pointer hover:bg-muted transition-colors">
                <Upload size={24} className="mx-auto mb-2 text-muted-foreground" />
                <p>Upload photos or evidence (optional)</p>
                <p className="text-sm text-muted-foreground">Maximum 5 files, 10MB each</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactInfo">{t('contactInfo')}</Label>
                <Input id="contactInfo" placeholder="Email or phone number" />
                <p className="text-xs text-muted-foreground">Your contact information will remain confidential</p>
              </div>

              <Button type="submit" className="w-full">{t('submit')}</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ReportForm;
