import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const localStorage =
  typeof window !== `undefined` ? window.localStorage : undefined;

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: localStorage,
});

export const DEFAULT_TEAM_STATE = {
  teamId: 8456,
  teamNameLong: 'Manchester City',
  teamName: 'MNC',
  teamColor: '#6CABDD',
  teamSubColor: '#1C2C5B',
};

export const teamState = atom({
  key: 'teamState',
  default: DEFAULT_TEAM_STATE,
  effects_UNSTABLE: [persistAtom],
});

export const initialLoading = atom({
  key: 'initialLoading',
  default: true,
});
