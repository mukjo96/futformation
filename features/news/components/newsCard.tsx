import React from "react";
import { Carousel, Card, Avatar, Row, Col } from "antd";

import styled from "styled-components";
import AwesomeSlider from "react-awesome-slider";

import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import { IconLogo } from "@features/common/logo/Logo";
import Link from "antd/lib/typography/Link";
import { renderNewsBox } from "@features/home/components/latestNews";
import MainBanner from "@features/home/components/mainBanner";
import MoreButton from "@features/common/button/moreButton";

const { Meta } = Card;

const NewsCard = ({ newsList, activeSlide, setActiveSlide, teamId }) => {
    // return (
    //     <StyledRow justify="center">
    //         {newsList.map((news, index) => renderNewsBox(news, index, teamId))}
    //     </StyledRow>
    // );

    return (
        <Container>
            <StyledAwesomeSlider animation="cubeAnimation">
                {newsList.map((news, index) => (
                    <BannerContainer>
                        <BannerBackground
                            style={{
                                backgroundImage: `url(${news.imageUrl})`,
                            }}
                        >
                            <BackFilter>
                                <TextContainer>
                                    <NewsHeader>{`TEAM NEWS`}</NewsHeader>
                                    <BannerTitle>{news.title}</BannerTitle>
                                    <BannerSource>
                                        {news.sourceStr}
                                    </BannerSource>
                                    <Link
                                        style={{ cursor: "pointer" }}
                                        href={
                                            news.sourceStr.slice(0, 6) ===
                                            "FotMob"
                                                ? `https://www.fotmob.com${news.page.url}`
                                                : news.page.url
                                        }
                                        target="_blank"
                                    >
                                        <MoreButton
                                            value="View Now"
                                            size="large"
                                        />
                                    </Link>
                                </TextContainer>
                            </BackFilter>
                        </BannerBackground>
                    </BannerContainer>
                ))}
            </StyledAwesomeSlider>
            <Col xs={24} md={0}>
                {newsList.map((news, index) =>
                    renderNewsBox(news, index, teamId)
                )}
            </Col>
        </Container>
    );
};

export default NewsCard;

const Container = styled(Row)``;

const StyledAwesomeSlider = styled(AwesomeSlider)`
    margin: 0 3% 7% 3%;

    .awssld__controls button {
    }

    @media screen and (max-width: 768px) {
        display: none;
        /* margin-bottom: 300px;

        .awssld__bullets {
            bottom: -15px;
            button {
                width: 8px;
                height: 8px;
            }
        } */
    }
`;

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
