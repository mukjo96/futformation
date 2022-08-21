import { useEffect, useState } from 'react';

import { useRecoilState } from 'recoil';

import { teamState } from '@/store/team';

export const useTeamRecoilState = () => {
  const [isInitial, setIsInitial] = useState(true);
  const [team, setTeam] = useRecoilState(teamState);

  useEffect(() => {
    setIsInitial(false);
  }, []);

  return [isInitial === true ? {} : team, setTeam] as const;
};
