import { atom } from 'recoil';

export const teamState = atom({
  key: 'teamState',
  default: {
    teamId: 8456,
    teamNameLong: 'Manchester City',
    teamName: 'MNC',
    teamColor: '#6CABDD',
    teamSubColor: '#1C2C5B',
  },
});
