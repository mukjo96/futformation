import { faFutbol } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "antd";
import Fade from "react-reveal/Fade";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const MatchHeader = ({ matchData }) => {
    const [impEvent, setImpEvent] = useState([[], []]);
    const events = matchData.content.matchFacts.events.events;
    const infoBox = matchData.content.matchFacts.infoBox;
    const header = matchData.header;

    function eventClassification(events) {
        const homeEvents = [];
        const awayEvents = [];
        events.map((data) => {
            if (data.type === "Goal" || data.type === "Card") {
                data.isHome ? homeEvents.push(data) : awayEvents.push(data);
            }
        });

        return [homeEvents, awayEvents];
    }

    function renderEvent(data, ishome) {
        if (ishome)
            return data.type === "Goal" ? (
                <>
                    <Row
                        style={{
                            alignItems: "center",
                            justifyContent: "flex-end",
                        }}
                    >
                        <Col>
                            <EventText>
                                {` ${
                                    data.timeStr
                                }${"\t"}${data.nameStr.toUpperCase()}`}
                            </EventText>
                        </Col>
                        <FontAwesomeIcon icon={faFutbol} />
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
                    <FontAwesomeIcon icon={faFutbol} />
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

    console.log(impEvent);
    return (
        <Fade bottom cascade ssrFadeout>
            <div>
                <TournamentName>
                    {infoBox.Tournament.text.split(" - ")[0].toUpperCase()}
                </TournamentName>
                <Row
                    style={{
                        justifyContent: "center",
                    }}
                >
                    <TeamScoreCol span={8}>
                        <Row>
                            <TeamNameCol span={12}>
                                <TeamLogo
                                    src={header.teams[0].imageUrl}
                                    width="100px"
                                />
                            </TeamNameCol>
                            <TeamNameCol span={12}>
                                <TeamName ishome={true}>
                                    {header.teams[0].name
                                        .replace(" ", "\n")
                                        .toUpperCase()}
                                </TeamName>
                            </TeamNameCol>
                        </Row>
                    </TeamScoreCol>
                    <TeamScoreCol span={6}>
                        <Score>{`${header.teams[0].score} : ${header.teams[1].score}`}</Score>
                    </TeamScoreCol>
                    <TeamScoreCol span={8}>
                        <Row>
                            <TeamNameCol span={12}>
                                <TeamName ishome={false}>
                                    {header.teams[1].name
                                        .replace(" ", "\n")
                                        .toUpperCase()}
                                </TeamName>
                            </TeamNameCol>
                            <TeamNameCol span={12}>
                                <TeamLogo
                                    src={header.teams[1].imageUrl}
                                    width="100px"
                                />
                            </TeamNameCol>
                        </Row>
                    </TeamScoreCol>
                </Row>
                <Row
                    style={{
                        justifyContent: "center",
                    }}
                >
                    <Col span={8}>
                        {impEvent[0].map((data) => renderEvent(data, true))}
                    </Col>
                    <Col
                        style={{ textAlign: "center", alignSelf: "flex-start" }}
                        span={6}
                    >
                        <StadiumRound>
                            {infoBox.Stadium.name.toUpperCase()}
                        </StadiumRound>
                        <StadiumRound>
                            {infoBox.Tournament.text
                                .split(" - ")[1]
                                .toUpperCase()}
                        </StadiumRound>
                    </Col>
                    <Col span={8}>
                        {impEvent[1].map((data) => renderEvent(data, false))}
                    </Col>
                </Row>
            </div>
        </Fade>
    );
};
export default MatchHeader;

const TournamentName = styled.h2`
    text-align: center;
    margin: 0;
    font-size: 14px;
`;

const TeamLogo = styled.img``;

const TeamScoreCol = styled(Col)`
    text-align: center;
    align-self: center;
`;

const TeamName = styled.h2<{ ishome: boolean }>`
    white-space: pre-wrap;
    font-size: 24px;
    margin: 0;
    text-align: ${(props) => (props.ishome ? "end" : "start")};
`;

const Score = styled.h3`
    margin: 0;
    font-size: 48px;
`;

const TeamNameCol = styled(Col)`
    text-align: center;
    align-self: center;
`;

const EventText = styled.span`
    margin-left: 1vw;
    margin-right: 1vw;
`;

const Card = styled.div<{ color: string }>`
    border-radius: 0.1em;
    align-self: center;
    background: ${(props) =>
        props.color === "Yellow" ? "#ffc659" : "#EC3325"};
    width: 0.6em;
    height: 1em;
    margin: 0 0.2em 0 0.2em;
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
`;
