import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

const NaviLinks = (open: any) => {
    const router = useRouter();

    const navItems = [
        { title: "HOME", route: "/" },
        { title: "NEWS", route: "/news" },
        { title: "MATCH", route: "/matches" },
        { title: "TEAM", route: "/players" },
        { title: "TICKETS", route: "https://www.mancity.com/matchinfo" },
        { title: "SHOP", route: "https://shop.mancity.com/" },
    ];

    return (
        <Container className={open ? "show" : "hidden"}>
            {navItems.map((item, index) => (
                <Link key={index} href={`${item.route}`}>
                    <Titleli
                        isselected={(router.pathname === item.route).toString()}
                    >
                        {item.title}
                    </Titleli>
                </Link>
            ))}
        </Container>
    );
};

export default NaviLinks;

const Container = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-inline-start: 0px;
    flex-grow: 1;
    margin: 0;
    li {
        list-style: none;
        font-family: "Poppins", cursive;
        font-size: 15px;
        padding: 3px;
        color: #f9f9f9;
        cursor: pointer;
        margin-right: 5px;
    }

    li:hover {
        text-decoration: underline;
    }

    @media screen and (max-width: 860px) {
        li {
            font-size: 14px;
        }
    }

    @media screen and (max-width: 768px) {
        &.show {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            margin-bottom: 1vh;

            li {
                margin: 1% 0;
            }
        }
    }
`;

const Titleli = styled.li<{ isselected: string }>`
    text-decoration: ${(props) =>
        props.isselected === "true" ? "underline" : "none"};
`;