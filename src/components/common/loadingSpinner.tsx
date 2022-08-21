import React from 'react';

import { LoadingOutlined } from '@ant-design/icons';

import { useTeamRecoilValue } from '@/hooks/useTeamRecoil';

const LoadingSpinner = () => {
  const team = useTeamRecoilValue();
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
