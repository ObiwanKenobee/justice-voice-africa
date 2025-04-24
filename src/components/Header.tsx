
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSelector from './LanguageSelector';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

const Header = () => {
  const { t } = useLanguage();

  const navItems = [
    { title: t('reportButton'), href: '#report' },
    { title: t('askQuestion'), href: '#qa' },
    { title: t('learnMore'), href: '#about' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/90 border-b">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">J</span>
          </div>
          <span className="font-bold text-xl tracking-tight">{t('appName')}</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.title}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <LanguageSelector />
          
          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu size={20} />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-foreground/80 hover:text-foreground transition-colors px-2 py-1"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
