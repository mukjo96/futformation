import { IPlayerTypes } from './playerTypes';

export interface IGetTeamData {
  teamId: number;
  tab: 'overview' | 'news' | 'fixtures' | 'squad' | 'overview';
}
export interface IGetPlayerData {
  playerId: number;
}

export interface IMatchListTypes {
  fixtures: IFixture[];
  nextMatch: IFixture;
}

export interface IFixture {
  id: number;
  pageUrl: string;
  opponent: {
    id: number;
    name: string;
    score: number;
  };
  home: {
    id: number;
    name: string;
    score: number;
  };
  away: {
    id: number;
    name: string;
    score: number;
  };
  displayTournament: boolean;
  lnameArr: string[];
  color: string;
  notStarted: boolean;
  tournament: {
    name: string;
    leagueId: number;
  };
  status: {
    startTimeStr?: string;
    finished: boolean;
    started: boolean;
    cancelled: boolean;
    scoreStr: string;
    startDateStr: string;
    startDateStrShort: string;
    liveTime?: {
      short: string;
      long: string;
    };
    reason: {
      short: string;
      long: string;
    };
  };
}

export interface INewsData {
  imageUrl: string;
  title: string;
  sourceStr: string;
  lead: string;
  sourceIconUrl: string;
  page: {
    url: string;
  };
}

export type IPlayerListDataTypes = [string, Array<IPlayerTypes>];

export type IPlayerStatDataTypes = [ITopPlayersDataTypes, ITableDataTypes];

export type ITopPlayersDataTypes = {
  byRating: { players: Array<IStatPlayer>; seeAllLink?: 'string' };
  byGoals: { players: Array<IStatPlayer>; seeAllLink?: 'string' };
  byAssists: { players: Array<IStatPlayer>; seeAllLink?: 'string' };
};

export type ITableDataTypes = {
  ccode: string;
  composite: boolean;
  leagueId: number;
  leagueName: string;
  legend: any[];
  nextOpponent: object;
  pageUrl: string;
  table: { all: any[]; home: any[]; away: any[] };
  tableHeader: { staticTableHeaders: any[]; dynamicTableHeaders: any[] };
  teamForm: object;
}[];

export type IStatPlayer = {
  id: number;
  name: string;
  goals: number;
  assists: number;
  rating: number;
  positionId: number;
  ccode: string;
  cname: string;
  teamId: number;
  teamName: number;
  showRole: boolean;
  showCountryFlag: boolean;
  showTeamFlag: boolean;
};
