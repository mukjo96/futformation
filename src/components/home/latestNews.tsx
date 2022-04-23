import React from 'react';

import { Row, Col, Skeleton, Avatar } from 'antd';
import { TFunction, useTranslation } from 'next-i18next';

import BlockTitle from '@/components/common/Title/blockTitle';
import { INewsData } from '@/types/apiTypes';
import { translateLate } from '@/utils/formatDate';

type PropTypes = {
  newsList: INewsData[];
  teamId: number;
};

export function renderNewsBox(
  news: INewsData,
  index: number,
  teamId: number,
  t: TFunction
) {
  const sourceTitle = news.sourceStr.split(' - ');
  return (
    <Col
      className="h-60 max-h-[280px] cursor-pointer bg-cover bg-center bg-no-repeat md:h-[22vw]"
      style={{
        backgroundImage: `url(${news.imageUrl})`,
      }}
      xs={24}
      md={6}
      key={index}
    >
      <div
        className="flex h-60 max-h-[280px] w-full items-end bg-gradient-to-r from-[rgba(0,0,0,0.5)_50vw] to-[rgba(0,0,0,0.3)_100%] py-[5%] px-[10%] md:h-[22vw]"
        onClick={
          sourceTitle[0] === 'FotMob'
            ? () =>
                window.open(`https://www.fotmob.com${news.page.url}`, '_ blank')
            : () => window.open(news.page.url, '_ blank')
        }
      >
        <Col style={{ lineHeight: '1.2' }}>
          <h5 className="mb-1 text-[10px] text-[#ffc659]">
            {sourceTitle[0] === 'YouTube' ? t('VIDEO') : t('MEDIA WATCH')}
          </h5>
          <h2 className="text-shadow-100 mb-3 text-xs text-white">
            {news.title}
          </h2>
          <Row>
            <Avatar
              size="small"
              icon={
                news.sourceIconUrl ===
                'https://images.fotmob.com/image_resources/news/default.png' ? (
                  <img
                    alt="team_logo"
                    src={`https://images.fotmob.com/image_resources/logo/teamlogo/${teamId}_small.png`}
                  />
                ) : (
                  <img alt="source_icon" src={news.sourceIconUrl} />
                )
              }
              style={{
                marginRight: '4px',
                background: 'none',
              }}
            />
            <div>
              <h5 className="text-shadow-100 m-0 text-[10px] leading-tight text-white">
                {sourceTitle[0]}
              </h5>
              <h5 className="text-shadow-100 m-0 text-[10px] leading-tight text-gray-600">
                {translateLate(sourceTitle[1] ?? '', t)}
              </h5>
            </div>
          </Row>
        </Col>
      </div>
    </Col>
  );
}

const LatestNews = ({ newsList, teamId }: PropTypes) => {
  const { t } = useTranslation('common');

  return (
    <div className="relative bg-black p-[4vw] md:p-7 md:pr-0">
      <Col>
        <BlockTitle title="LATEST NEWS" link="news" theme="dark" />
        <Row className="py-[4vw] md:pt-7 md:pl-20">
          {newsList
            ? newsList
                ?.slice(1, 5)
                .map((news, index) => renderNewsBox(news, index, teamId, t))
            : Array.from({ length: 4 }, (x, i) => i).map((_) => (
                <Col
                  className="h-60 max-h-[280px] cursor-pointer bg-cover bg-center bg-no-repeat md:h-[22vw]"
                  style={{ backgroundColor: 'grey' }}
                  xs={24}
                  md={6}
                  key={_}
                >
                  <div className="flex h-60 max-h-[280px] w-full items-end bg-gradient-to-r from-[rgba(0,0,0,0.5)_50vw] to-[rgba(0,0,0,0.3)_100%] py-[5%] px-[10%] md:h-[22vw]">
                    <Skeleton active />
                  </div>
                </Col>
              ))}
        </Row>
      </Col>
    </div>
  );
};

export default LatestNews;
