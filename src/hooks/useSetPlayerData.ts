import { useCallback } from 'react';

export const useSetPlayerData = (playerData: Record<string, any>) => {
  const propDataToObject = useCallback(() => {
    const virPropData: Record<string, any> = {};
    playerData.playerProps?.forEach((props: any) => {
      if (props.title === 'Country') {
        virPropData[props.title] = props.icon.id.toLowerCase();
      } else {
        virPropData[props.title] = props.value;
      }
    });
    return virPropData;
  }, [playerData]);

  const statDataToObject = useCallback(() => {
    const virStatData: Record<string, any> = {};
    const statData: Record<string, any> = {};
    if (playerData.careerStatistics) {
      playerData?.careerStatistics[0].seasons[0].stats[0].statsArr?.forEach(
        (props: any) => {
          const [key, value] = props;
          statData[key] = value;
        }
      );
      virStatData.conversion = Math.floor(
        (statData.Goals /
          (statData['Shots on target'] + statData['Shots off target'])) *
          100
      );
      virStatData.dribbles = Math.floor(
        (statData['Successful dribbles'] / statData['Attempted dribbles']) * 100
      );
      virStatData.tackles = Math.floor(
        (statData['Successful tackles'] / statData['Attempted tackles']) * 100
      );
      virStatData['Matches started'] =
        playerData.careerStatistics[0].seasons[0].matches -
        playerData.careerStatistics[0].seasons[0].subIn;
    }
    return { ...statData, ...virStatData };
  }, [playerData]);

  return { propDataToObject, statDataToObject };
};
