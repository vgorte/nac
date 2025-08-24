import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import type { FC } from 'react';
import DiscordWidget from '../../components/common/DiscordWidget';
import GrungeImageMask from '../../components/common/GrungeImageMask';
import raidScheduleImage from '../../assets/images/raid-schedule.jpg';

interface NextEvent {
  name: string;
  time: string;
  day: string;
  type: 'alliance' | 'guild';
}

const Dashboard: FC = () => {
  const { t } = useTranslation();
  const [nextEvent, setNextEvent] = useState<NextEvent | null>(null);

  const getNextEvent = useCallback((): NextEvent => {
    const now = new Date();
    
    // Look through the next 7 days to find the next event
    for (let dayOffset = 0; dayOffset < 7; dayOffset++) {
      const checkDate = new Date(now);
      checkDate.setDate(checkDate.getDate() + dayOffset);
      
      const dayOfWeek = checkDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
      const isToday = dayOffset === 0;
      const currentTime = now.getHours() * 60 + now.getMinutes();
      
      const dayText = isToday ? t('dashboard.today') : dayOffset === 1 ? t('dashboard.tomorrow') : 
        t(`dashboard.${checkDate.toLocaleDateString('en', { weekday: 'long' }).toLowerCase()}`);
      
      const eventsForDay = [];
      
      // Check for Alliance Breakfast Raids (Monday-Friday 8:45-10:45)
      if (dayOfWeek >= 1 && dayOfWeek <= 5) {
        const allianceStart = 8 * 60 + 45; // 8:45
        
        if (!isToday || currentTime < allianceStart) {
          eventsForDay.push({
            name: t('events.allianceBreakfastRaid'),
            time: '8:45 CEST',
            day: dayText,
            type: 'alliance' as const,
            startTime: allianceStart
          });
        }
      }
      
      // Check for Guild Raids (Thursday & Saturday 20:00-22:00)
      if (dayOfWeek === 4 || dayOfWeek === 6) { // Thursday or Saturday
        const guildStart = 20 * 60; // 20:00
        
        if (!isToday || currentTime < guildStart) {
          eventsForDay.push({
            name: t('events.guildRaid'),
            time: '20:00 CEST',
            day: dayText,
            type: 'guild' as const,
            startTime: guildStart
          });
        }
      }
      
      // Sort events by start time and return the earliest
      if (eventsForDay.length > 0) {
        eventsForDay.sort((a, b) => a.startTime - b.startTime);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { startTime, ...event } = eventsForDay[0];
        return event;
      }
    }

    // Fallback to next Monday's alliance raid if nothing found
    return {
      name: t('events.allianceBreakfastRaid'),
      time: '8:45 CEST',
      day: t('dashboard.monday'),
      type: 'alliance'
    };
  }, [t]);

  useEffect(() => {
    const updateNextEvent = () => {
      setNextEvent(getNextEvent());
    };

    updateNextEvent();
    
    // Update every minute to keep it accurate
    const interval = setInterval(updateNextEvent, 60000);
    
    return () => clearInterval(interval);
  }, [getNextEvent]);

  return (
    <div className="space-y-8 p-8">
      <div className="card bg-gray-900/80 backdrop-blur-sm border-gray-700/50">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-1 h-8 bg-orange-500 rounded-full"></div>
          <h2 className="text-3xl font-bold text-white">{t('dashboard.home')}</h2>
        </div>
        <div className="bg-zinc-800/60 backdrop-blur-sm rounded-xl p-8 border border-zinc-700/50">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <h3 className="text-2xl font-bold text-white">{t('dashboard.raidSchedule')} - HARDCODED EXAMPLE</h3>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Raid Schedule Content */}
            <div className="w-full lg:w-7/10 space-y-6">
              <div className="bg-zinc-700/40 rounded-lg p-6 border border-orange-500/20">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-400 text-xl">☀️</span>
                    <span className="text-gray-300 font-medium">{t('dashboard.allianceRaids')}</span>
                  </div>
                  <span className="text-white font-bold bg-orange-500/20 px-3 py-1 rounded-full text-sm w-80 text-center inline-block">
                    {t('dashboard.allianceSchedule')}
                  </span>
                </div>
                <p className="text-sm text-gray-400">Breakfast raids for early birds</p>
              </div>
              
              <div className="bg-zinc-700/40 rounded-lg p-6 border border-red-500/20">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-red-400 text-xl">⚔️</span>
                    <span className="text-gray-300 font-medium">{t('dashboard.guildRaids')}</span>
                  </div>
                  <span className="text-white font-bold bg-red-500/20 px-3 py-1 rounded-full text-sm w-80 text-center inline-block">
                    {t('dashboard.guildSchedule')}
                  </span>
                </div>
                <p className="text-sm text-gray-400">Evening guild adventures</p>
              </div>
            </div>
            
            {/* Image with Brush Mask*/}
            <div className="w-full lg:w-3/10 flex justify-center">
              <GrungeImageMask 
                className="w-48 h-48 lg:w-76 lg:h-76"
                withGlow={true}
                glowColor="rgba(255, 165, 0, 0.4)"
                glowOpacity={0.3}
              >
                <img 
                  src={raidScheduleImage}
                  alt="Raid Schedule"
                  className="w-full h-full object-cover scale-110 translate-y-10"
                />
              </GrungeImageMask>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DiscordWidget serverId="1318998593960673300" />
        
        <div className="card bg-gray-900/80 backdrop-blur-sm border-gray-700/50 group hover:bg-zinc-800/70 transition-all duration-200">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-gray-300">{t('dashboard.nextEvent')}</h3>
            <span className="text-blue-500 text-xl">
              {nextEvent?.type === 'alliance' ? '☀️' : '⚔️'}
            </span>
          </div>
          {nextEvent ? (
            <>
              <p className="text-xl font-bold text-white mb-1">{nextEvent.time}</p>
              <p className="text-sm text-gray-400 mb-1">{nextEvent.day}</p>
              <p className="text-sm text-blue-400">{nextEvent.name}</p>
            </>
          ) : (
            <p className="text-lg text-gray-400">{t('events.noUpcomingEvents')}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;