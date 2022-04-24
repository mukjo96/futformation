import React from 'react';

import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

const NaviLinks = (open: any) => {
  const router = useRouter();
  const { t } = useTranslation('common');

  const navItems = [
    { title: 'HOME', route: '/' },
    { title: 'NEWS', route: '/news' },
    { title: 'MATCH', route: '/matches' },
    { title: 'TABLE', route: '/table' },
    { title: 'SQUAD', route: '/players' },
    // { title: "SHOP", route: "https://shop.mancity.com/" },
  ];

  return (
    <ul
      className={`flex items-center justify-center flex-grow m-0 ${
        open ? 'flex-col w-full mb-[1vh] md:flex-row md:mb-0 md:w-fit' : ''
      }`}
      style={{
        fontFamily: '"Poppins", "Noto Sans KR", cursive',
      }}
    >
      {navItems.map((item, index) => (
        <Link key={index} href={`${item.route}`} passHref>
          <li
            className={`list-none text-[14px] md:text-[15px] p-[3px] text-[#f9f9f9] cursor-pointer mr-[5px] hover:underline ${
              open ? 'my-[1%]' : ''
            } ${router.pathname === item.route ? 'underline' : ''}`}
          >
            {t(item.title)}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default NaviLinks;
