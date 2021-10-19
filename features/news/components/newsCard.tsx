import React from "react";
import { Col, Row, Skeleton } from "antd";
import styled from "styled-components";
import { renderNewsBox } from "@features/home/components/latestNews";
import { newsDataTypes } from "@features/home/api/cityDataTypes";

import FirstNewsCard from "./firstNewsCard";
import OtherNewsCard from "./otherNewsCard";
import { TFunction } from "next-i18next";

type propTypes = {
    newsList: newsDataTypes[] | null;
    teamId: number;
    teamColor: string;
};

const NewsCard = ({ newsList, teamId, teamColor }: propTypes) => {
    return (
        <Container>
            <WebSizeCol xs={0} md={24}>
                {newsList ? (
                    <FirstNewsCard
                        news={newsList[0]}
                        teamId={teamId}
                        teamColor={teamColor}
                    />
                ) : (
                    <FirstNewsCard
                        news={null}
                        teamId={teamId}
                        teamColor={teamColor}
                    />
                )}
                <Row gutter={30}>
                    {newsList
                        ? newsList.slice(1).map((news, index) => (
                              <Col span={6} key={news.title}>
                                  <OtherNewsCard news={news} teamId={teamId} />
                              </Col>
                          ))
                        : Array.from(Array(5).keys()).map((index) => (
                              <Col span={6} key={index}>
                                  <OtherNewsCard news={null} teamId={teamId} />
                              </Col>
                          ))}
                </Row>
            </WebSizeCol>
            <Col xs={24} md={0}>
                {newsList
                    ? newsList.map((news, index) =>
                          renderNewsBox(news, index, teamId)
                      )
                    : Array.from(Array(5).keys()).map((_) => (
                          <NewsBox
                              style={{ backgroundColor: "grey" }}
                              xs={24}
                              md={6}
                              key={_}
                          >
                              <BackFilter>
                                  <Skeleton active />
                              </BackFilter>
                          </NewsBox>
                      ))}
            </Col>
        </Container>
    );
};

export default NewsCard;

const Container = styled.div`
    padding: 0 3%;
`;

const WebSizeCol = styled(Col)``;

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
