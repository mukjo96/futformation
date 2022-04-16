import { useQuery } from 'react-query';

import { axiosInstance } from '@/axios';
import { GET_TEAM_DATA } from '@/constants/apiUrl';
import { TEAM } from '@/constants/reactQueryKey';
import { IGetTeamData } from '@/types/apiTypes';

export const useGetTeamQuery = ({ teamId, tab }: IGetTeamData) =>
  useQuery([TEAM, tab, teamId], () =>
    axiosInstance.get(`${GET_TEAM_DATA}&id=${teamId}&tab=${tab}`)
  );
