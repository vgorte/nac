import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { fetchMemberList } from '../../services/memberService';

interface Member {
  discordLink: string;
  discordName: string;
  accountName: string;
  rank: string;
  entryDate: string;
}

const MemberList: React.FC = () => {
  const { t } = useTranslation();
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sortField, setSortField] = useState<keyof Member>('entryDate');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const loadMembers = async () => {
      try {
        setLoading(true);
        const memberData = await fetchMemberList();
        setMembers(memberData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    loadMembers();
  }, []);

  const handleSort = (field: keyof Member) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const getRankPriority = (rank: string): number => {
    const priorities: Record<string, number> = {
      'Anführer': 1,
      'Offizier': 2,
      'Veteran': 3,
      'Ninja': 4,
      'Zweitaccount': 5
    };
    return priorities[rank] || 6;
  };

  const sortedMembers = [...members]
    .filter(member => 
      member.discordName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.accountName.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      let aValue: string | number | Date = a[sortField];
      let bValue: string | number | Date = b[sortField];

      if (sortField === 'rank') {
        aValue = getRankPriority(a.rank);
        bValue = getRankPriority(b.rank);
      } else if (sortField === 'entryDate') {
        aValue = new Date(a.entryDate.split(' ')[0].split('.').reverse().join('-'));
        bValue = new Date(b.entryDate.split(' ')[0].split('.').reverse().join('-'));
      }

      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

  const getRankColor = (rank: string): string => {
    const colors: Record<string, string> = {
      'Anführer': 'text-red-400 bg-red-900/20',
      'Offizier': 'text-purple-400 bg-purple-900/20',
      'Veteran': 'text-blue-400 bg-blue-900/20',
      'Ninja': 'text-green-400 bg-green-900/20',
      'Zweitaccount': 'text-gray-400 bg-gray-900/20'
    };
    return colors[rank] || 'text-gray-400 bg-gray-900/20';
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-300">{t('memberList.loading')}</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="bg-red-900/20 border border-red-500/20 rounded-lg p-6">
            <h3 className="text-red-400 text-lg font-medium mb-2">{t('memberList.error')}</h3>
            <p className="text-gray-300">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-orange-400 mb-4">{t('memberList.title')}</h1>
          <p className="text-gray-300 text-lg">{t('memberList.description')}</p>
        </div>

        {/* Search and Stats */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-orange-500/20 p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex-1 max-w-md">
              <label htmlFor="search" className="block text-sm font-medium text-gray-300 mb-2">
                {t('memberList.search')}
              </label>
              <input
                type="text"
                id="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                placeholder={t('memberList.searchPlaceholder')}
              />
            </div>
            <div className="text-right">
              <p className="text-gray-300">
                {t('memberList.totalMembers', { count: sortedMembers.length })}
              </p>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-orange-500/20 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-900/50">
                <tr>
                  <th 
                    className="px-6 py-4 text-left text-sm font-medium text-orange-400 cursor-pointer hover:bg-gray-800/50 transition-colors"
                    onClick={() => handleSort('discordName')}
                  >
                    <div className="flex items-center gap-2">
                      {t('memberList.columns.discord')}
                      {sortField === 'discordName' && (
                        <span className="text-xs">
                          {sortDirection === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </th>
                  <th 
                    className="px-6 py-4 text-left text-sm font-medium text-orange-400 cursor-pointer hover:bg-gray-800/50 transition-colors"
                    onClick={() => handleSort('accountName')}
                  >
                    <div className="flex items-center gap-2">
                      {t('memberList.columns.accountName')}
                      {sortField === 'accountName' && (
                        <span className="text-xs">
                          {sortDirection === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </th>
                  <th 
                    className="px-6 py-4 text-left text-sm font-medium text-orange-400 cursor-pointer hover:bg-gray-800/50 transition-colors"
                    onClick={() => handleSort('rank')}
                  >
                    <div className="flex items-center gap-2">
                      {t('memberList.columns.rank')}
                      {sortField === 'rank' && (
                        <span className="text-xs">
                          {sortDirection === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </th>
                  <th 
                    className="px-6 py-4 text-left text-sm font-medium text-orange-400 cursor-pointer hover:bg-gray-800/50 transition-colors"
                    onClick={() => handleSort('entryDate')}
                  >
                    <div className="flex items-center gap-2">
                      {t('memberList.columns.entryDate')}
                      {sortField === 'entryDate' && (
                        <span className="text-xs">
                          {sortDirection === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {sortedMembers.map((member, index) => (
                  <tr key={`${member.accountName}-${index}`} className="hover:bg-gray-800/30 transition-colors">
                    <td className="px-6 py-4 text-gray-300">
                      {member.discordName || <span className="text-gray-500">-</span>}
                    </td>
                    <td className="px-6 py-4 text-gray-300 font-mono text-sm">
                      {member.accountName}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getRankColor(member.rank)}`}>
                        {t(`memberList.ranks.${member.rank.toLowerCase()}`, { defaultValue: member.rank })}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-300 text-sm">
                      {member.entryDate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {sortedMembers.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <p className="text-gray-400">{t('memberList.noResults')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MemberList;