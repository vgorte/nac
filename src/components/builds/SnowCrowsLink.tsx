import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import snowcrowlogo from '../../assets/images/snowcrows-logo.png';
import elementalistImg from '../../assets/images/classes/elementalist.jpg';
import mesmerImg from '../../assets/images/classes/mesmer.jpg';
import necromancerImg from '../../assets/images/classes/necromancer.jpg';
import engineerImg from '../../assets/images/classes/engineer.jpg';
import rangerImg from '../../assets/images/classes/ranger.jpg';
import thiefImg from '../../assets/images/classes/thief.jpg';
import guardianImg from '../../assets/images/classes/guardian.jpg';
import revenantImg from '../../assets/images/classes/revenant.jpg';
import warriorImg from '../../assets/images/classes/warrior.jpg';

interface SnowCrowsLinkProps {
  classId: 'elementalist' | 'mesmer' | 'necromancer' | 'engineer' | 'ranger' | 'thief' | 'guardian' | 'revenant' | 'warrior';
  className?: string;
}

const SnowCrowsLink: React.FC<SnowCrowsLinkProps> = ({ classId, className = '' }) => {
  const { t } = useTranslation();
  
  const classData = {
    elementalist: {
      url: 'https://snowcrows.com/builds/wvw/elementalist',
      image: elementalistImg,
      gradient: 'from-red-900/20 via-orange-800/30 to-yellow-900/20',
      border: 'border-red-500/30',
      glow: 'group-hover:shadow-red-500/20'
    },
    mesmer: {
      url: 'https://snowcrows.com/builds/wvw/mesmer',
      image: mesmerImg,
      gradient: 'from-purple-900/20 via-pink-800/30 to-purple-900/20',
      border: 'border-purple-500/30',
      glow: 'group-hover:shadow-purple-500/20'
    },
    necromancer: {
      url: 'https://snowcrows.com/builds/wvw/necromancer',
      image: necromancerImg,
      gradient: 'from-green-900/20 via-emerald-800/30 to-green-900/20',
      border: 'border-green-500/30',
      glow: 'group-hover:shadow-green-500/20'
    },
    engineer: {
      url: 'https://snowcrows.com/builds/wvw/engineer',
      image: engineerImg,
      gradient: 'from-amber-900/20 via-yellow-800/30 to-orange-900/20',
      border: 'border-amber-500/30',
      glow: 'group-hover:shadow-amber-500/20'
    },
    ranger: {
      url: 'https://snowcrows.com/builds/wvw/ranger',
      image: rangerImg,
      gradient: 'from-emerald-900/20 via-green-800/30 to-lime-900/20',
      border: 'border-emerald-500/30',
      glow: 'group-hover:shadow-emerald-500/20'
    },
    thief: {
      url: 'https://snowcrows.com/builds/wvw/thief',
      image: thiefImg,
      gradient: 'from-gray-900/20 via-slate-800/30 to-gray-900/20',
      border: 'border-gray-500/30',
      glow: 'group-hover:shadow-gray-500/20'
    },
    guardian: {
      url: 'https://snowcrows.com/builds/wvw/guardian',
      image: guardianImg,
      gradient: 'from-blue-900/20 via-blue-800/30 to-cyan-900/20',
      border: 'border-blue-500/30',
      glow: 'group-hover:shadow-blue-500/20'
    },
    revenant: {
      url: 'https://snowcrows.com/builds/wvw/revenant',
      image: revenantImg,
      gradient: 'from-teal-900/20 via-cyan-800/30 to-blue-900/20',
      border: 'border-teal-500/30',
      glow: 'group-hover:shadow-teal-500/20'
    },
    warrior: {
      url: 'https://snowcrows.com/builds/wvw/warrior',
      image: warriorImg,
      gradient: 'from-orange-900/20 via-red-800/30 to-amber-900/20',
      border: 'border-orange-500/30',
      glow: 'group-hover:shadow-orange-500/20'
    }
  };

  const data = classData[classId];

  const handleClick = () => {
    window.open(data.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleClick}
      className={`group relative overflow-hidden rounded-xl bg-gray-900/100 backdrop-blur-sm
        border ${data.border} hover:border-opacity-100 transition-all duration-500 
        transform hover:scale-105 hover:shadow-2xl ${data.glow} cursor-pointer ${className}`}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={data.image}
          alt={t(`builds.classes.${classId}.name`)}
          className="w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-opacity duration-500
            group-hover:scale-100 transform origin-center"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${data.gradient}`} />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/20 transition-colors duration-500" />
      </div>
      
      {/* Content */}
      <div className="relative p-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <img 
              src={snowcrowlogo}
              alt="Snow Crows"
              className="w-10 h-10 opacity-100 group-hover:opacity-100 transition-opacity duration-300
                filter brightness-110 group-hover:brightness-125 drop-shadow-lg"
            />
            <div>
              <div className="text-white font-bold text-lg group-hover:text-blue-100 transition-colors duration-300">
                {t('builds.snowCrows.title')}
              </div>
            </div>
          </div>
          
          <ExternalLink 
            size={20} 
            className="text-gray-400 group-hover:text-white transition-all duration-300
              transform group-hover:translate-x-1 group-hover:-translate-y-1 drop-shadow" 
          />
        </div>
        
        {/* Class Info */}
        <div className="text-left">
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors duration-300">
            {t(`builds.snowCrows.${classId}Builds`)}
          </h3>
        </div>
        
      </div>
      
      {/* Animated border effect */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent 
        bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-0 
        group-hover:opacity-100 transition-opacity duration-500 -m-0.5 -z-10" />
    </button>
  );
};

export default SnowCrowsLink;