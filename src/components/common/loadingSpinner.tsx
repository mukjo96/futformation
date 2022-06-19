import React from 'react';

import { LoadingOutlined } from '@ant-design/icons';
import { useRecoilValue } from 'recoil';

import { teamState } from '@/store/team';

const LoadingSpinner = () => {
  const team = useRecoilValue(teamState);

  return (
    <div className="flex w-full items-center justify-center">
      <LoadingOutlined
        // className="my-[10vw] mx-auto self-center justify-self-center"
        style={{
          fontSize: '5vw',
          color: team.teamColor,
        }}
      />
    </div>
  );
};

export default LoadingSpinner;
