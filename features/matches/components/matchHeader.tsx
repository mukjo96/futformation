import { faFutbol } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row, Tooltip } from "antd";
import Fade from "react-reveal-effects/Fade";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { matchDetailTypes, matchEventTypes } from "../types/matchDataTypes";

type dataType = {
    matchData: matchDetailTypes;
};

const MatchHeader = ({ matchData }: dataType) => {
    const [impEvent, setImpEvent] = useState<matchEventTypes[][]>([[], []]);
    const events = matchData.content.matchFacts.events.events;
    const infoBox = matchData.content.matchFacts.infoBox;
    const header = matchData.header;

    function eventClassification(events: Array<matchEventTypes>) {
        const homeEvents = [];
        const awayEvents = [];
        events.map((data) => {
            if (data.type === "Goal" || data.type === "Card") {
                data.isHome ? homeEvents.push(data) : awayEvents.push(data);
            }
        });

        return [homeEvents, awayEvents];
    }

    function renderEvent(data: matchEventTypes, ishome: boolean) {
        if (ishome)
            return data.type === "Goal" ? (
                <>
                    <Row
                        style={{
                            alignItems: "center",
                            justifyContent: "flex-end",
                        }}
                    >
                        <EventText>
                            {` ${
                                data.timeStr
                            }${"\t"}${data.nameStr.toUpperCase()}`}
                        </EventText>

                        <GoalIcon icon={faFutbol} />
                    </Row>
                    <Assist>{data.assistStr}</Assist>
                </>
            ) : (
                <Row
                    style={{ alignItems: "center", justifyContent: "flex-end" }}
                >
                    <EventText>
                        {` ${data.timeStr}${"\t"}${data.nameStr.toUpperCase()}`}
                    </EventText>
                    <Card color={data.card} />
                </Row>
            );
        else
            return data.type === "Goal" ? (
                <Row style={{ alignItems: "center" }}>
                    <GoalIcon icon={faFutbol} />
                    <EventText>
                        {` ${data.timeStr}${"\t"}${data.nameStr.toUpperCase()}`}
                    </EventText>
                </Row>
            ) : (
                <Row style={{ alignItems: "center" }}>
                    <Card color={data.card} />
                    <EventText>
                        {` ${data.timeStr}${"\t"}${data.nameStr.toUpperCase()}`}
                    </EventText>
                </Row>
            );
    }

    useEffect(() => {
        setImpEvent(() => eventClassification(events));
    }, []);

    return (
        <Fade bottom cascade ssrFadeout>
            <TournamentName>
                {infoBox.Tournament.text.split(" - ")[0]?.toUpperCase()}
            </TournamentName>
            <Row
                style={{
                    justifyContent: "center",
                    marginBottom: "12px",
                }}
            >
                <Col xs={4} md={2}>
                    {matchData.content.matchFacts.teamForm &&
                        matchData.content.matchFacts.teamForm[0].map(
                            (match) => (
                                <Tooltip
                                    key={match.tooltipText}
                                    title={
                                        <>
                                            <TooltipText>
                                                {
                                                    match.tooltipText.split(
                                                        ": "
                                                    )[0]
                                                }
                                            </TooltipText>
                                            <TooltipText>
                                                {
                                                    match.tooltipText.split(
                                                        ": "
                                                    )[1]
                                                }
                                            </TooltipText>
                                        </>
                                    }
                                    color="#f7f7f7"
                                >
                                    <Row
                                        align="middle"
                                        justify="center"
                                        style={{ marginBottom: "4px" }}
                                    >
                                        <TeamLogo
                                            src={match.imageUrl}
                                            width="24px"
                                        />
                                        <TeamForm matchresult={match.result}>
                                            <span>
                                                {match.result === 1
                                                    ? "W"
                                                    : match.result === -1
                                                    ? "L"
                                                    : "D"}
                                            </span>
                                        </TeamForm>
                                    </Row>
                                </Tooltip>
                            )
                        )}
                </Col>
                <TeamScoreCol xs={6} md={7}>
                    <Row>
                        <TeamNameCol xs={24} md={8}>
                            <TitleLogo
                                src={header.teams[0].imageUrl}
                                width="100px"
                            />
                        </TeamNameCol>
                        <TeamNameCol xs={0} md={16}>
                            <TeamName ishome={true}>
                                {header.teams[0].name
                                    .replace(" ", "\n")
                                    ?.toUpperCase()}
                            </TeamName>
                        </TeamNameCol>
                    </Row>
                </TeamScoreCol>
                <TeamScoreCol xs={4} md={6}>
                    {header.teams[0].score > header.teams[1].score ? (
                        <Score>
                            <strong>{header.teams[0].score}</strong>
                            {` : ${header.teams[1].score}`}
                        </Score>
                    ) : header.teams[0].score < header.teams[1].score ? (
                        <Score>
                            {`${header.teams[0].score} : `}
                            <strong>{header.teams[1].score}</strong>
                        </Score>
                    ) : (
                        <Score>{`${header.teams[0].score} : ${header.teams[1].score}`}</Score>
                    )}
                </TeamScoreCol>
                <TeamScoreCol xs={6} md={7}>
                    <Row>
                        <TeamNameCol xs={0} md={16}>
                            <TeamName ishome={false}>
                                {header.teams[1].name
                                    .replace(" ", "\n")
                                    ?.toUpperCase()}
                            </TeamName>
                        </TeamNameCol>
                        <TeamNameCol xs={24} md={8}>
                            <TitleLogo
                                src={header.teams[1].imageUrl}
                                width="100px"
                            />
                        </TeamNameCol>
                    </Row>
                </TeamScoreCol>
                <Col xs={4} md={2}>
                    {matchData.content.matchFacts.teamForm &&
                        matchData.content.matchFacts.teamForm[1].map(
                            (match) => (
                                <Tooltip
                                    key={match.tooltipText}
                                    title={
                                        <>
                                            <TooltipText>
                                                {
                                                    match.tooltipText.split(
                                                        ": "
                                                    )[0]
                                                }
                                            </TooltipText>
                                            <TooltipText>
                                                {
                                                    match.tooltipText.split(
                                                        ": "
                                                    )[1]
                                                }
                                            </TooltipText>
                                        </>
                                    }
                                    color="#f7f7f7"
                                >
                                    <Row
                                        align="middle"
                                        justify="center"
                                        style={{ marginBottom: "4px" }}
                                    >
                                        <TeamForm matchresult={match.result}>
                                            <span>
                                                {match.result === 1
                                                    ? "W"
                                                    : match.result === -1
                                                    ? "L"
                                                    : "D"}
                                            </span>
                                        </TeamForm>
                                        <TeamLogo src={match.imageUrl} />
                                    </Row>
                                </Tooltip>
                            )
                        )}
                </Col>
            </Row>
            <Row
                style={{
                    justifyContent: "center",
                }}
            >
                <Col
                    style={{
                        textAlign: "center",
                        alignSelf: "flex-start",
                        marginBottom: "12px",
                    }}
                    xs={24}
                    md={0}
                >
                    <StadiumRound>{header.status.startDateStr}</StadiumRound>
                    <StadiumRound>
                        {infoBox.Stadium.name.toUpperCase()}
                    </StadiumRound>
                    <StadiumRound>
                        {infoBox.Tournament.text.split(" - ")[1]?.toUpperCase()}
                    </StadiumRound>
                </Col>
                <Col md={8} xs={12}>
                    {impEvent[0].map((data, index) => (
                        <div key={index}>{renderEvent(data, true)}</div>
                    ))}
                </Col>
                <Col
                    style={{ textAlign: "center", alignSelf: "flex-start" }}
                    xs={0}
                    md={6}
                >
                    <StadiumRound>{header.status.startDateStr}</StadiumRound>
                    <StadiumRound>
                        {infoBox.Stadium.name.toUpperCase()}
                    </StadiumRound>
                    <StadiumRound>
                        {infoBox.Tournament.text.split(" - ")[1]?.toUpperCase()}
                    </StadiumRound>
                </Col>
                <Col md={8} xs={12}>
                    {impEvent[1].map((data, index) => (
                        <div key={index}>{renderEvent(data, false)}</div>
                    ))}
                </Col>
            </Row>
        </Fade>
    );
};
export default MatchHeader;

