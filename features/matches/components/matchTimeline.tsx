import { faExchangeAlt, faFutbol } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Slider, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const MatchTimeline = ({ matchData }) => {
    const [marks, setMarks] = useState({});
    const events = matchData.content.matchFacts.events.events;

    useEffect(() => {
        inputMarks();
    }, []);

    function inputMarks() {
        let exMarks = { 0: "0'" };
        events.map((matchEvent) => {
            exMarks[parseInt(matchEvent.timeStr)] = (
                <>
                    <Tooltip
                        title={`${matchEvent.timeStr} | ${matchEvent.type}`}
                        placement="top"
                    >
                        {matchEvent.type === "Goal" ? (
                            <FontAwesomeIcon icon={faFutbol} />
                        ) : matchEvent.type === "AddedTime" ? (
                            <span>+</span>
                        ) : matchEvent.type === "Substitution" ? (
                            <FontAwesomeIcon icon={faExchangeAlt} />
                        ) : matchEvent.type === "Card" ? (
                            <Card color={matchEvent.card} />
                        ) : (
                            <span>{matchEvent.type}</span>
                        )}
                    </Tooltip>
                </>
            );
        });
        setMarks(exMarks);
    }

    return (
        <>
            <StyledSlider marks={marks} max={90} disabled />
        </>
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

const StyledSlider = styled(Slider)`
    cursor: default !important;
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
