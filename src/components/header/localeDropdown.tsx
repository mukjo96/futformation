import React from 'react';

import { DownOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const LocaleDropdown = () => {
  const { i18n } = useTranslation();

  const menu = (
    <Menu>
      <Menu.Item className="text-black no-underline" key="0">
        <Link href="/" locale="kr">
          한국어
        </Link>
      </Menu.Item>
      <Menu.Item className="text-black no-underline" key="1">
        <Link href="/" locale="en">
          English
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <a
        className="ant-dropdown-link text-white no-underline hover:text-white hover:underline"
        onClick={(e) => e.preventDefault()}
      >
        {i18n.language.toUpperCase()} <DownOutlined />
      </a>
    </Dropdown>
  );
};

export default LocaleDropdown;
