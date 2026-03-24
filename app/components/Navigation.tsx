'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const translations = {
    fr: {
      home: 'Accueil',
      about: 'À Propos',
      programs: 'Programmes',
      gallery: 'Galerie',
      contact: 'Contact',
    },
    en: {
      home: 'Home',
      about: 'About',
      programs: 'Programs',
      gallery: 'Gallery',
      contact: 'Contact',
    },
  };

  const t = translations[language];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo and School Name */}
          <div className="flex items-center space-x-3">
            <img
              src="/logo.jpeg"
              alt="GSB Rosa Peace Logo"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover shadow-md"
            />
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg text-gray-800 leading-tight">
                Rosa Peace
              </span>
              <span className="text-xs text-[#2d7a3e] font-medium">
                Bilingual School
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'programs', 'gallery', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-700 hover:text-[#2d7a3e] font-medium transition-colors duration-200 relative group"
              >
                {t[item as keyof typeof t]}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2d7a3e] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}

            {/* Language Toggle */}
            <div className="flex items-center space-x-2 ml-4 border-l pl-4 border-gray-300">
              <button
                onClick={() => setLanguage('fr')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  language === 'fr'
                    ? 'bg-[#2d7a3e] text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  language === 'en'
                    ? 'bg-[#2d7a3e] text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {['home', 'about', 'programs', 'gallery', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-left px-4 py-2 text-gray-700 hover:bg-[#2d7a3e]/10 hover:text-[#2d7a3e] rounded-md font-medium transition-colors"
                >
                  {t[item as keyof typeof t]}
                </button>
              ))}

              {/* Language Toggle Mobile */}
              <div className="flex items-center space-x-2 px-4 pt-2">
                <button
                  onClick={() => setLanguage('fr')}
                  className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${
                    language === 'fr'
                      ? 'bg-[#2d7a3e] text-white'
                      : 'text-gray-600 bg-gray-100'
                  }`}
                >
                  Français
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${
                    language === 'en'
                      ? 'bg-[#2d7a3e] text-white'
                      : 'text-gray-600 bg-gray-100'
                  }`}
                >
                  English
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
