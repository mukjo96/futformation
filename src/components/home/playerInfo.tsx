import React, { useEffect, useState } from 'react';

import { Col, Avatar, Result, Row, Divider } from 'antd';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useRecoilValue } from 'recoil';

import { useGetPlayerDataQuery } from '@/api/getTeamData';
import { useSetPlayerData } from '@/hooks/useSetPlayerData';
import { teamState } from '@/store/team';
import { checkEmptyObject } from '@/utils/object';

import MoreButton from '../common/button/moreButton';
import LoadingSpinner from '../common/loadingSpinner';

const PlayerInfo = ({ id }: { id: number }) => {
  const [playerData, setPlayerData] = useState<Record<string, any>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [statData, setStatData] = useState<Record<string, any>>({});
  const [propData, setPropData] = useState<Record<string, any>>({});
  const team = useRecoilValue(teamState);
  const { teamColor } = team;

  const { t } = useTranslation('common');
  const { data } = useGetPlayerDataQuery({ playerId: id });

  const { propDataToObject, statDataToObject } = useSetPlayerData(playerData);

  useEffect(() => {
    if (id !== 0 && data) {
      setPlayerData(data);
    }
  }, [id, data]);

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
          {renderStat(
            t('Games Played'),
            playerData.careerStatistics[0].seasons[0].matches
          )}
          {renderStat(t('Minutes Played'), statData['Minutes played'])}
          {renderStat(t('Starting XI'), statData['Matches started'])}
          {renderStat(t('Goals'), statData.Goals)}
          {renderStat(t('Assists'), statData.Assists)}
          <Row className="mt-6 justify-between">
            {renderCircular(
              statData.conversion,
              statData.conversion,
              t('Conversion'),
              teamColor
            )}
            {renderCircular(
              statData.dribbles,
              statData.dribbles,
              t('Dribbles'),
              teamColor
            )}
            {renderCircular(
              statData.tackles,
              statData.tackles,
              t('Tackles'),
              teamColor
            )}
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

const renderStat = (title: string, data: number) => {
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

const renderCircular = (
  value: number,
  text: number,
  title: string,
  teamColor: string
) => {
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
