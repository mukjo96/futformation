import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { Row, Col, Avatar, Divider, List } from "antd";
import Slide from "react-reveal/Slide";
import BlockTitle from "./Title/blockTitle";

import Link from "next/link";
import {
    playerStatDataTypes,
    statPlayer,
    topPlayersDataTypes,
} from "../api/cityDataTypes";

type dataTypes = {
    statList: playerStatDataTypes;
    color: string;
    teamId: number;
};

const PlayerStats = ({ statList, color, teamId }: dataTypes) => {
    const statData = statList[0];
    const tableData = statList[1];
    const [teamRank, setTeamRank] = useState(-1);

    useEffect(() => {
        tableData && findTeamRank();
    }, [teamId]);

    function findTeamRank() {
        tableData.tables[0].table.map((team, index) => {
            if (team.id === teamId) {
                setTeamRank(index);
            }
        });
    }

    const renderStatList = (
        listData: Array<statPlayer>,
        category: "Ratings" | "Goals" | "Assists"
    ) => {
        return (
            <StyledCol xs={24} md={6}>
                <Link href={`/players/${listData[0].id}`}>
                    <HeadRow>
                        <Col>
                            <StatTitle>{category}</StatTitle>
                            <HeadName teamcolor={color}>
                                {listData[0].name}
                            </HeadName>
                            <HeadStat teamcolor={color}>
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
                                    <PlayerName teamcolor={color}>
                                        {player.name}
                                    </PlayerName>
                                    <PlayerData teamcolor={color}>
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

    const tableStart = teamRank < 3 ? 0 : teamRank - 2;
    const tableEnd =
        tableStart < 3
            ? tableStart + 5
            : teamRank > tableData.tables[0].table.length - 4
            ? tableData.tables[0].table.length - 1
            : teamRank + 2;

    return (
        <>
            {statData.byRating.length !== 0 && (
                <Container>
                    <BlockTitle
                        title="PLAYER STATS"
                        link="players"
                        linktext="player stats"
                        theme="light"
                    />
                    <Slide bottom cascade ssrFadeout>
                        <ContainRow>
                            {renderStatList(statData.byRating, "Ratings")}
                            {renderStatList(statData.byGoals, "Goals")}
                            {renderStatList(statData.byAssists, "Assists")}

                            <ImageCol xs={24} md={6}>
                                <List
                                    size="small"
                                    style={{
                                        textAlign: "center",
                                        fontSize: "12px",
                                    }}
                                >
                                    <StyledItem
                                        isteam={"false"}
                                        teamcolor={color}
                                    >
                                        <Col span={2}>#</Col>
                                        <Col span={14}>TEAM</Col>
                                        <Col span={2}>W</Col>
                                        <Col span={2}>D</Col>
                                        <Col span={2}>L</Col>
                                    </StyledItem>
                                    {tableData.tables[0].table
                                        .slice(tableStart, tableEnd)
                                        .map((team) => (
                                            <StyledItem
                                                key={team.id}
                                                isteam={(
                                                    team.id === teamId
                                                ).toString()}
                                                teamcolor={color}
                                            >
                                                <Col span={2}>{team.idx}</Col>
                                                <Col span={14}>{team.name}</Col>
                                                <Col span={2}>{team.wins}</Col>
                                                <Col span={2}>{team.draws}</Col>
                                                <Col span={2}>
                                                    {team.losses}
                                                </Col>
                                            </StyledItem>
                                        ))}
                                </List>
                            </ImageCol>
                        </ContainRow>
                    </Slide>
                </Container>
            )}
        </>
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

const HeadName = styled.h5<{ teamcolor: string }>`
    font-size: 13px;
    font-weight: bold;
    margin: 0;
    :hover {
        color: ${(props) => props.teamcolor};
    }
`;

const HeadStat = styled.span<{ teamcolor: string }>`
    font-size: 18px;
    color: ${(props) => props.teamcolor};
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

const PlayerName = styled.span<{ teamcolor: string }>`
    font-size: 12px;
    :hover {
        color: ${(props) => props.teamcolor};
    }
`;

const PlayerData = styled.span<{ teamcolor: string }>`
    font-size: 13px;
    color: ${(props) => props.teamcolor};
    font-weight: bold;
`;

const ImageCol = styled(Col)`
    padding-top: 16px;
    padding-left: 16px;
`;

const StyledItem = styled(List.Item)<{ isteam: string; teamcolor: string }>`
    background-color: ${(props) =>
        props.isteam === "true" && props.teamcolor + "19"};
`;
