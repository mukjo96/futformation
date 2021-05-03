import React, { useEffect, useState } from "react";
import { Row, Col, Divider } from "antd";
import { getPlayerInfo } from "../api/getCityData.api";
import Loading from "@features/common/Loading";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const PlayerInfo = ({ id }) => {
    const [playerData, setPlayerData] = useState<any>();
    const [isLoading, setIsLoading] = useState(true);

    console.log(id);
    useEffect(() => {
        id !== 0 &&
            getPlayerInfo(id)
                .then((data) => {
                    setPlayerData(data);
                })
                .then((_) => {
                    setIsLoading(false);
                });
    }, [id]);

    if (isLoading) {
        return <Loading />;
    } else {
        console.log(playerData);
        const statData = {};
        playerData.careerStatistics[0].seasons[0].stats[0].statsArr.map(
            (props) => (statData[props[0]] = props[1])
        );
        const conversion = Math.floor(
            (statData["Goals"] /
                (statData["Shots on target"] + statData["Shots off target"])) *
                100
        );
        const dribbles = Math.floor(
            (statData["Successful dribbles"] / statData["Attempted dribbles"]) *
                100
        );
        const tackles = Math.floor(
            (statData["Successful tackles"] / statData["Attempted tackles"]) *
                100
        );
        return (
            <Container>
                <StyledCol span={12}>
                    {playerData.playerProps.map((props) => {
                        return (
                            props.title === "Shirt" && (
                                <ShirtDiv>
                                    <span>#</span>
                                    <ShirtNumber>{props.value}</ShirtNumber>
                                </ShirtDiv>
                            )
                        );
                    })}
                    <PlayerName>{playerData.name}</PlayerName>
                    <PlayerPosition>
                        {playerData.origin.positionDesc.primaryPosition}
                    </PlayerPosition>
                </StyledCol>
                <StyledCol span={12}>
                    <LeagueName>{`${playerData.careerStatistics[0].seasons[0].name} STATS`}</LeagueName>

                    {renderStat(
                        "Games Played",
                        statData["Matches started"] + statData["Subbed in"]
                    )}
                    {renderStat("Minutes Played", statData["Minutes played"])}
                    {renderStat("Starting XI", statData["Matches started"])}
                    {renderStat("Goals", statData["Goals"])}
                    {renderStat("Assists", statData["Assists"])}
                    <CircularRow>
                        {renderCircular(conversion, conversion, "Conversion")}
                        {renderCircular(dribbles, dribbles, "Dribbles")}
                        {renderCircular(tackles, tackles, "Tackles")}
                    </CircularRow>
                </StyledCol>
            </Container>
        );
    }
};

export default PlayerInfo;

const renderStat = (title: string, data: number) => {
    return (
        <>
            <StatList key={title}>
                <StatTitle>{title}</StatTitle>
                <StatData>{data}</StatData>
            </StatList>
            <StyledDivider />
        </>
    );
};

const renderCircular = (value: number, text: number, title: string) => {
    return (
        <CircularCol span={6}>
            <CircularProgressbar
                value={value}
                text={`${text}%`}
                strokeWidth={4}
                styles={buildStyles({
                    // Text size
                    textSize: "26px",

                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,

                    // Colors
                    textColor: "black",
                    trailColor: "#d6d6d6",
                    backgroundColor: "#1C2C5B",
                })}
            />
            <CircularTitle>{title}</CircularTitle>
        </CircularCol>
    );
};
const Container = styled(Row)`
    background-color: rgba(108, 171, 221, 0.1);
    height: 100%;
    align-self: center;
`;

const StyledCol = styled(Col)`
    padding: 5% 10%;
`;

const ShirtDiv = styled.div`
    display: flex;

    span {
        color: #1c2c5b;
        margin-top: 4px;
    }
`;

const ShirtNumber = styled.span`
    font-size: 28px;
    margin-top: 0 !important;
`;

const PlayerName = styled.h2`
    font-size: 28px;
    font-weight: bold;
    margin: 0;
`;

const PlayerPosition = styled.h5``;

const LeagueName = styled.h3`
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 16px;
`;

const StatList = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StatTitle = styled.span`
    color: darkgray;
    font-size: 12px;
`;

const StatData = styled.span`
    font-size: 13px;
    font-weight: bold;
`;

const StyledDivider = styled(Divider)`
    margin: 8px;
`;

const CircularRow = styled(Row)`
    margin-top: 24px;
    justify-content: space-between;
`;

const CircularCol = styled(Col)`
    text-align: center;
`;

const CircularTitle = styled.span`
    color: darkgray;
    font-size: 10px;
`;
