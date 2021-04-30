import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import { getCityNews } from "../api/getCityData.api";
import styled from "styled-components";
import Loading from "@features/common/Loading";

const contentStyle = {
    height: "52.5vw",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
};

const MainBanner = () => {
    const [bannerList, setBannerList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        console.log(getCityNews());
        getCityNews()
            .then(async (data) => {
                if (data) {
                    setBannerList(data.news);
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
            <Carousel autoplay autoplaySpeed={5000}>
                {bannerList.slice(0, 6).map((banner, index) => {
                    if (banner.title.substr(0, 5) !== "Video") {
                        return (
                            <BannerContainer key={index}>
                                <BannerBackground
                                    style={{
                                        backgroundImage: `url(${banner.imageUrl})`,
                                    }}
                                >
                                    <BackFilter>
                                        <div>
                                            <BannerTitle>
                                                {banner.title}
                                            </BannerTitle>
                                            <BannerSource>
                                                {banner.sourceStr}
                                            </BannerSource>
                                        </div>
                                    </BackFilter>
                                </BannerBackground>
                            </BannerContainer>
                        );
                    }
                })}
            </Carousel>
        );
    }
};

export default MainBanner;

const BannerContainer = styled.div`
    display: flex;
    height: 50vw;
    width: 100%;
`;

const BackFilter = styled.div`
    display: flex;
    justify-content: center;
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
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const BannerTitle = styled.h3`
    font-size: 28px;
    color: white;
    padding: 0 1vw;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;
const BannerSource = styled.p`
    font-size: 14px;
    color: white;
    padding: 0 1vw 3vw 1vw;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;
