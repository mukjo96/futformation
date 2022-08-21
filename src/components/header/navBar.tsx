import React, { useEffect, useState } from 'react';

import { DownOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Menu, Row } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import Hamburger from 'hamburger-react';
import { useRouter } from 'next/dist/client/router';

import { TextLogo } from '@/components/common/logo/Logo';
import { teamList } from '@/constants/teamList';
import { useTeamRecoilState } from '@/hooks/useTeamRecoil';
import { ITeam } from '@/types/teamTypes';

import LocaleDropdown from './localeDropdown';
import NaviLinks from './naviLinks';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [team, setTeam] = useTeamRecoilState();
  const router = useRouter();
  const handleChangeTeam = (teamInfo: ITeam) => {
    setTeam(teamInfo);
  };

  useEffect(() => {
    setOpen(false);
  }, [router.query]);

  const menu = (
    <Menu>
      {teamList.map((league) => (
        <SubMenu title={league.label} key={league.label}>
          {league.label === 'EURO' || league.label === 'COPA AMERICA'
            ? league.children.map((group) => (
                <SubMenu title={group.label} key={group.label}>
                  {group.children.map((teamInfo: ITeam) => (
                    <Menu.Item
                      key={teamInfo.teamId}
                      onClick={() => handleChangeTeam(teamInfo)}
                      style={{ alignItems: 'center' }}
                    >
                      <Avatar
                        src={`https://images.fotmob.com/image_resources/logo/teamlogo/${teamInfo.teamId}_small.png`}
                        size="small"
                        style={{ marginRight: '4px' }}
                      />
                      <span>{teamInfo.teamName}</span>
                    </Menu.Item>
                  ))}
                </SubMenu>
              ))
            : league.children.map((teamInfo: ITeam) => (
                <Menu.Item
                  key={teamInfo.teamId}
                  onClick={() => handleChangeTeam(teamInfo)}
                  style={{ alignItems: 'center' }}
                >
                  <Avatar
                    src={`https://images.fotmob.com/image_resources/logo/teamlogo/${teamInfo.teamId}_small.png`}
                    size="small"
                    style={{ marginRight: '4px' }}
                  />
                  <span>{teamInfo.teamName}</span>
                </Menu.Item>
              ))}
        </SubMenu>
      ))}
    </Menu>
  );

  return (
    <div
      className="flex w-full justify-center"
      style={{ background: team.teamColor }}
    >
      <nav className="relative z-10 m-auto flex w-full max-w-[1280px] flex-col items-start self-center py-2 px-6 md:flex-row md:items-center md:px-3">
        <Dropdown overlay={menu} trigger={['click']}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            <Row align="middle">
              {team.teamId === 0 ? (
                <TextLogo />
              ) : (
                team.teamId && (
                  <img
                    src={`https://images.fotmob.com/image_resources/logo/teamlogo/${team.teamId}.png`}
                    alt="team_logo"
                    width={50}
                  />
                )
              )}
              <DownOutlined
                style={{
                  color: 'white',
                  marginLeft: '4px',
                }}
              />
            </Row>
          </a>
        </Dropdown>

        <div
          className={
            open
              ? 'flex flex-col items-center w-full pb-[3vw] md:hidden text-center'
              : 'hidden md:flex md:flex-grow md:items-center'
          }
        >
          <NaviLinks open={open} />
          <div
            className={`flex flex-end ${open ? 'flex-col md:flex-row' : ''}`}
          >
            <LocaleDropdown />
          </div>
        </div>
        <section className="absolute right-[12px] top-[9px] flex text-[24px] md:hidden">
          <Hamburger
            toggled={open}
            toggle={setOpen}
            size={18}
            color="#ffffff"
          />
        </section>
      </nav>
    </div>
  );
};

export default NavBar;
