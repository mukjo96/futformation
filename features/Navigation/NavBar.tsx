import React, { useState } from "react";
import styled from "styled-components";
import HamburgerMenu from "react-hamburger-menu";
import { TextLogo } from "@features/common/logo/Logo";
import NavLinks from "@features/navigation/NavLinks";
import Searchbar from "@features/common/input/SerchBar";
import NavButtons from "@features/navigation/NavButtons";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <Container>
            <TextLogo />
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
                    color="#2a363b"
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
    background-color: rgba(0, 0, 0, 0);

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
            border-bottom: 1px solid #d6d6d6;
            li {
                width: 100%;
                text-align: center;
            }
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
    top: 20.5px;
    font-size: 24px;

    @media screen and (max-width: 768px) {
        display: flex;

        &element.style {
            position: absolute;
        }
    }
`;
