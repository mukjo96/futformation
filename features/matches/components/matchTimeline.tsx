import {
    faExchangeAlt,
    faFutbol,
    faLongArrowAltLeft,
    faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row, Slider, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { matchDetailTypes, matchEventTypes } from "../types/matchDataTypes";

type dataType = {
    matchData: matchDetailTypes;
};

const MatchTimeline = ({ matchData }: dataType) => {
    const [marks, setMarks] = useState({});
    const events = matchData.content.matchFacts.events.events;

    useEffect(() => {
        inputMarks();
    }, []);

    function tooltipHeader(matchEvent: matchEventTypes) {
        return (
            <Row justify="center" align="middle">
                {matchEvent.isHome ? (
                    <LogoIcon
                        src={matchData.header.teams[0].imageUrl}
                        width="24px"
                    />
                ) : (
                    <LogoIcon
                        src={matchData.header.teams[1].imageUrl}
                        width="24px"
                    />
                )}
                <h5
                    style={{ marginLeft: "8px" }}
                >{`${matchEvent.timeStr} ${matchEvent.type}`}</h5>
            </Row>
        );
    }

    function inputMarks() {
        let exMarks = { 0: "0'" };
        events.map((matchEvent) => {
            if (matchEvent.type !== "AddedTime")
                exMarks[parseInt(matchEvent.timeStr)] = (
                    <>
                        <Tooltip
                            color="white"
                            title={
                                <>
                                    {matchEvent.type === "Goal" ? (
                                        <TooltipContainer>
                                            {tooltipHeader(matchEvent)}
                                            <Row>
                                                <h5>{matchEvent.nameStr}</h5>
                                                <h5
                                                    style={{
                                                        marginLeft: "4px",
                                                    }}
                                                >
                                                    (
                                                    {matchEvent.isHome ? (
                                                        <>
                                                            <strong>
                                                                {
                                                                    matchEvent
                                                                        .newScore[0]
                                                                }
                                                            </strong>
                                                            {` - ${matchEvent.newScore[1]}`}
                                                        </>
                                                    ) : (
                                                        <>
                                                            {`${matchEvent.newScore[0]} - `}
                                                            <strong>
                                                                {
                                                                    matchEvent
                                                                        .newScore[1]
                                                                }
                                                            </strong>
                                                        </>
                                                    )}
                                                    )
                                                </h5>
                                            </Row>
                                            <h5>{matchEvent.assistStr}</h5>
                                        </TooltipContainer>
                                    ) : matchEvent.type === "Substitution" ? (
                                        <TooltipContainer>
                                            {tooltipHeader(matchEvent)}
                                            <Row align="middle">
                                                <FontAwesomeIcon
                                                    icon={faLongArrowAltRight}
                                                    color="green"
                                                    height={14}
                                                    style={{
                                                        marginRight: "4px",
                                                    }}
                                                />
                                                <h5>
                                                    {matchEvent.swap[0].name}
                                                </h5>
                                            </Row>
                                            <Row align="middle">
                                                <FontAwesomeIcon
                                                    icon={faLongArrowAltLeft}
                                                    color="#EC3325"
                                                    height={14}
                                                    style={{
                                                        marginRight: "4px",
                                                    }}
                                                />
                                                <h5>
                                                    {matchEvent.swap[1].name}
                                                </h5>
                                            </Row>
                                        </TooltipContainer>
                                    ) : matchEvent.type === "Card" ? (
                                        <TooltipContainer>
                                            {tooltipHeader(matchEvent)}
                                            <Row>
                                                <Card color={matchEvent.card} />
                                                <h5>{matchEvent.nameStr}</h5>
                                            </Row>
                                        </TooltipContainer>
                                    ) : (
                                        <EventIcon ishome={matchEvent.isHome}>
                                            {matchEvent.type}
                                        </EventIcon>
                                    )}
                                </>
                            }
                            placement={matchEvent.isHome ? "top" : "bottom"}
                        >
                            {matchEvent.type === "Goal" ? (
                                <EventIcon ishome={matchEvent.isHome}>
                                    <FontAwesomeIcon icon={faFutbol} />
                                </EventIcon>
                            ) : matchEvent.type === "Substitution" ? (
                                <EventIcon ishome={matchEvent.isHome}>
                                    <FontAwesomeIcon icon={faExchangeAlt} />
                                </EventIcon>
                            ) : matchEvent.type === "Card" ? (
                                <EventIcon ishome={matchEvent.isHome}>
                                    <Card color={matchEvent.card} />
                                </EventIcon>
                            ) : null}
                        </Tooltip>
                    </>
                );
        });
        setMarks(exMarks);
    }

    return (
        <Fade bottom cascade ssrFadeout>
            <Col xs={22} md={24} style={{ margin: "0 auto" }}>
                <StyledSlider marks={marks} max={90} disabled />
            </Col>
        </Fade>
    );
};
export default MatchTimeline;

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

const TooltipContainer = styled.div`
    text-align: center;
    /* background-color: white; */
    h5 {
        font-size: 14px;
        margin: 0;

        strong {
            color: #ec3325;
        }
    }

    @media screen and (max-width: 768px) {
        h5 {
            font-size: 10px;
        }
    }
`;

const LogoIcon = styled.img`
    width: 24px;
    height: 24px;

    @media screen and (max-width: 768px) {
        width: 18px;
        height: 18px;
    }
`;

const StyledSlider = styled(Slider)`
    cursor: default !important;
    margin: 36px 0;
    .ant-slider-handle {
        width: 2px;
        height: 18px;
        border-radius: 0;
        margin-top: -7px;
        border: 1px solid black !important;
        cursor: default !important;
    }

    .ant-slider-dot {
        :first-child {
            width: 2px;
            border-radius: 20%;
            margin-left: -1px;
        }
        border: 1px solid #1c2c5b !important;
        cursor: default !important;
    }

    .ant-slider-rail {
        background-color: #6cabdd !important;
        cursor: default !important;
    }

    .ant-slider-mark-text {
        cursor: pointer !important;
        color: #1c2c5b;
    }
`;

const EventIcon = styled.div<{ ishome: boolean }>`
    display: flex;
    align-items: center;
    height: 22px;
    margin-top: ${(props) => props.ishome && "-38px"};
`;
