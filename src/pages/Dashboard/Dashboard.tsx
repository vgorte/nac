import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import type { FC } from 'react';
import DiscordWidget from '../../components/common/DiscordWidget';
// Background images removed

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
        <div className="bg-zinc-800/60 backdrop-blur-sm rounded-xl p-6 border border-zinc-700/50">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <h3 className="text-xl font-bold text-white">{t('dashboard.raidSchedule')} - HARDCODED EXAMPLE</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">{t('dashboard.allianceRaids')}</span>
              <span className="text-white font-semibold">{t('dashboard.allianceSchedule')}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">{t('dashboard.guildRaids')}</span>
              <span className="text-white font-semibold">{t('dashboard.guildSchedule')}</span>
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