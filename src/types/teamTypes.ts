export interface ITeam {
  teamId: number;
  teamNameLong: string;
  teamName: string;
  teamColor: string;
  teamSubColor: string;
}

export interface ITeamList {
  label: string;
  leagueId: number;
  children: Array<any>;
}
