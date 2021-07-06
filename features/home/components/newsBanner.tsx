import MoreButton from "@features/common/button/moreButton";
import Link from "antd/lib/typography/Link";
import React from "react";
import styled from "styled-components";
import { newsDataTypes } from "../api/cityDataTypes";

type propTypes = {
    news: newsDataTypes;
    header: string;
};

const NewsBanner = ({ news, header }: propTypes) => {
    return (
        <BannerContainer>
            <BannerBackground
                style={{
                    backgroundImage: `url(${news.imageUrl})`,
                }}
            >
                <BackFilter>
                    <TextContainer>
                        <NewsHeader>{header}</NewsHeader>
                        <BannerTitle>{news.title}</BannerTitle>
                        <BannerSource>{news.sourceStr}</BannerSource>
                        <Link
                            style={{ cursor: "pointer" }}
                            href={
                                news.sourceStr.slice(0, 6) === "FotMob"
                                    ? `https://www.fotmob.com${news.page.url}`
                                    : news.page.url
                            }
                            target="_blank"
                        >
                            <MoreButton value="View Now" size="large" />
                        </Link>
                    </TextContainer>
                </BackFilter>
            </BannerBackground>
        </BannerContainer>
    );
};

export default NewsBanner;

const BannerContainer = styled.div`
    display: flex;
    height: 50vw;
    max-height: 640px;
    width: 100%;
`;

const BackFilter = styled.div`
    display: flex;
    max-height: 640px;
    height: 50vw;
    align-items: flex-end;

    width: 100%;
    flex-wrap: wrap;
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.4) 50vw,
        rgba(0, 0, 0, 0.2) 100%
    );
`;
const BannerBackground = styled.div`
    display: flex;
    height: 50vw;
    max-height: 640px;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const TextContainer = styled.div`
    padding: 5%;
    width: 47%;
    @media screen and (max-width: 768px) {
        width: 80%;
    }
`;

const NewsHeader = styled.h4`
    font-size: 12px;
    color: white;
    margin: 0;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const BannerTitle = styled.h2`
    font-size: 28px;
    color: white;
    font-weight: bold;
    margin: 0;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    @media screen and (max-width: 992px) {
        font-size: 24px;
    }
    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`;
const BannerSource = styled.p`
    font-size: 12px;
    color: white;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    @media screen and (max-width: 768px) {
        font-size: 10px;
    }
`;
