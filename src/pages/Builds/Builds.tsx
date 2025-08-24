import React from 'react';
import { useTranslation } from 'react-i18next';
import SnowCrowsLink from '../../components/builds/SnowCrowsLink';

const Builds: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-8 p-8">
      <div className="card bg-gray-900/80 backdrop-blur-sm border-gray-700/50">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-1 h-8 bg-orange-500 rounded-full"></div>
          <h2 className="text-3xl font-bold text-white">{t('builds.title')}</h2>
        </div>
        <p className="text-gray-300 text-lg">{t('builds.description')}</p>
      </div>

      {/* Snow Crows Professional Build Links */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <SnowCrowsLink classId="elementalist" />
        <SnowCrowsLink classId="mesmer" />
        <SnowCrowsLink classId="necromancer" />
        <SnowCrowsLink classId="engineer" />
        <SnowCrowsLink classId="ranger" />
        <SnowCrowsLink classId="thief" />
        <SnowCrowsLink classId="guardian" />
        <SnowCrowsLink classId="revenant" />
        <SnowCrowsLink classId="warrior" />
      </div>
    </div>
  );
};

export default Builds;