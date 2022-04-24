import { IPlayerTypes } from './playerTypes';

export interface IGetTeamData {
  teamId: number;
  tab: 'overview' | 'news' | 'fixtures' | 'squad' | 'overview';
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
