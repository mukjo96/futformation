import React from 'react';

import { Skeleton } from 'antd';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import MoreButton from '../common/button/moreButton';

type PropTypes = {
  news: any;
  header: string;
};

const NewsBanner = ({ news, header }: PropTypes) => {
  const sourceTitle = news && news?.sourceStr?.split(' - ');
  const { t } = useTranslation('common');

  function translateLate(late: string) {
    let newLate = late;
    if (late.includes('1 day ago')) {
      newLate = newLate.replace('1 day ago', t('1 day ago'));
    }
    if (late.includes('days ago')) {
      newLate = newLate.replace(' days ago', t('days ago'));
    }
    if (late.includes('hours ago')) {
      newLate = newLate.replace(' hours ago', t('hours ago'));
    }
    if (late.includes('minutes ago')) {
      newLate = newLate.replace(' minutes ago', t('minutes ago'));
    }
    if (late.includes('about')) {
      newLate = newLate.replace('about ', '');
    }

    return newLate;
  }

  return (
    <>
      {news && header ? (
        <div className="relative flex h-[50vw] max-h-[640px] w-full">
          <div
            className="flex h-[50vw] max-h-[640px] w-full bg-gray-500 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${news.imageUrl})`,
            }}
          >
            <div className="flex h-[50vw] max-h-[640px] w-full flex-wrap items-end bg-gradient-to-r from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.2)]">
              <div className="w-[80%] p-[5%] md:w-[47%] ">
                <h4 className="m-0 hidden text-xs text-white md:block">
                  {header}
                </h4>
                <h2 className="m-0 text-sm font-bold text-white drop-shadow md:text-2xl lg:text-xl mb-1">
                  {news.title}
                </h2>
                <p className="text-[0.625rem] text-white drop-shadow md:text-xs mb-2">{`${
                  sourceTitle[0]
                } - ${translateLate(sourceTitle[1])}`}</p>
                <Link
                  href={
                    news.sourceStr.slice(0, 6) === 'FotMob'
                      ? `https://www.fotmob.com${news.page.url}`
                      : news.page.url
                  }
                  passHref
                >
                  <a style={{ cursor: 'pointer' }} target="_blank">
                    <MoreButton value={'View Now'} size="large" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative flex h-[50vw] max-h-[640px] w-full">
          <div className="flex h-[50vw] max-h-[640px] w-full bg-gray-500 bg-cover bg-center bg-no-repeat">
            <div className="flex h-[50vw] max-h-[640px] w-full flex-wrap items-end bg-gradient-to-r from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.2)]">
              <div className="w-[80%] p-[5%] md:w-[47%] ">
                <Skeleton active />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsBanner;
