import React from 'react';

import { useTranslation } from 'next-i18next';

type ButtonProps = {
  value: string;
  size: 'large' | 'medium' | 'small';
  onClick?: React.MouseEventHandler;
};

const MoreButton = ({ value, size = 'medium', onClick }: ButtonProps) => {
  const { t } = useTranslation('common');
  const spanClassName = size === 'large' ? 'text-xs' : 'text-[0.625rem]';
  return (
    <button
      className={`bg-[#1c2c5b] border-0 px-2 py-[6px] flex justify-between cursor-pointer text-white ${
        size === 'large'
          ? 'w-[24vw] md:w-[112px] min-w-[4.375rem] md:max-w-[112px]'
          : 'w-[88px] min-w-[4.375rem] max-w-[88px]'
      }`}
      onClick={onClick}
    >
      <span className={spanClassName}>{t(value)}</span>
      <span className={spanClassName}>+</span>
    </button>
  );
};

export default MoreButton;