const TournamentName = styled.h2`
    text-align: center;
    margin: 0;
    font-size: 14px;
`;

const TeamLogo = styled.img`
    width: 24px;
    height: 24px;

    @media screen and (max-width: 768px) {
        width: 18px;
        height: 18px;
    }
`;
const TitleLogo = styled.img`
    width: 100px;
    height: 100px;

    @media screen and (max-width: 992px) {
        width: 75px;
        height: 75px;
    }
    @media screen and (max-width: 768px) {
        width: 50px;
        height: 50px;
    }
`;

const TeamForm = styled.div<{ matchresult: number }>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) =>
        props.matchresult === 1
            ? "green"
            : props.matchresult === -1
            ? "red"
            : "darkgray"};
    width: 24px;
    height: 24px;
    text-align: center;
    color: white;
    border-radius: 6px;
    margin-right: 4px;
    margin-left: 4px;

    span {
        font-weight: 500;
        font-size: 12px;
        margin: 0;
    }

    @media screen and (max-width: 768px) {
        width: 18px;
        height: 18px;
        span {
            font-size: 10px;
        }
    }
`;

const TooltipText = styled.h5`
    margin: 0;
    text-align: center;
`;

const TeamScoreCol = styled(Col)`
    text-align: center;
    align-self: center;
`;

const TeamName = styled.h2<{ ishome: boolean }>`
    white-space: pre-wrap;
    font-size: 24px;
    margin: 0;
    text-align: ${(props) => (props.ishome ? "end" : "start")};

    @media screen and (max-width: 992px) {
        font-size: 18px;
    }
`;

const Score = styled.h3`
    margin: 0;
    font-size: 48px;

    strong {
        color: green;
        font-weight: 500;
    }
    @media screen and (max-width: 768px) {
        font-size: 24px;
    }
`;

const TeamNameCol = styled(Col)`
    text-align: center;
    align-self: center;
`;

const EventText = styled.span`
    margin-left: 12px;
    margin-right: 12px;

    @media screen and (max-width: 768px) {
        font-size: 10px;
        margin-left: 6px;
        margin-right: 6px;
    }
`;

const GoalIcon = styled(FontAwesomeIcon)`
    @media screen and (max-width: 768px) {
        font-size: 10px;
        margin: 0 0.2em;
    }
`;
const Card = styled.div<{ color: string }>`
    border-radius: 0.1em;
    align-self: center;
    background: ${(props) =>
        props.color === "Yellow" ? "#ffc659" : "#EC3325"};
    width: 0.6em;
    height: 1em;
    margin: 0 0.2em 0 0.2em;

    @media screen and (max-width: 768px) {
        width: 0.4em;
        height: 0.8em;
        margin: 0 0.3em;
    }
`;

const StadiumRound = styled.h5`
    margin: 0;
    font-size: 14px;
    font-weight: 400;
`;

const Assist = styled.h5`
    font-size: 10px;
    margin: 0;
    text-align: end;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
