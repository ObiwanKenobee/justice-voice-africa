
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-primary-foreground mt-16">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-3">{t('appName')}</h3>
            <p className="text-primary-foreground/80">{t('footerTagline')}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">{t('aboutTitle')}</h3>
            <p className="text-primary-foreground/80">{t('aboutText')}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">{t('contactTitle')}</h3>
            <p className="text-primary-foreground/80">info@justiceos.org</p>
            <p className="text-primary-foreground/80">+123 456 7890</p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} JusticeOS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
