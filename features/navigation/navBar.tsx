import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HamburgerMenu from "react-hamburger-menu";
import { TextLogo } from "@features/common/logo/Logo";
import Searchbar from "@features/common/input/searchBar";
import NaviLinks from "./naviLinks";
import { Avatar, Dropdown, Menu, Row } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { select } from "redux/actions/actExample";
import { RootStateInterface } from "redux/interfaces/ifRootState";
import { IExampleState } from "redux/interfaces/iExample/iExample.interfaces";
import { teamList } from "./teamList";
import { useRouter } from "next/dist/client/router";
import SubMenu from "antd/lib/menu/SubMenu";

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const team = useSelector(
        (state: RootStateInterface): IExampleState => state.rdcExample
    );
    const router = useRouter();

    const dispatch = useDispatch();

    function changeTeam(teamInfo: IExampleState) {
        dispatch(select(teamInfo));
    }

    useEffect(() => {
        setOpen(false);
    }, [router.query]);

    const menu = (
        <Menu>
            {teamList.map((league) => (
                <SubMenu title={league.label} key={league.label}>
                    {league.label === "EURO" || league.label === "COPA AMERICA"
                        ? league.children.map((group) => (
                              <SubMenu title={group.label} key={group.label}>
                                  {group.children.map((team) => (
                                      <Menu.Item
                                          key={team.teamId}
                                          onClick={() => changeTeam(team)}
                                          style={{ alignItems: "center" }}
                                      >
                                          <Avatar
                                              src={`https://images.fotmob.com/image_resources/logo/teamlogo/${team.teamId}_small.png`}
                                              size="small"
                                              style={{ marginRight: "4px" }}
                                          />
                                          <span>{team.teamName}</span>
                                      </Menu.Item>
                                  ))}
                              </SubMenu>
                          ))
                        : league.children.map((team) => (
                              <Menu.Item
                                  key={team.teamId}
                                  onClick={() => changeTeam(team)}
                                  style={{ alignItems: "center" }}
                              >
                                  <Avatar
                                      src={`https://images.fotmob.com/image_resources/logo/teamlogo/${team.teamId}_small.png`}
                                      size="small"
                                      style={{ marginRight: "4px" }}
                                  />
                                  <span>{team.teamName}</span>
                              </Menu.Item>
                          ))}
                </SubMenu>
            ))}
        </Menu>
    );

    return (
        <Container style={{ background: team.teamColor }}>
            <Dropdown overlay={menu} trigger={["click"]}>
                <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                >
                    <Row align="middle">
                        {team.teamId === 0 ? (
                            <TextLogo />
                        ) : (
                            <img
                                src={`https://images.fotmob.com/image_resources/logo/teamlogo/${team.teamId}.png`}
                                width={50}
                            />
                        )}
                        <DownOutlined
                            style={{
                                color: "white",
                                marginLeft: "4px",
                            }}
                        />
                    </Row>
                </a>
            </Dropdown>

            <Hamburger className={open ? "show" : "hidden"}>
                <NaviLinks open={open} />
                <GroupBar className={open ? "show" : "hidden"}>
                    <Searchbar />
                </GroupBar>
            </Hamburger>
            <ToggleBtn>
                <HamburgerMenu
                    isOpen={open}
                    menuClicked={() => setOpen(!open)}
                    width={18}
                    height={15}
                    color="white"
                    position="absolute"
                />
            </ToggleBtn>
        </Container>
    );
};

export default NavBar;

const Container = styled.nav`
    display: flex;
    margin: 0 auto;
    padding: 8px 12px;
    align-items: center;
    position: relative;
    z-index: 1;

    @media screen and (min-width: 1280px) {
        width: 1280px;
        align-self: center;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        padding: 8px 24px;
    }
`;
const Hamburger = styled.div`
    &.hidden {
        display: flex;
        flex-grow: 1;
        align-items: center;
    }

    @media screen and (max-width: 768px) {
        &.show {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            li {
                width: 100%;
                text-align: center;
            }
            padding-bottom: 3vw;
        }

        &.hidden {
            display: none;
        }
    }
`;

const GroupBar = styled.div`
    display: flex;

    justify-content: flex-end;

    @media screen and (max-width: 768px) {
        &.show {
            display: flex;
            flex-direction: column;
        }
    }
`;

const ToggleBtn = styled.section`
    display: none;
    position: absolute;
    right: 32px;
    top: 25.5px;
    font-size: 24px;

    @media screen and (max-width: 768px) {
        display: flex;

        &element.style {
            position: absolute;
        }
    }
`;
