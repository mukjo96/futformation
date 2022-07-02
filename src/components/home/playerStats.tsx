import React, { Fragment } from 'react';

import { Row, Col, Avatar, List, Empty, Skeleton, Divider } from 'antd';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';

import { useTeamTableData } from '@/hooks/useTeamTableData';
import { teamState } from '@/store/team';
import { IPlayerStatDataTypes, IStatPlayer } from '@/types/apiTypes';

import BlockTitle from '../common/Title/blockTitle';

type PropTypes = {
  statList: IPlayerStatDataTypes;
};

const PlayerStats = ({ statList }: PropTypes) => {
  const statData = statList && statList[0];
  const tableData = statList && statList[1];
  const allTable = tableData && tableData[0]?.table && tableData[0]?.table?.all;

  const team = useRecoilValue(teamState);
  const { teamColor, teamId } = team;
  const { t } = useTranslation('common');

  const { isLoading, teamRank } = useTeamTableData(allTable);

  const renderBlankStatList = (category: 'Ratings' | 'Goals' | 'Assists') => {
    return (
      <Col className="pt-4 md:pl-8" xs={0} md={6}>
        <span className="m-0 text-xs text-gray-700">{t(category)}</span>
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          style={{ margin: '25% 0' }}
        />
      </Col>
    );
  };

  const renderStatList = (
    listData: Array<IStatPlayer>,
    category: 'Ratings' | 'Goals' | 'Assists'
  ) => {
    const { id, name, rating, goals, assists } = listData[0] ?? {
      id: null,
      name: null,
      rating: null,
      goals: null,
      assists: null,
    };
    return (
      <Col className="pt-4 md:pl-8" xs={24} md={6}>
        <Link href={`/players/${id}`} passHref>
          <Row justify="space-between" className="cursor-pointer">
            <Col>
              <span className="m-0 text-xs text-gray-700">{t(category)}</span>
              <h5 className={`text-sm font-bold m-0 hover:text-[${teamColor}]`}>
                {name}
              </h5>
              <span className={`text-lg font-semibold text-[${teamColor}]`}>
                {category === 'Ratings'
                  ? rating
                  : category === 'Goals'
                  ? goals
                  : assists}
              </span>
            </Col>
            <Avatar
              size={70}
              shape="square"
              src={`https://images.fotmob.com/image_resources/playerimages/${id}.png`}
            />
          </Row>
        </Link>
        <Divider style={{ margin: 0 }} />
        {listData.slice(1, 4).map((player) => {
          return (
            <Fragment key={player.id}>
              <Link href={`/players/${player.id}`} passHref>
                <div className="flex cursor-pointer justify-between border-r-0 py-3 px-[5vw] md:border-r md:pl-8 md:pr-0">
                  <span className={`text-xs hover:text-[${teamColor}]`}>
                    {player.name}
                  </span>
                  <span className={`text-sm font-bold text-[${teamColor}]`}>
                    {category === 'Ratings'
                      ? player.rating
                      : category === 'Goals'
                      ? player.goals
                      : player.assists}
                  </span>
                </div>
              </Link>
              <Divider style={{ margin: 0 }} />
            </Fragment>
          );
        })}
      </Col>
    );
  };

  if (isLoading) {
    return (
      <div className="p-[4vw] md:p-7">
        <BlockTitle
          title="PLAYER STATS"
          link="players"
          linkText="player stats"
          theme="light"
        />

        <Row>
          {Array.from({ length: 4 }, (_, i) => i).map((_) => (
            <Col
              className="self-center pt-4 pl-0 md:pl-4"
              xs={24}
              md={6}
              key={_}
            >
              <Skeleton active />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
  const tableStart = teamRank < 3 ? 0 : teamRank - 2;
  const tableEnd = allTable?.length
    ? tableStart < 3
      ? tableStart + 5
      : teamRank > allTable.length - 4
      ? allTable.length
      : teamRank + 3
    : 0;
  return (
    <>
      <div className="p-[4vw] md:p-7">
        <BlockTitle
          title="PLAYER STATS"
          link="players"
          linkText="player stats"
          theme="light"
        />

        <Row>
          {statData.byRating.players.length +
            statData.byGoals.players.length +
            statData.byAssists.players.length !==
          0 ? (
            <>
              {statData.byRating.players.length !== 0
                ? renderStatList(statData.byRating.players, 'Ratings')
                : renderBlankStatList('Ratings')}
              {statData.byGoals.players.length !== 0
                ? renderStatList(statData.byGoals.players, 'Goals')
                : renderBlankStatList('Goals')}
              {statData.byAssists.players.length !== 0
                ? renderStatList(statData.byAssists.players, 'Assists')
                : renderBlankStatList('Assists')}
            </>
          ) : (
            <Col className="self-center pt-4 pl-0 md:pl-4" xs={0} md={18}>
              <Empty description={t('No Player Stats')} />
            </Col>
          )}

          <Col className="self-center pt-4 pl-0 md:pl-4" xs={24} md={6}>
            <List
              size="small"
              style={{
                textAlign: 'center',
                fontSize: '12px',
              }}
            >
              <List.Item className="p-2">
                <Col span={2}>#</Col>
                <Col span={11}>{t('TEAM')}</Col>
                <Col span={2}>{t('W')}</Col>
                <Col span={2}>{t('D')}</Col>
                <Col span={2}>{t('L')}</Col>
                <Col span={3}>{t('PT')}</Col>
              </List.Item>
              {allTable?.slice(tableStart, tableEnd).map((tableTeam) => (
                <List.Item
                  key={tableTeam.id}
                  className="p-2"
                  style={{
                    backgroundColor:
                      tableTeam.id === teamId ? `${teamColor}19` : '',
                  }}
                >
                  <Col span={2}>{tableTeam.idx}</Col>
                  <Col span={11}>{tableTeam.name}</Col>

                  <Col span={2}>{tableTeam.wins}</Col>
                  <Col span={2}>{tableTeam.draws}</Col>
                  <Col span={2}>{tableTeam.losses}</Col>
                  <Col span={3}>
                    <strong>{tableTeam.pts}</strong>
                  </Col>
                </List.Item>
              ))}
            </List>
            <Row justify="end">
              <Link href="/table" passHref>
                <span className="text-end m-0 cursor-pointer text-[10px] text-gray-700 hover:underline">{`${t(
                  'View all table'
                )} +`}</span>
              </Link>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default PlayerStats;
