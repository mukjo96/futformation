import React, { useState } from 'react';

import { SelectOutlined } from '@ant-design/icons';
import { Col, List, Avatar, Result, Skeleton, Row } from 'antd';
import { useTranslation } from 'next-i18next';
import { useRecoilState } from 'recoil';

import BlockTitle from '@/components/common/Title/blockTitle';
import { teamState } from '@/store/team';
import { IPlayerListDataTypes } from '@/types/apiTypes';
import { IPlayerTypes } from '@/types/playerTypes';

import PlayerInfo from './playerInfo';

type PropTypes = {
  dataList: IPlayerListDataTypes[];
};
const TeamPlayers = ({ dataList }: PropTypes) => {
  const { t } = useTranslation('common');

  const [team] = useRecoilState(teamState);
  const [selectedId, setSelectedId] = useState(0);

  const data =
    dataList
      ?.filter((players) => players[0] !== 'coach')
      ?.flatMap((players) => {
        return players[1].map((player: IPlayerTypes) => ({
          id: player.id,
          name: player.name,
          role: player.role,
        }));
      }) ?? [];

  return (
    <div className="relative">
      <div className="p-[4vw] md:p-7 ">
        <BlockTitle
          title="PLAYERS"
          link="players"
          theme="light"
          teamName={team.teamName}
        />
      </div>
      <Row>
        <Col xs={24} md={18} className="h-full" style={{ alignSelf: 'center' }}>
          {selectedId === 0 ? (
            <Result
              icon={<SelectOutlined style={{ color: team.teamColor }} />}
              title={t('Select your player!')}
            />
          ) : (
            <PlayerInfo id={selectedId} />
            // <LoadingSpinner />
            // <div />
          )}
        </Col>
        <Col className="h-[393px] overflow-auto" xs={24} md={6}>
          <List
            dataSource={
              data.length > 0
                ? data.reverse()
                : Array.from({ length: 9 }, (_, i) => ({
                    id: i,
                    name: 'none',
                    role: 'none',
                  }))
            }
            size="large"
            renderItem={(item, index) =>
              item.name !== 'none' ? (
                <List.Item
                  style={{
                    backgroundColor:
                      selectedId === item.id
                        ? `${team.teamColor}19`
                        : undefined,
                  }}
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                >
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        size={48}
                        shape="square"
                        src={`https://images.fotmob.com/image_resources/playerimages/${item.id}.png`}
                      />
                    }
                    title={
                      <Col>
                        <h3 className="m-0 text-[14px]">{item.name}</h3>
                        <h5 className="m-0 text-[10px] text-gray-600">
                          {item.role === 'goalkeepers'
                            ? t('Goalkeeper')
                            : item.role === 'defenders'
                            ? t('Defender')
                            : item.role === 'midfielders'
                            ? t('Midfielder')
                            : t('Forward')}
                        </h5>
                      </Col>
                    }
                  />
                </List.Item>
              ) : (
                <List.Item key={index}>
                  <Skeleton
                    avatar
                    paragraph={{ rows: 2 }}
                    title={false}
                    active
                  />
                </List.Item>
              )
            }
          ></List>
        </Col>
      </Row>
    </div>
  );
};

export default TeamPlayers;
