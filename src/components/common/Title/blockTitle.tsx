import React, { ReactNode } from 'react';

import { useTranslation } from 'next-i18next';
import Link from 'next/link';

type TitleTypes = {
  title: string;
  link: string;
  linkText?: string;
  theme?: 'light' | 'dark';
  teamName?: string;
};

const Title = ({
  children,
  theme,
}: {
  children: ReactNode;
  theme: TitleTypes['theme'];
}) => (
  <h3
    className={`text-base font-semibold m-0 ${
      theme === 'dark' ? 'text-white' : 'text-black'
    }`}
  >
    {children}
  </h3>
);

const BlockTitle = ({
  title,
  link,
  linkText = link,
  theme = 'light',
  teamName = '',
}: TitleTypes) => {
  const { t } = useTranslation('common');

  return (
    <>
      {teamName !== '' ? (
        <Title theme={theme}>{`${teamName} ${t(title)}`}</Title>
      ) : (
        <Title theme={theme}>{t(title)}</Title>
      )}
      <Link href={`/${link}`} passHref>
        <span className="font-[10px] m-0 cursor-pointer text-gray-600 hover:underline">
          {t(`View all ${linkText}`)} +
        </span>
      </Link>
    </>
  );
};

export default BlockTitle;
