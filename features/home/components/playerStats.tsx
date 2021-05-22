import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { Row, Col, Avatar, Divider } from "antd";
import Slide from "react-reveal/Slide";
import BlockTitle from "./Title/blockTitle";
import { getCityStats } from "../api/getCityData.api";
import Loading from "@features/common/Loading";
import Link from "next/link";
import { playerStatDataTypes } from "../api/cityDataTypes";

const PlayerStats = ({ statList }) => {
    return (
        <Container>
            <BlockTitle
                title="PLAYER STATS"
                link="players"
                linktext="player stats"
                theme="light"
            />
            <Slide bottom cascade ssrFadeout>
                <ContainRow>
                    {renderStatList(statList.byRating, "Ratings")}
                    {renderStatList(statList.byGoals, "Goals")}
                    {renderStatList(statList.byAssists, "Assists")}
                    <ImageCol
                        xs={24}
                        md={6}
                        style={{
                            backgroundImage:
                                "url(https://www.footyrenders.com/render/kevin-de-bruyne-29-359x540.png)",
                        }}
                    ></ImageCol>
                </ContainRow>
            </Slide>
        </Container>
    );
};

const renderStatList = (listData, category) => {
    return (
        <StyledCol xs={24} md={6}>
            <Link href={`/players/${listData[0].id}`}>
                <HeadRow>
                    <Col>
                        <StatTitle>{category}</StatTitle>
                        <HeadName>{listData[0].name}</HeadName>
                        <HeadStat>
                            {category === "Ratings"
                                ? listData[0].rating
                                : category === "Goals"
                                ? listData[0].goals
                                : listData[0].assists}
                        </HeadStat>
                    </Col>
                    <Avatar
                        size={70}
                        shape="square"
                        src={`https://images.fotmob.com/image_resources/playerimages/${listData[0].id}.png`}
                    />
                </HeadRow>
            </Link>
            <StyledDivider />
            {listData.slice(1, 4).map((player) => {
                return (
                    <Fragment key={player.id}>
                        <Link href={`/players/${player.id}`}>
                            <PlayerList>
                                <PlayerName>{player.name}</PlayerName>
                                <PlayerData>
                                    {category === "Ratings"
                                        ? player.rating
                                        : category === "Goals"
                                        ? player.goals
                                        : player.assists}
                                </PlayerData>
                            </PlayerList>
                        </Link>
                        <StyledDivider />
                    </Fragment>
                );
            })}
        </StyledCol>
    );
};
export default PlayerStats;

const Container = styled.div`
    padding: 28px;
    @media screen and (max-width: 768px) {
        padding: 4vw;
    }
`;

const ContainRow = styled(Row)``;

const StyledCol = styled(Col)`
    padding-top: 16px;
    padding-left: 33px;
    @media screen and (max-width: 768px) {
        padding-left: 0;
    }
`;

const HeadRow = styled(Row)`
    justify-content: space-between;
    cursor: pointer;

    /* border-right: 1px solid lightgrey; */
    @media screen and (max-width: 768px) {
        border-right: none;
        padding: 0 0 0 5vw;
    }
`;

const StatTitle = styled.span`
    color: darkgray;
    font-size: 12px;
    margin: 0;
`;

const HeadName = styled.h5`
    font-size: 13px;
    font-weight: bold;
    margin: 0;
    :hover {
        color: #6cabdd;
    }
`;

const HeadStat = styled.span`
    font-size: 18px;
    color: #6cabdd;
    font-weight: 600;
`;

const StyledDivider = styled(Divider)`
    margin: 0;
`;

const PlayerList = styled.div`
    display: flex;
    justify-content: space-between;

    cursor: pointer;
    padding: 12px 33px 12px 0;
    /* border-right: 1px solid lightgrey; */

    @media screen and (max-width: 768px) {
        border-right: none;
        padding: 12px 5vw 12px 5vw;
    }
`;

const PlayerName = styled.span`
    font-size: 12px;
    :hover {
        color: #6cabdd;
    }
`;

const PlayerData = styled.span`
    font-size: 13px;
    color: #6cabdd;
    font-weight: bold;
`;

const ImageCol = styled(Col)`
    padding-top: 16px;
    padding-left: 33px;
    background-position: top;
    background-repeat: no-repeat;
    background-size: contain;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;
