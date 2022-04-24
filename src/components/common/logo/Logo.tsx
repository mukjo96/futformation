import React from 'react';

export const IconLogo = <img src="/logo.png" alt="logo" />;

export const TextLogo = () => {
  return (
    <div className="flex items-center">
      <img
        src="/logo.png"
        alt="logo"
        className="h-[50px]"
        style={{ filter: 'brightness(0) invert(1)' }}
      />
    </div>
  );
};
