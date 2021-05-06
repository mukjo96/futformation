import React, { useEffect, useState } from "react";
import { Carousel, Typography } from "antd";
import { getCityNews } from "../api/getCityData.api";
import styled from "styled-components";
import Loading from "@features/common/Loading";
import MoreButton from "@features/common/button/MoreButton";
import { newsDataTypes } from "../api/cityDataTypes";
const { Link } = Typography;

const MainBanner = () => {
    const [bannerList, setBannerList] = useState<newsDataTypes>();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
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
                                href={
                                    bannerList.sourceStr.slice(0, 6) ===
                                    "FotMob"
                                        ? `https://www.fotmob.com${bannerList.page.url}`
                                        : bannerList.page.url
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
    @media screen and (max-width: 768px) {
        width: 70vw;
    }
`;

const NewsHeader = styled.h4`
    font-size: 12px;
    color: white;
    margin: 0;
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
