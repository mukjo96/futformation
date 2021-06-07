import { renderNewsBox } from "@features/home/components/latestNews";
import { Col, Row } from "antd";
import React from "react";
import styled from "styled-components";

const RelatedNews = ({ playerData }) => {
    return (
        <StyledRow justify="center">
            {playerData.relatedNews.map((news, index) =>
                renderNewsBox(news, index, playerData.origin.teamId)
            )}
        </StyledRow>
    );
};

export default RelatedNews;

const StyledRow = styled(Row)`
    .ant-col {
        margin: 12px;
    }

    div {
        border-radius: 5%;
    }
`;
