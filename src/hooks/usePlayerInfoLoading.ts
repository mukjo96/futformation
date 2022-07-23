import { useEffect, useState } from 'react';

import { checkEmptyObject } from '@/utils/object';

import { useSetPlayerData } from './useSetPlayerData';

export const usePlayerInfoData = (playerData: Record<string, any>) => {
  const [isLoading, setIsLoading] = useState(true);
  const [statData, setStatData] = useState<Record<string, any>>({});
  const [propData, setPropData] = useState<Record<string, any>>({});

  const { propDataToObject, statDataToObject } = useSetPlayerData(playerData);

  useEffect(() => {
    if (!checkEmptyObject(playerData)) {
      const newPropData = propDataToObject();
      const newStatData = statDataToObject();
      setPropData(newPropData);
      setStatData(newStatData);
      setIsLoading(false);
    }
  }, [playerData, propDataToObject, statDataToObject]);

  useEffect(() => {
    if (
      !checkEmptyObject(playerData) &&
      !checkEmptyObject(propData) &&
      !checkEmptyObject(statData)
    ) {
      setIsLoading(false);
    }
  }, [playerData, propData, statData]);

  return { isLoading, statData, propData };
};
