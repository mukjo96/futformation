import { playerInfoDataTypes } from "@features/home/api/cityDataTypes";
import { Avatar, Col, Row } from "antd";
import React from "react";
import styled from "styled-components";

type playerDataTypes = {
    playerData: playerInfoDataTypes;
};
const PlayerHeader = ({ playerData }: playerDataTypes) => {
    return (
        <Container>
            <Row>
                <Col xs={{ span: 24 }} md={{ span: 6 }}>
                    <Avatar
                        size={100}
                        shape="square"
                        src={`https://images.fotmob.com/image_resources/playerimages/${playerData.id}.png`}
                    />
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 18 }}>
                    <Infos>
                        <Title>{playerData.name}</Title>
                        <Row>
                            <Avatar
                                size={24}
                                shape="circle"
                                src={`https://images.fotmob.com/image_resources/logo/teamlogo/${playerData.origin.teamId}_small.png`}
                            />

                            <Release>{playerData.origin.teamName}</Release>
                        </Row>
                    </Infos>
                    <Row></Row>
                </Col>
            </Row>
        </Container>
    );
};
export default PlayerHeader;

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 2vh 2vw;

    @media screen and (max-width: 768px) {
        padding: 5px 25px;
        padding-bottom: 25px;
    }
`;

const Infos = styled.div`
    display: flex-box;
    width: 100%;
    align-items: baseline;
    @media screen and (max-width: 768px) {
    }
`;

const Title = styled.h1`
    color: #333333;
    font-weight: 600;
    font-size: 24px;
    line-height: 1.5;
    margin-left: 3px;
    margin-bottom: 0;

    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`;

const Release = styled.h5`
    color: #555555;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 0;
    margin-left: 4px;
    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`;
