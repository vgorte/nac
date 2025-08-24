import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import type { FC } from 'react';

interface DiscordWidgetProps {
  serverId?: string;
}

interface DiscordData {
  memberCount: number;
  onlineCount: number;
  serverName: string;
}

interface DiscordMember {
  status: 'online' | 'idle' | 'dnd' | 'offline';
  username: string;
  id: string;
}

interface DiscordWidgetResponse {
  presence_count?: number;
  members?: DiscordMember[];
  name?: string;
}

const DiscordWidget: FC<DiscordWidgetProps> = ({ serverId }) => {
  const { t } = useTranslation();
  const [discordData, setDiscordData] = useState<DiscordData>({
    memberCount: 0, // Placeholder
    onlineCount: 0,  // Placeholder
    serverName: 'Ninja Asura Club'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [usingInviteAPI, setUsingInviteAPI] = useState(false);

  useEffect(() => {
    const fetchDiscordData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        if (serverId) {
          const widgetResponse = await fetch(`https://discord.com/api/guilds/${serverId}/widget.json`);
          
          if (widgetResponse.ok) {
            const data: DiscordWidgetResponse = await widgetResponse.json();
            console.log(data)
            setDiscordData({
              memberCount: data.presence_count || 0,
              onlineCount: data.members?.filter(member => member.status === 'online' || member.status === 'idle' || member.status === 'dnd').length || 0,
              serverName: data.name || 'Ninja Asura Club'
            });
            setUsingInviteAPI(false);
            return;
          }
        }
        
        // Fallback: Try invite API for basic info
        setUsingInviteAPI(true);
        const inviteResponse = await fetch('https://discord.com/api/v10/invites/FTPDBQfG4t?with_counts=true');
        
        if (!inviteResponse.ok) {
          throw new Error('Unable to fetch Discord server information');
        }
        
        const inviteData = await inviteResponse.json();
        
        setDiscordData({
          memberCount: inviteData.approximate_member_count || 0,
          onlineCount: inviteData.approximate_presence_count || 0,
          serverName: inviteData.guild?.name || 'Ninja Asura Club'
        });
        
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch Discord data');
        console.error('Discord API error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDiscordData();
    
    // Refresh every 2 minutes (invite API has rate limits)
    const interval = setInterval(fetchDiscordData, 120000);
    
    return () => clearInterval(interval);
  }, [serverId]);

  return (
    <div className="bg-zinc-800/60 backdrop-blur-sm rounded-xl p-6 border border-zinc-700/50">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <h3 className="text-xl font-bold text-white">{t('discord.serverTitle')}</h3>
        </div>
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      </div>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-400">{t(usingInviteAPI ? 'discord.totalMembersApprox' : 'discord.totalMembers')}</span>
          <span className="text-white font-semibold">
            {loading ? (
              <div className="w-6 h-4 bg-zinc-600 animate-pulse rounded"></div>
            ) : (
              discordData.memberCount
            )}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400">{t(usingInviteAPI ? 'discord.onlineNowApprox' : 'discord.onlineNow')}</span>
          <span className="text-green-400 font-semibold">
            {loading ? (
              <div className="w-6 h-4 bg-zinc-600 animate-pulse rounded"></div>
            ) : (
              discordData.onlineCount
            )}
          </span>
        </div>
        
        {error && (
          <div className="text-red-400 text-sm mb-2">{error}</div>
        )}
        
        <a 
          href="https://discord.gg/FTPDBQfG4t" 
          className="btn-primary w-full text-center mt-4 inline-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('discord.joinDiscord')}
        </a>
      </div>
    </div>
  );
};

export default DiscordWidget;