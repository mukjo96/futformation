import { useEffect, useState } from 'react';

import { useTeamRecoilValue } from './useTeamRecoil';

export const useTeamTableData = (allTable: any[] | undefined) => {
  const { teamId } = useTeamRecoilValue();

  const [teamRank, setTeamRank] = useState(-1);

  useEffect(() => {
    function findTeamRank() {
      allTable?.forEach((team, index) => {
        if (team.id === teamId) {
          setTeamRank(index);
        }
      });
    }
    if (allTable) {
      findTeamRank();
    }
  }, [allTable, teamId]);

  const isLoading = teamRank === -1 || !allTable;

  return { teamRank, isLoading };
};
