import React, { useState } from "react";
import styled from "styled-components";
import HamburgerMenu from "react-hamburger-menu";
import { TextLogo } from "@features/common/logo/Logo";
import Link from "next/link";
import Searchbar from "@features/common/input/searchBar";
import NaviLinks from "./naviLinks";
import { Dropdown, Menu, Row } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { select } from "redux/actions/actExample";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();

    function changeTeam(teamId: number) {
        dispatch(select(teamId));
    }

    const menu = (
        <Menu>
            <Menu.Item key={8650} onClick={() => changeTeam(8650)}>
                LiverPool
            </Menu.Item>
            <Menu.Item key={8586} onClick={() => changeTeam(8586)}>
                Tottenham
            </Menu.Item>
            <Menu.Item key={8456} onClick={() => changeTeam(8456)}>
                Man City
            </Menu.Item>
        </Menu>
    );

    return (
        <Container>
            <Dropdown overlay={menu} trigger={["click"]}>
                <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                >
                    <Row>
                        <TextLogo />
                        <DownOutlined />
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
    background: #1c2c5b;
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
            background: #1c2c5b;
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
    top: 15.5px;
    font-size: 24px;

    @media screen and (max-width: 768px) {
        display: flex;

        &element.style {
            position: absolute;
        }
    }
`;
