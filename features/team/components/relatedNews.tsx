import { renderNewsBox } from "@features/home/components/latestNews";
import { Col, Empty, Row } from "antd";
import React from "react";
import styled from "styled-components";

const RelatedNews = ({ playerData }) => {
    if (playerData.relatedNews.length === 0) {
        return (
            <EmptyCol>
                <Empty />
            </EmptyCol>
        );
    } else {
        return (
            <StyledRow justify="center">
                {playerData.relatedNews.map((news, index) =>
                    renderNewsBox(news, index, playerData.origin.teamId)
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
    padding-left: 12px;
    padding-right: 12px;
    .ant-col {
        margin: 12px;
    }

    div {
        border-radius: 5%;
    }
`;
