import MoreButton from "@features/common/button/MoreButton";

import Fade from "react-reveal/Fade";
import { matchDataTypes } from "@features/home/api/cityDataTypes";
import { Collapse, List, Row, Col, Divider } from "antd";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { matchDetailTypes } from "../types/matchDataTypes";
const { Panel } = Collapse;

type dataType = {
    matchData: Array<matchDataTypes>;
    currentMonth: string;
};

const MatchList = ({ matchData, currentMonth }: dataType) => {
    return (
        <Container>
            <Fade bottom cascade ssrFadeout>
                <StyledCollapse
                    bordered={false}
                    defaultActiveKey={[currentMonth]}
                >
                    {Object.keys(matchData).map((key) => (
                        <Panel header={key} key={key}>
                            <List
                                itemLayout="vertical"
                                dataSource={matchData[key]}
                                renderItem={(item: matchDataTypes) => {
                                    let isCityWin: string;
                                    if (item.home.name === "Man City") {
                                        item.home.score > item.away.score
                                            ? (isCityWin = "win")
                                            : item.home.score ===
                                              item.away.score
                                            ? (isCityWin = "draw")
                                            : (isCityWin = "lose");
                                    } else {
                                        item.away.score > item.home.score
                                            ? (isCityWin = "win")
                                            : item.away.score ===
                                              item.home.score
                                            ? (isCityWin = "draw")
                                            : (isCityWin = "lose");
                                    }
                                    return (
                                        <List.Item>
                                            <List.Item.Meta
                                                style={{ margin: 0 }}
                                                title={
                                                    <>
                                                        <MatchScore>
                                                            <div>
                                                                <TeamLogo
                                                                    src={`https://images.fotmob.com/image_resources/logo/teamlogo/${item.home.id}_small.png`}
                                                                    width="40px"
                                                                />
                                                                <TeamLogo
                                                                    src={`https://images.fotmob.com/image_resources/logo/teamlogo/${item.away.id}_small.png`}
                                                                    width="40px"
                                                                />
                                                            </div>
                                                            <ScoreCol>
                                                                <LiveText>
                                                                    {item.status
                                                                        .started &&
                                                                    !item.status
                                                                        .finished
                                                                        ? "LIVE"
                                                                        : ""}
                                                                </LiveText>
                                                                <ScoreH4
                                                                    iscitywin={
                                                                        isCityWin
                                                                    }
                                                                >
                                                                    {
                                                                        item
                                                                            .status
                                                                            .scoreStr
                                                                    }{" "}
                                                                    {item.status
                                                                        .started &&
                                                                        isCityWin.toUpperCase()[0]}
                                                                </ScoreH4>
                                                            </ScoreCol>
                                                        </MatchScore>
                                                        <CustomDivider
                                                            ispast={item.isPastMatch.toString()}
                                                            iscitywin={
                                                                isCityWin
                                                            }
                                                        />
                                                    </>
                                                }
                                            />
                                            <MatchDescription>
                                                <div>
                                                    <TeamName>{`${item.home.name} vs ${item.away.name}`}</TeamName>
                                                    <TournamentName>
                                                        {item.tournament.name}
                                                    </TournamentName>
                                                    <StartDate>
                                                        {item.status
                                                            .startDateStr
                                                            ? item.status
                                                                  .startDateStr
                                                            : item.status
                                                                  .liveTime
                                                                  .short}
                                                        {item.status
                                                            .startTimeStr &&
                                                            ` | ${item.status.startTimeStr}`}
                                                    </StartDate>
                                                </div>
                                                <Link
                                                    href={`matches/${item.id}`}
                                                >
                                                    <a
                                                        style={{
                                                            textDecoration:
                                                                "none",
                                                            alignSelf:
                                                                "flex-end",
                                                        }}
                                                    >
                                                        <MoreButton
                                                            value="More"
                                                            size="medium"
                                                        />
                                                    </a>
                                                </Link>
                                            </MatchDescription>
                                        </List.Item>
                                    );
                                }}
                            />
                        </Panel>
                    ))}
                </StyledCollapse>
            </Fade>
        </Container>
    );
};
export default MatchList;

const Container = styled.div`
    padding: 56px;
`;

const StyledCollapse = styled(Collapse)`
    background-color: white;
`;

const MatchScore = styled(Row)`
    justify-content: space-between;
    align-items: flex-end;
`;

const TeamLogo = styled.img`
    margin-right: 12px;
    @media screen and (max-width: 768px) {
        margin-right: 2vw;
    }
`;

const ScoreCol = styled(Col)`
    align-content: space-between;
`;

const LiveText = styled.h4`
    font-size: 12px;
    font-weight: 500;
    margin: 0;
    color: #ec3325;
`;
const ScoreH4 = styled.h4<{ iscitywin: string }>`
    font-size: 16px;
    font-weight: 500;
    margin: 0;
    color: ${(props) =>
        props.iscitywin === "win"
            ? "#6cabdd"
            : props.iscitywin === "draw"
            ? "darkgrey"
            : "#EC3325"};

    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

const CustomDivider = styled(Divider)<{ ispast: string; iscitywin: string }>`
    margin: 10px 0;
    background: ${(props) =>
        props.ispast === "true"
            ? props.iscitywin === "win"
                ? "#6cabdd"
                : props.iscitywin === "draw"
                ? "lightgrey"
                : "#EC3325"
            : "lightgrey"};
    height: ${(props) => (props.ispast === "true" ? "2px" : "0.5px")};
`;

const MatchDescription = styled.div`
    display: flex;
    justify-content: space-between;
`;

const TournamentName = styled.h5`
    font-size: 10px;
    color: darkgray;
    height: 10px;
`;

const TeamName = styled.h3`
    font-size: 14px;
    margin: 0;
`;

const StartDate = styled.span`
    font-size: 10px;
    height: 10px;
`;