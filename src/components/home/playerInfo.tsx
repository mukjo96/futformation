import React, { useEffect, useState } from 'react';

import { Col, Avatar, Result, Row, Divider } from 'antd';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import { useGetPlayerDataQuery } from '@/api/getTeamData';
import { usePlayerInfoData } from '@/hooks/usePlayerInfoLoading';
import { useTeamRecoilValue } from '@/hooks/useTeamRecoil';

import MoreButton from '../common/button/moreButton';
import LoadingSpinner from '../common/loadingSpinner';

const PlayerInfo = ({ id }: { id: number }) => {
  const [playerData, setPlayerData] = useState<Record<string, any>>({});

  const team = useTeamRecoilValue();
  const { teamColor } = team;

  const { t } = useTranslation('common');
  const { data } = useGetPlayerDataQuery({ playerId: id });

  const { isLoading, statData, propData } = usePlayerInfoData(playerData);

  useEffect(() => {
    if (id !== 0 && data) {
      setPlayerData(data);
    }
  }, [id, data]);

  if (isLoading) {
    return (
      <Col span={24} style={{ textAlign: 'center' }}>
        <LoadingSpinner />
      </Col>
    );
  }
  return (
    <Row className="self-center" style={{ backgroundColor: `${teamColor}19` }}>
      <Col className="px-[10%] py-[5%]" xs={24} md={12}>
        <div className="flex">
          <span className={`text-[${teamColor}] mt-1`}>#</span>
          <span className="mt-0 text-3xl">{propData.Shirt}</span>
        </div>
        <h2 className="m-0 text-3xl font-bold">{playerData.name}</h2>
        <h5>{playerData.origin?.positionDesc.primaryPosition}</h5>
        <Avatar
          style={{ margin: '16px 0' }}
          src={`https://images.fotmob.com/image_resources/logo/teamlogo/${propData.Country}.png`}
          size={64}
        />
        <Link href={`players/${playerData.id}`}>
          <a style={{ textDecoration: 'none' }}>
            <MoreButton value="More" size="medium" />
          </a>
        </Link>
      </Col>
      {playerData.careerStatistics ? (
        <Col className="h-[393px] px-[10%] py-[5%]" xs={24} md={12}>
          <h3 className="mb-4 text-sm font-semibold">{`${
            playerData.careerStatistics[0].seasons[0].name
          } ${t('STATS')}`}</h3>
          <PlayerStat
            title={t('Games Played')}
            data={playerData.careerStatistics[0].seasons[0].matches}
          />
          <PlayerStat
            title={t('Minutes Played')}
            data={statData['Minutes played']}
          />
          <PlayerStat
            title={t('Starting XI')}
            data={statData['Matches started']}
          />
          <PlayerStat title={t('Goals')} data={statData.Goals} />
          <PlayerStat title={t('Assists')} data={statData.Assists} />
          <Row className="mt-6 justify-between">
            <CircularStat
              value={statData.conversion}
              text={statData.conversion}
              title={t('Conversion')}
              teamColor={teamColor}
            />
            <CircularStat
              value={statData.dribbles}
              text={statData.dribbles}
              title={t('Dribbles')}
              teamColor={teamColor}
            />
            <CircularStat
              value={statData.tackles}
              text={statData.tackles}
              title={t('Tackles')}
              teamColor={teamColor}
            />
          </Row>
        </Col>
      ) : (
        <Col
          className="flex h-[393px] content-center items-center"
          xs={24}
          md={12}
        >
          <Result status="error" title={t('Sorry, no data!')} />
        </Col>
      )}
    </Row>
  );
};

export default PlayerInfo;

const PlayerStat = ({ title, data }: { title: string; data: number }) => {
  return (
    <>
      <div className="flex justify-between" key={title}>
        <span className="text-xs text-gray-700">{title}</span>
        <span className="text-xs font-bold">{data || 0}</span>
      </div>
      <Divider style={{ margin: '8px 0' }} />
    </>
  );
};

const CircularStat = ({
  value,
  text,
  title,
  teamColor,
}: {
  value: number;
  text: number;
  title: string;
  teamColor: string;
}) => {
  return (
    <Col className="text-center" xs={4} md={6}>
      <CircularProgressbar
        value={value || 0}
        text={text ? `${text}%` : '0%'}
        strokeWidth={4}
        styles={buildStyles({
          // Text size
          textSize: '26px',

          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 0.5,

          // Colors
          textColor: 'black',
          trailColor: '#d6d6d6',
          pathColor: teamColor,
        })}
      />
      <span className="text-[10px] text-gray-700">{title}</span>
    </Col>
  );
};
