import { useQuery } from 'react-query';

import { axiosInstance } from '@/axios';
import { GET_PLAYER_DATA, GET_TEAM_DATA } from '@/constants/apiUrl';
import { PLAYER_DATA, TEAM } from '@/constants/reactQueryKey';
import { IGetPlayerData, IGetTeamData } from '@/types/apiTypes';

export const useGetTeamQuery = ({ teamId, tab }: IGetTeamData) =>
  useQuery(
    [TEAM, tab, teamId],
    () =>
      axiosInstance
        .get(`${GET_TEAM_DATA}&id=${teamId}&tab=${tab}&timeZone=Asia/Tokyo`)
        .then((res) => res.data),
    {
      refetchOnWindowFocus: false,
    }
  );

export const useGetPlayerDataQuery = ({ playerId }: IGetPlayerData) =>
  useQuery(
    [PLAYER_DATA, playerId],
    () =>
      axiosInstance
        .get(`${GET_PLAYER_DATA}?id=${playerId}`)
        .then((res) => res.data),
    {
      refetchOnWindowFocus: false,
    }
  );
