import React from "react";
import { Row, Col, Avatar } from "antd";
import styled from "styled-components";
import { ArrowRightOutlined } from "@ant-design/icons";
import { newsDataTypes } from "@features/home/api/cityDataTypes";
import { TFunction } from "next-i18next";
import { translateLate } from "utils/moment/translateMoment";

type propTypes = {
    news: newsDataTypes;
    teamId: number;
    teamColor: string;
    t: TFunction;
};

const FirstNewsCard = ({ news, teamId, teamColor, t }: propTypes) => {
    return (
        <FirstNews>
            <Col
                md={11}
                style={{
                    backgroundImage: `url(${news.imageUrl})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            ></Col>
            <FirstNewsContents md={11} offset={1}>
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
                    <Row align="middle">
                        <Col span={18}>
                            <Title>{news.title}</Title>
                        </Col>
                        <Col offset={2} span={4}>
                            <ArrowRightOutlined style={{ fontSize: "1.5em" }} />
                        </Col>
                    </Row>
                </TitleDiv>
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
                            {translateLate(news.sourceStr.split(" - ")[1], t)}
                        </Time>
                    </div>
                </Row>

                <DivideLine style={{ backgroundColor: teamColor }}></DivideLine>
            </FirstNewsContents>
        </FirstNews>
    );
};

export default FirstNewsCard;

const FirstNews = styled(Row)`
    padding-top: 5%;
    margin-bottom: 5%;
`;

const FirstNewsContents = styled(Col)`
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Category = styled.span`
    font-size: 11px;
    color: #1c2c5b;
    font-weight: 300;
`;

const TitleDiv = styled.div`
    :hover {
        h2,
        span {
            color: slateblue;
        }
        cursor: pointer;
    }
`;

const Title = styled.h2`
    font-weight: bold;
`;

const Source = styled.h4`
    margin: 0;
    font-size: 11px;
    font-weight: 400;
    line-height: 1.2em;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Time = styled.span`
    margin: 0;
    font-weight: lighter;
    line-height: 1.2em;
    font-size: 10px;
    color: #444;
`;

const DivideLine = styled.div`
    height: 2px;
    width: 100%;
`;
