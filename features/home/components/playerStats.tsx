import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import BlockTitle from "./Title/blockTitle";

const PlayerStats = () => {
    return (
        <Container>
            <BlockTitle
                title="PLAYER STATS"
                link="players"
                linktext="player stats"
                theme="light"
            />
            <Row>
                <StyledCol span={8}>Ratings</StyledCol>
                <StyledCol span={8}>Goals</StyledCol>
                <StyledCol span={8}>Assists</StyledCol>
            </Row>
        </Container>
    );
};

export default PlayerStats;

const Container = styled.div`
    padding: 2vw;
    @media screen and (max-width: 768px) {
        padding: 4vw;
    }
`;

const StyledCol = styled(Col)``;
