import React from "react";
import styled from "styled-components";
import Slide from "react-reveal/Slide";
import { Row, Col } from "antd";
import BlockTitle from "./Title/blockTitle";

import { Avatar } from "antd";
import { IconLogo } from "@features/common/logo/Logo";

const LatestNews = ({ newsList }) => {
    return (
        <Container>
            <Col>
                <BlockTitle title="LATEST NEWS" link="news" theme="dark" />
                <Slide right>
                    <NewsRow>
                        {newsList.slice(1, 5).map((news, index) => {
                            const sourceTitle = news.sourceStr.split(" - ");
                            return (
                                <NewsBox
                                    style={{
                                        backgroundImage: `url(${news.imageUrl})`,
                                    }}
                                    xs={24}
                                    md={6}
                                    key={index}
                                >
                                    <BackFilter
                                        onClick={
                                            sourceTitle[0] === "FotMob"
                                                ? () =>
                                                      window.open(
                                                          `https://www.fotmob.com${news.page.url}`,
                                                          "_ blank"
                                                      )
                                                : () =>
                                                      window.open(
                                                          news.page.url,
                                                          "_ blank"
                                                      )
                                        }
                                    >
                                        <Col style={{ lineHeight: "1.2" }}>
                                            <NewsCategory>
                                                {sourceTitle[0] === "YouTube"
                                                    ? "VIDEO"
                                                    : sourceTitle[0] ===
                                                      "City Xtra"
                                                    ? "FIRST TEAM"
                                                    : "MEDIA WATCH"}
                                            </NewsCategory>
                                            <NewsTitle>{news.title}</NewsTitle>
                                            <Row>
                                                <Avatar
                                                    size="small"
                                                    icon={
                                                        news.sourceIconUrl ===
                                                        "https://images.fotmob.com/image_resources/news/default.png" ? (
                                                            <IconLogo />
                                                        ) : (
                                                            <img
                                                                src={
                                                                    news.sourceIconUrl
                                                                }
                                                            />
                                                        )
                                                    }
                                                    style={{
                                                        marginRight: "4px",
                                                    }}
                                                />
                                                <div>
                                                    <NewsSource>
                                                        {sourceTitle[0]}
                                                    </NewsSource>
                                                    <NewsLate>
                                                        {sourceTitle[1]}
                                                    </NewsLate>
                                                </div>
                                            </Row>
                                        </Col>
                                    </BackFilter>
                                </NewsBox>
                            );
                        })}
                    </NewsRow>
                </Slide>
            </Col>
        </Container>
    );
};

export default LatestNews;

const Container = styled.div`
    padding: 28px;
    padding-right: 0;
    @media screen and (max-width: 768px) {
        padding: 4vw;
    }
    background-color: black;
`;

const NewsRow = styled(Row)`
    padding-top: 28px;
    padding-left: 84px;
    @media screen and (max-width: 768px) {
        padding: 4vw 0;
    }
`;

const NewsBox = styled(Col)`
    height: 22vw;
    max-height: 280px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
    @media screen and (max-width: 768px) {
        height: 240px;
    }
`;

const BackFilter = styled.div`
    display: flex;
    height: 22vw;
    max-height: 280px;
    align-items: flex-end;

    width: 100%;

    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.5) 50vw,
        rgba(0, 0, 0, 0.3) 100%
    );
    padding: 5% 10%;

    @media screen and (max-width: 768px) {
        height: 240px;
    }
`;

const NewsCategory = styled.h5`
    font-size: 10px;
    margin-bottom: 4px;
    color: #ffc659;
`;

const NewsTitle = styled.h2`
    color: white;
    font-size: 12px;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    line-height: 1.2;
    align-self: center;
    margin-bottom: 12px;
`;

const NewsSource = styled.h5`
    color: white;
    font-size: 10px;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    line-height: 1.2;
    margin: 0;
`;

const NewsLate = styled.h5`
    color: darkgray;
    font-size: 8px;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    line-height: 1.2;
    margin: 0;
`;
