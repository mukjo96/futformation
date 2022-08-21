import { useEffect, useState } from 'react';

import { IPlayerListDataTypes } from '@/types/apiTypes';
import { IPlayerTypes } from '@/types/playerTypes';

import { useTeamRecoilValue } from './useTeamRecoil';

export const useTeamPlayers = (players: IPlayerListDataTypes[]) => {
  const team = useTeamRecoilValue();

  const [selectedId, setSelectedId] = useState(0);

  useEffect(() => {
    setSelectedId(0);
  }, [team]);

  const handlePlayerSelect = (id: number) => {
    setSelectedId(id);
  };

  const teamPlayers =
    players
      ?.filter((item) => item[0] !== 'coach')
      ?.flatMap((item) => {
        return item[1].map((player: IPlayerTypes) => ({
          id: player.id,
          name: player.name,
          role: player.role,
        }));
      }) ?? [];

  return { team, selectedId, handlePlayerSelect, teamPlayers };
};
