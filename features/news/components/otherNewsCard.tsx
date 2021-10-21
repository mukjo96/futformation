import { newsDataTypes } from "@features/home/api/cityDataTypes";
import { Avatar, Col, Row, Skeleton } from "antd";
import { useTranslation } from "next-i18next";
import React from "react";
import styled from "styled-components";
import { translateLate } from "utils/moment/translateMoment";

type propTypes = {
    news: newsDataTypes | null;
    teamId: number;
};

const OtherNewsCard = ({ news, teamId }: propTypes) => {
    const { t } = useTranslation("common");
    return news ? (
        <Container>
            <Col
                span={24}
                style={{
                    backgroundImage: `url(${news.imageUrl})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "10vw",
                    maxHeight: "128px",
                    padding: 0,
                }}
            ></Col>
            <Content>
                <Category>
                    {news.title.includes("Video") ||
                    news.sourceStr.split(" - ")[0] === "YouTube"
                        ? t("VIDEO")
                        : t("MEDIA WATCH")}
                </Category>
                <TitleDiv
                    onClick={
                        news.sourceStr.split(" - ")[0] === "FotMob"
                            ? () =>
                                  window.open(
                                      `https://www.fotmob.com${news.page.url}`,
                                      "_ blank"
                                  )
                            : () => window.open(news.page.url, "_ blank")
                    }
                >
                    <Title>{news.title}</Title>
                </TitleDiv>
                <Col style={{ padding: 0 }}>
                    <Row align="middle">
                        <Avatar
                            size="small"
                            icon={
                                news.sourceIconUrl ===
                                "https://images.fotmob.com/image_resources/news/default.png" ? (
                                    <img
                                        src={`https://images.fotmob.com/image_resources/logo/teamlogo/${teamId}_small.png`}
                                    />
                                ) : (
                                    <img src={news.sourceIconUrl} />
                                )
                            }
                            style={{
                                marginRight: "6px",
                                background: "none",
                            }}
                        />
                        <div style={{ lineHeight: 1 }}>
                            <Source>{news.sourceStr.split(" - ")[0]}</Source>
                            <Time>
                                {translateLate(
                                    news.sourceStr.split(" - ")[1],
                                    t
                                )}
                            </Time>
                        </div>
                    </Row>
                </Col>
            </Content>
        </Container>
    ) : (
        <Container>
            <Col
                span={24}
                style={{
                    backgroundColor: "darkgray",
                    height: "10vw",
                    maxHeight: "128px",
                    padding: 0,
                }}
            ></Col>
            <Content>
                <Skeleton active />
            </Content>
        </Container>
    );
};

export default OtherNewsCard;

const Container = styled.div`
    margin-bottom: 15px;
`;

const Content = styled.div`
    height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

const Category = styled.span`
    font-size: 11px;
    color: #1c2c5b;
    font-weight: 300;
`;

const TitleDiv = styled.div``;

const Title = styled.h2`
    font-size: 13px;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    line-height: 1.5em;
    height: 4.5em;

    :hover {
        color: #04aaff;
        cursor: pointer;
    }
`;

const Source = styled.h4`
    margin: 0;
    font-size: 11px;
    font-weight: 400;
    line-height: 1.2em;
`;

const Time = styled.span`
    margin: 0;
    font-weight: lighter;
    line-height: 1.2em;
    font-size: 10px;
    color: #444;
`;
