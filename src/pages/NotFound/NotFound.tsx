import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import GrungeImageMask from '../../components/common/GrungeImageMask';
import gw2notfound from '../../assets/images/404-gw2.png';


const NotFound: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="max-w-6xl mx-auto">
        {/* Responsive Layout: Side-by-side on large screens, vertical on mobile */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-12">
          
          {/* GW2 404 Image with Grunge Border */}
          <div className="flex-shrink-0 order-2 lg:order-1 lg:flex lg:items-center">
            <GrungeImageMask className="w-72 sm:w-80 lg:w-96 aspect-[4/3]">
              <img 
                src={gw2notfound}
                alt="GW2 404 Error"
                className="w-full h-full object-contain scale-125"
              />
            </GrungeImageMask>
          </div>

          {/* Error Message */}
          <div className="flex-1 text-center lg:text-left space-y-6 order-1 lg:order-2 flex flex-col justify-center">
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-orange-400 mb-4 animate-pulse">
                404
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-3">
                {t('notFound.title')}
              </h2>
              <p className="text-lg sm:text-xl text-orange-300 mb-6">
                {t('notFound.subtitle')}
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-orange-500/20 p-6 lg:p-8">
              <p className="text-gray-300 mb-8 text-base sm:text-lg">
                {t('notFound.description')}
              </p>

              <Link 
                to="/"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg text-lg"
              >
                {t('notFound.backHome')}
              </Link>
            </div>

            <div className="text-sm sm:text-base text-gray-400 italic">
              {t('notFound.tip')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;