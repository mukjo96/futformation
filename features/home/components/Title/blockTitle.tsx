import Link from "next/link";
import React from "react";
import styled from "styled-components";

type titleTypes = {
    title: string;
    link: string;
    theme: "light" | "dark";
};

const BlockTitle = ({ title, link, theme = "light" }: titleTypes) => {
    return (
        <>
            <Title theme={theme}>{title}</Title>
            <Link href={`/${link}`}>
                <MatchLink>View all {link} +</MatchLink>
            </Link>
        </>
    );
};

export default BlockTitle;

const Title = styled.h3<{ theme: string }>`
    color: ${(props) => (props.theme === "dark" ? "white" : "black")};
    font-size: 16px;
    font-weight: 600;
    margin: 0;
`;

const MatchLink = styled.span`
    color: darkgray;
    font-size: 10px;
    margin: 0;
    :hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;
