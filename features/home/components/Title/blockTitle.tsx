import Link from "next/link";
import Fade from "react-reveal-effects/Fade";
import React from "react";
import styled from "styled-components";
import { useTranslation } from "next-i18next";

type titleTypes = {
    title: string;
    link: string;
    linktext?: string;
    theme?: "light" | "dark";
    teamName?: string;
};

const BlockTitle = ({
    title,
    link,
    linktext = link,
    theme = "light",
    teamName = "",
}: titleTypes) => {
    const { t } = useTranslation("common");

    return (
        <Fade left ssrFadeout>
            {teamName !== "" ? (
                <Title theme={theme}>{`${teamName} ${t(title)}`}</Title>
            ) : (
                <Title theme={theme}>{t(title)}</Title>
            )}
            <Link href={`/${link}`}>
                <MatchLink>{t(`View all ${linktext}`)} +</MatchLink>
            </Link>
        </Fade>
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
