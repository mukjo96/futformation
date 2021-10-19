import React from "react";
import { Col, Row } from "antd";
import styled from "styled-components";
import { renderNewsBox } from "@features/home/components/latestNews";
import { newsDataTypes } from "@features/home/api/cityDataTypes";
import { useTranslation } from "next-i18next";

import FirstNewsCard from "./firstNewsCard";
import OtherNewsCard from "./otherNewsCard";

type propTypes = {
    newsList: newsDataTypes[];
    teamId: number;
    teamColor: string;
};

const NewsCard = ({ newsList, teamId, teamColor }: propTypes) => {
    const { t } = useTranslation("common");

    return (
        <Container>
            <WebSizeCol xs={0} md={24}>
                <FirstNewsCard
                    news={newsList[0]}
                    teamId={teamId}
                    teamColor={teamColor}
                    t={t}
                />
                <Row gutter={30}>
                    {newsList.slice(1).map((news, index) => (
                        <Col
                            span={6}
                            key={news.title}
                            className="otherNewsCard"
                        >
                            <OtherNewsCard news={news} teamId={teamId} t={t} />
                        </Col>
                    ))}
                </Row>
            </WebSizeCol>
            <Col xs={24} md={0}>
                {newsList.map((news, index) =>
                    renderNewsBox(news, index, teamId)
                )}
            </Col>
        </Container>
    );
};

export default NewsCard;

const Container = styled.div`
    padding: 0 3%;
`;

const WebSizeCol = styled(Col)``;
