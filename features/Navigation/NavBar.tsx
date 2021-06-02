import React, { useState } from "react";
import styled from "styled-components";
import HamburgerMenu from "react-hamburger-menu";
import { TextLogo } from "@features/common/logo/Logo";
import Link from "next/link";
import Searchbar from "@features/common/input/searchBar";
import NavLinks from "@features/navigation/navLinks";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <Container>
            <Link href="/">
                <a>
                    <TextLogo />
                </a>
            </Link>
            <Hamburger className={open ? "show" : "hidden"}>
                <NavLinks open={open} />
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
