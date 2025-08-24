import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import headerImg from '../../assets/images/header.jpg';

import type { FC } from 'react';

const Header: FC = () => {
  const { t, i18n } = useTranslation();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
  };

  const getCurrentLanguage = () => {
    return i18n.language === 'de' ? 'DE' : 'EN';
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };

    if (isLangMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLangMenuOpen]);

  return (
    <header 
      className="bg-zinc-900/95 backdrop-blur-md border-b border-zinc-800 shadow-xl relative z-[10000] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(24, 24, 27, 0), rgba(24, 24, 27, 0.4)), url(${headerImg})`,
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-35">
          <div className="flex items-center space-x-4">
            <img 
              src="https://emblem.werdes.net/emblem/0E55A939-7893-E411-925A-AC162DAE5AD5/128" 
              alt="NAC Guild Logo" 
              className="h-20 w-20 rounded-lg shadow-lg"
            />
            <div>
              <h1 className="text-2xl font-bold text-white">{t('header.guildName')}</h1>
            </div>
          </div>
          
          {/* Language Switcher */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-zinc-800/60 border border-zinc-700/50 hover:bg-zinc-700/60 transition-all duration-200"
              aria-label={t('language.switch')}
            >
              <span className="text-white font-medium">{getCurrentLanguage()}</span>
              <svg 
                className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isLangMenuOpen ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Language Menu */}
            {isLangMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-zinc-800 border border-zinc-700 rounded-lg shadow-xl z-[9999]">
                <button
                  onClick={() => changeLanguage('de')}
                  className={`w-full text-left px-4 py-3 hover:bg-zinc-700 transition-colors duration-200 rounded-t-lg ${i18n.language === 'de' ? 'bg-zinc-700 text-orange-400' : 'text-white'}`}
                >
                  {t('language.german')}
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className={`w-full text-left px-4 py-3 hover:bg-zinc-700 transition-colors duration-200 rounded-b-lg ${i18n.language === 'en' ? 'bg-zinc-700 text-orange-400' : 'text-white'}`}
                >
                  {t('language.english')}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;