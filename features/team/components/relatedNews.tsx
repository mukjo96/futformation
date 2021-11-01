import {
    newsDataTypes,
    playerInfoDataTypes,
} from "@features/home/api/cityDataTypes";
import { renderNewsBox } from "@features/home/components/latestNews";
import OtherNewsCard from "@features/news/components/otherNewsCard";
import { Col, Empty, Row } from "antd";
import React from "react";
import styled from "styled-components";

type propTypes = {
    playerData: playerInfoDataTypes;
};

const RelatedNews = ({ playerData }: propTypes) => {
    if (playerData.relatedNews.length === 0) {
        return (
            <EmptyCol>
                <Empty />
            </EmptyCol>
        );
    } else {
        return (
            <StyledRow justify="center" gutter={30}>
                {playerData.relatedNews.map(
                    (news: newsDataTypes, index: number) => (
                        // renderNewsBox(news, index, playerData.origin.teamId)

                        <Col span={6} key={index}>
                            <OtherNewsCard
                                news={news}
                                teamId={playerData.origin.teamId}
                            />
                        </Col>
                    )
                )}
            </StyledRow>
        );
    }
};

export default RelatedNews;

const EmptyCol = styled(Col)`
    margin-top: 5%;
`;

const StyledRow = styled(Row)`
    margin-top: 2%;
`;
