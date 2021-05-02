import React, { useEffect, useState } from "react";
import { Carousel, Typography } from "antd";
import { getCityNews } from "../api/getCityData.api";
import styled from "styled-components";
import Loading from "@features/common/Loading";
import MoreButton from "@features/common/button/MoreButton";
import { newsDataTypes } from "../api/cityDataTypes";
const { Paragraph, Link } = Typography;

const contentStyle = {
    height: "52.5vw",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
};

const MainBanner = () => {
    const [bannerList, setBannerList] = useState<newsDataTypes>();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        console.log(getCityNews());
        getCityNews()
            .then(async (data) => {
                if (data) {
                    setBannerList(data.news[0]);
                }
            })
            .then((_) => {
                setIsLoading(false);
            });
    }, []);
    if (isLoading) {
        return <Loading />;
    } else {
        return (
            <BannerContainer>
                <BannerBackground
                    style={{
                        backgroundImage: `url(${bannerList.imageUrl})`,
                    }}
                >
                    <BackFilter>
                        <TextContainer>
                            <NewsHeader>FIRST TEAM NEWS</NewsHeader>
                            <BannerTitle>{bannerList.title}</BannerTitle>
                            <BannerSource>{bannerList.sourceStr}</BannerSource>
                            <Link
                                style={{ cursor: "pointer" }}
                                href={`https://www.fotmob.com${bannerList.page.url}`}
                                target="_blank"
                            >
                                <MoreButton value="View Now" size="large" />
                            </Link>
                        </TextContainer>
                    </BackFilter>
                </BannerBackground>
            </BannerContainer>
        );
    }
};

export default MainBanner;

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
    padding: 3vw;
    width: 47vw;
`;

const NewsHeader = styled.h4`
    font-size: 12px;
    color: white;
    margin: 0;
`;

const BannerTitle = styled.h2`
    font-size: 32px;
    color: white;
    font-weight: bold;
    margin: 0;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    @media screen and (max-width: 768px) {
        font-size: 16px;
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
