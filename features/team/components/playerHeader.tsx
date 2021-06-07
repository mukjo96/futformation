import { playerInfoDataTypes } from "@features/home/api/cityDataTypes";
import { Avatar, Col, Row } from "antd";
import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

type playerDataTypes = {
    playerData: playerInfoDataTypes;
};
const PlayerHeader = ({ playerData }: playerDataTypes) => {
    return (
        <Container>
            <Fade bottom cascade ssrFadeout>
                <Row>
                    <AvatarCol xs={{ span: 24 }} md={{ span: 6 }}>
                        <Col>
                            <Avatar
                                size={100}
                                shape="square"
                                style={{ marginBottom: "12px" }}
                                src={`https://images.fotmob.com/image_resources/playerimages/${playerData.id}.png`}
                            />
                        </Col>
                        <Col xs={{ span: 0 }} md={{ span: 24 }}>
                            <PrimaryPosition>
                                {playerData.origin.positionDesc.primaryPosition}
                            </PrimaryPosition>
                            <SubPosition>
                                {
                                    playerData.origin.positionDesc
                                        ?.nonPrimaryPositions
                                }
                            </SubPosition>
                        </Col>
                    </AvatarCol>
                    <Col xs={{ span: 24 }} md={{ span: 18 }}>
                        <Row>
                            <Col xs={{ span: 12 }} md={{ span: 24 }}>
                                <Title>{playerData.name}</Title>
                                <Row>
                                    <Avatar
                                        size={24}
                                        shape="circle"
                                        src={`https://images.fotmob.com/image_resources/logo/teamlogo/${playerData.origin.teamId}_small.png`}
                                    />
                                    <Release>
                                        {playerData.origin.teamName}
                                    </Release>
                                </Row>
                            </Col>
                            <Col xs={{ span: 12 }} md={{ span: 0 }}>
                                <PrimaryPosition>
                                    {
                                        playerData.origin.positionDesc
                                            .primaryPosition
                                    }
                                </PrimaryPosition>
                                <SubPosition>
                                    {
                                        playerData.origin.positionDesc
                                            ?.nonPrimaryPositions
                                    }
                                </SubPosition>
                            </Col>
                        </Row>
                        <Row>
                            {playerData.playerProps.map((props) => (
                                <Col span={12} key={props.title}>
                                    <DetailDesc>
                                        <Tagsmalltitle>
                                            {props.title.toUpperCase()}
                                        </Tagsmalltitle>
                                        {props.value}
                                    </DetailDesc>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Fade>
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

const AvatarCol = styled(Col)`
    margin-bottom: 12px;
`;

const Title = styled.h1`
    font-weight: 600;
    font-size: 24px;
    line-height: 1.5;
    margin-bottom: 0;

    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`;
const PrimaryPosition = styled.h3`
    font-size: 18px;
    line-height: 1.5;
    margin: 0;
    font-weight: 600;
    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

const SubPosition = styled.h5`
    font-size: 12px;
    margin: 0;
    color: #555555;
    @media screen and (max-width: 768px) {
        font-size: 10px;
    }
`;
const Release = styled.h5`
    color: #555555;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.7;
    margin-bottom: 0;
    margin-left: 4px;
    @media screen and (max-width: 768px) {
        font-size: 12px;
        line-height: 2.1;
    }
`;

const DetailDesc = styled.div`
    margin-top: 1rem;
`;

const Smalltitle = styled.h5`
    font-size: 12px;
    color: #a0a0a0;
    margin-bottom: 6px;
`;

const Tagsmalltitle = styled.h5`
    font-size: 12px;
    color: #a0a0a0;
    margin-bottom: 0;
`;
