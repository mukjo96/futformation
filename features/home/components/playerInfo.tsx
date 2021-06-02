import React, { useEffect, useRef, useState } from "react";
import { Row, Col, Divider, Avatar, Result } from "antd";
import { getPlayerInfo } from "../api/getCityData.api";

import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import MoreButton from "@features/common/button/MoreButton";
import Link from "next/link";
import { playerInfoDataTypes } from "../api/cityDataTypes";
import LoadingView from "@features/common/loadingView";

const PlayerInfo = ({ id }) => {
    const [playerData, setPlayerData] = useState<playerInfoDataTypes>();
    const [isLoading, setIsLoading] = useState(true);
    const [statData, setStatData] = useState({});
    const [propData, setPropData] = useState({});

    useEffect(() => {
        let isSubscribed = true;

        id !== 0 &&
            getPlayerInfo(id)
                .then((data) => {
                    isSubscribed ? setPlayerData(data) : null;
                })
                .catch((error) => {
                    if (isSubscribed) {
                        setPlayerData((prevState) => ({
                            ...prevState,
                            error,
                        }));
                    }
                });
        if (playerData) {
            propDataToObject();
            statDataToObject();
            setIsLoading(false);
        }

        return () => (isSubscribed = false);
    }, [id, playerData]);

    if (isLoading) {
        return (
            <Col span={24} style={{ textAlign: "center" }}>
                <LoadingView />
            </Col>
        );
    } else {
        return (
            <Container>
                <StyledCol xs={24} md={12}>
                    <ShirtDiv>
                        <span>#</span>
                        <ShirtNumber>{propData["Shirt"]}</ShirtNumber>
                    </ShirtDiv>
                    <PlayerName>{playerData.name}</PlayerName>
                    <PlayerPosition>
                        {playerData.origin.positionDesc.primaryPosition}
                    </PlayerPosition>
                    <Avatar
                        style={{ margin: "16px 0" }}
                        src={`https://images.fotmob.com/image_resources/logo/teamlogo/${propData["Country"]}.png`}
                        size={64}
                    />
                    <Link href={`players/${playerData.id}`}>
                        <a style={{ textDecoration: "none" }}>
                            <MoreButton value="More" size="medium" />
                        </a>
                    </Link>
                </StyledCol>
                {playerData.careerStatistics ? (
                    <StyledCol xs={24} md={12}>
                        <LeagueName>{`${playerData.careerStatistics[0].seasons[0].name} STATS`}</LeagueName>
                        {renderStat(
                            "Games Played",
                            playerData.careerStatistics[0].seasons[0].matches
                        )}
                        {renderStat(
                            "Minutes Played",
                            statData["Minutes played"]
                        )}
                        {renderStat("Starting XI", statData["Matches started"])}
                        {renderStat("Goals", statData["Goals"])}
                        {renderStat("Assists", statData["Assists"])}
                        <CircularRow>
                            {renderCircular(
                                statData["conversion"],
                                statData["conversion"],
                                "Conversion"
                            )}
                            {renderCircular(
                                statData["dribbles"],
                                statData["dribbles"],
                                "Dribbles"
                            )}
                            {renderCircular(
                                statData["tackles"],
                                statData["tackles"],
                                "Tackles"
                            )}
                        </CircularRow>
                    </StyledCol>
                ) : (
                    <ErrorCol xs={24} md={12}>
                        <Result status="error" title="Sorry, no data!" />
                    </ErrorCol>
                )}
            </Container>
        );
    }

    function propDataToObject() {
        const virPropData = {};
        playerData.playerProps.map((props) => {
            props.title === "Country"
                ? (virPropData[props.title] = props.icon.id.toLowerCase())
                : (virPropData[props.title] = props.value);
        });
        setPropData(virPropData);
    }
    function statDataToObject() {
        const virStatData = {};
        if (playerData.careerStatistics) {
            playerData.careerStatistics[0].name ===
                "England - Premier League" &&
                playerData.careerStatistics[0].seasons[0].stats[0].statsArr.map(
                    (props) => (virStatData[props[0]] = props[1])
                );
            virStatData["conversion"] = Math.floor(
                (statData["Goals"] /
                    (statData["Shots on target"] +
                        statData["Shots off target"])) *
                    100
            );
            virStatData["dribbles"] = Math.floor(
                (statData["Successful dribbles"] /
                    statData["Attempted dribbles"]) *
                    100
            );
            virStatData["tackles"] = Math.floor(
                (statData["Successful tackles"] /
                    statData["Attempted tackles"]) *
                    100
            );
            virStatData["Matches started"] =
                playerData.careerStatistics[0].seasons[0].matches -
                playerData.careerStatistics[0].seasons[0].subIn;
            setStatData(virStatData);
        }
    }
};

export default PlayerInfo;

const renderStat = (title: string, data: number) => {
    return (
        <>
            <StatList key={title}>
                <StatTitle>{title}</StatTitle>
                <StatData>{data ? data : 0}</StatData>
            </StatList>
            <StyledDivider />
        </>
    );
};

const renderCircular = (value: number, text: number, title: string) => {
    return (
        <CircularCol span={6}>
            <CircularProgressbar
                value={value ? value : 0}
                text={text ? `${text}%` : "0%"}
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
        color: #6cabdd;
        margin-top: 4px;
    }
`;

const ShirtNumber = styled.span`
    font-size: 28px;
    color: #6cabdd;
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

const ErrorCol = styled(Col)`
    justify-content: center;
    align-items: center;
    display: flex;
    height: 393px;
`;
