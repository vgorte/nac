export interface Member {
  id: string;
  discordUsername: string;
  accountName: string;
  rank: 'Leader' | 'Officer' | 'Veteran' | 'Ninja';
  joinDate: string;
}

export interface WvWStats {
  kills: number;
  deaths: number;
  assists: number;
  rank: number;
  worldRank: number;
}

export interface GuildBankItem {
  id: string;
  name: string;
  quantity: number;
  category: string;
}

export interface TacticsEntry {
  id: string;
  date: string;
  title: string;
  content: string;
  author: string;
}

export interface SiegeWeapon {
  id: string;
  type: string;
  location: string;
  status: 'Active' | 'Destroyed' | 'Building';
  owner: string;
}

export interface Decoration {
  id: string;
  name: string;
  location: string;
  category: string;
  addedBy: string;
  addedDate: string;
}