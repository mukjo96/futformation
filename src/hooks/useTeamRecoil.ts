import { useEffect } from 'react';

import { useRecoilState, useRecoilValue } from 'recoil';

import { initialLoading, teamState } from '@/store/team';

export const useTeamRecoilState = () => {
  const [isInitial, setIsInitial] = useRecoilState(initialLoading);
  const [team, setTeam] = useRecoilState(teamState);

  useEffect(() => {
    if (isInitial) {
      setIsInitial(false);
    }
  }, [isInitial, setIsInitial]);

  return [isInitial === true ? {} : team, setTeam] as const;
};

export const useTeamRecoilValue = () => {
  const [isInitial, setIsInitial] = useRecoilState(initialLoading);
  const team = useRecoilValue(teamState);

  useEffect(() => {
    if (isInitial) {
      setIsInitial(false);
    }
  }, [isInitial, setIsInitial]);

  return isInitial === true ? {} : team;
};
