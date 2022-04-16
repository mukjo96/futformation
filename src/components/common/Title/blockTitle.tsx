import Link from 'next/link';
import React, { ReactNode } from 'react';
import { useTranslation } from 'next-i18next';

type titleTypes = {
  title: string;
  link: string;
  linkText?: string;
  theme?: 'light' | 'dark';
  teamName?: string;
};

const BlockTitle = ({
  title,
  link,
  linkText = link,
  theme = 'light',
  teamName = '',
}: titleTypes) => {
  const { t } = useTranslation('common');

  return (
    <>
      {teamName !== '' ? (
        <Title theme={theme}>{`${teamName} ${t(title)}`}</Title>
      ) : (
        <Title theme={theme}>{t(title)}</Title>
      )}
      <Link href={`/${link}`}>
        <span className="text-darkgray font-[10px] m-0 cursor-pointer hover:text-underline">
          {t(`View all ${linkText}`)} +
        </span>
      </Link>
    </>
  );
};

const Title = ({
  children,
  theme,
}: {
  children: ReactNode;
  theme: titleTypes['theme'];
}) => (
  <h3
    className={`text-base font-semibold m-0 ${
      theme === 'dark' ? 'text-white' : 'text-black'
    }`}
  >
    {children}
  </h3>
);

export default BlockTitle;
