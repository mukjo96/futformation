import React, { ReactNode } from 'react';

import { Row, Col, Divider, Skeleton } from 'antd';
import { I18n, TFunction, useTranslation } from 'next-i18next';
import Link from 'next/link';

import MoreButton from '@/components/common/button/moreButton';
import BlockTitle from '@/components/common/Title/blockTitle';
import { IFixture, IMatchListTypes } from '@/types/apiTypes';
import { translateShortDateToKorean } from '@/utils/formatDate';

type PropTypes = {
  matchList: IMatchListTypes;
  teamId: number;
};

const MatchSchedule = ({ matchList, teamId }: PropTypes) => {
  const { t, i18n } = useTranslation('common');
  const beforeFixtures = matchList?.fixtures
    ?.filter((item) => item?.status?.finished || item?.status?.cancelled)
    ?.slice(-3);
  const nextFixture = matchList?.nextMatch;

  return (
    <div className="p-[4vw] md:p-7">
      <Col>
        <Col>
          <BlockTitle title="MATCH SCHEDULE" link="matches" theme="light" />
        </Col>

        {matchList ? (
          <Row>
            {beforeFixtures?.map((match: IFixture) => (
              <MatchScheduleCard
                key={match.id}
                match={match}
                isPast
                teamId={teamId}
                t={t}
                i18n={i18n}
              />
            ))}
            {nextFixture && (
              <MatchScheduleCard
                key={nextFixture?.id}
                match={nextFixture}
                isPast={false}
                teamId={teamId}
                t={t}
                i18n={i18n}
              />
            )}
          </Row>
        ) : (
          <Row>
            {Array.from({ length: 4 }, (_, i) => i).map((_) => (
              <MatchCol key={_}>
                <Skeleton active />
              </MatchCol>
            ))}
          </Row>
        )}
      </Col>
    </div>
  );
};

const MatchScheduleCard = ({
  match,
  isPast,
  teamId,
  t,
  i18n,
}: {
  match: IFixture;
  isPast: boolean;
  teamId: number;
  t: TFunction;
  i18n: I18n;
}) => {
  let isCityWin: string;
  if (match.home.id === teamId) {
    isCityWin =
      match.home.score > match.away.score
        ? 'win'
        : match.home.score === match.away.score
        ? 'draw'
        : 'lose';
  } else {
    isCityWin =
      match.away.score > match.home.score
        ? 'win'
        : match.away.score === match.home.score
        ? 'draw'
        : 'lose';
  }

  return (
    <MatchCol key={match.id}>
      <div className="mb-3">
        <Row justify="space-between" align="bottom">
          <div className="flex gap-x-1">
            <img
              className="mr-[2vw] md:mr-3"
              alt="home_logo"
              src={`https://images.fotmob.com/image_resources/logo/teamlogo/${match.home.id}_small.png`}
              width="40px"
            />
            <img
              className="mr-[2vw] md:mr-3"
              alt="away_logo"
              src={`https://images.fotmob.com/image_resources/logo/teamlogo/${match.away.id}_small.png`}
              width="40px"
            />
          </div>

          <Col className="content-between">
            <h4 className="m-0 text-[12px] font-medium text-[#ec3325]">
              {match.status.started && !match.status.finished ? 'LIVE' : ''}
            </h4>
            <h4
              className={`text-sm font-medium m-0 truncate ${
                isCityWin === 'win'
                  ? 'text-green-600'
                  : isCityWin === 'draw'
                  ? 'text-gray-700'
                  : 'text-[#ec3325]'
              }`}
            >
              {match.status.cancelled && 'Cancelled'}
              {match.status.scoreStr}
            </h4>
          </Col>
        </Row>
        <Divider
          className={`my-[10px] ${
            isPast
              ? isCityWin === 'win'
                ? 'bg-green-600'
                : isCityWin === 'draw'
                ? 'bg-gray-700'
                : 'bg-[#ec3325]'
              : 'bg-gray-500'
          } ${isPast ? 'h-[2px]' : 'h-[1px]'}`}
        />
        <h3 className="m-0 h-[50px] text-sm">{`${match.home.name} vs ${match.away.name}`}</h3>
        <h5 className="h-[10px] text-[10px] text-gray-700">
          {t(match.tournament.name)}
        </h5>
        <span className="h-[10px] text-[10px]">
          {match.status.startDateStr
            ? i18n.language === 'kr'
              ? translateShortDateToKorean(match.status.startDateStr)
              : match.status.startDateStr
            : match.status?.liveTime?.short ?? ''}
          {match.status.startTimeStr && ` | ${match.status.startTimeStr}`}
        </span>
      </div>
      <Link href={`matches/${match.id}`}>
        <a style={{ textDecoration: 'none' }}>
          <MoreButton value="More" size="medium" />
        </a>
      </Link>
    </MatchCol>
  );
};

const MatchCol = ({ children }: { children: ReactNode }) => (
  <Col
    xs={24}
    md={6}
    className="border-0 p-[5vw] last:border-0 md:border-r md:border-gray-400 md:p-8"
  >
    {children}
  </Col>
);

export default MatchSchedule;
