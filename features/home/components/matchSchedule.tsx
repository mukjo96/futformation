import React, { useEffect, useState } from "react";

import { Row, Col, Divider } from "antd";
import { getCityFixtures } from "../api/getCityData.api";
import Loading from "@features/common/Loading";
import styled from "styled-components";
import Link from "next/link";
import MoreButton from "@features/common/button/MoreButton";
import BlockTitle from "./Title/blockTitle";
import { matchDataTypes } from "../api/cityDataTypes";

const MatchSchedule = () => {
    const [matchList, setMatchList] = useState([]);
    const [currentMonth, setCurrentMonth] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getCityFixtures()
            .then((data) => {
                setCurrentMonth(data.fixturesTab.currentMonth);
                setMatchList(data.fixturesTab.fixtures);
            })
            .then((_) => {
                setIsLoading(false);
            });
    }, []);

    const dateKeys = Object.entries(matchList);
    const beforeMonth = getBeforeDateKey(currentMonth, dateKeys);
    if (isLoading && beforeMonth !== null) {
        return <Loading />;
    } else {
        const newMatchList = [
            ...matchList[beforeMonth],
            ...matchList[currentMonth],
        ];
        let match5 = 0;
        return (
            <Container>
                <Col>
                    <Col>
                        <BlockTitle
                            title="MATCH SCHEDULE"
                            link="matches"
                            theme="light"
                        />
                    </Col>
                    <Row>
                        {newMatchList.map((match) => {
                            if (
                                match.lastPlayedMatch ||
                                (!match.isPastMatch && match5 < 4)
                            ) {
                                match5 += 1;
                                return renderMatchSchedule(
                                    match,
                                    match.isPastMatch
                                );
                            }
                        })}
                    </Row>
                </Col>
            </Container>
        );
    }
};

function getBeforeDateKey(currentMonth: string, dateKeys: Array<any>) {
    let reIndex = 0;
    dateKeys.map((list, index) => {
        if (list[0] === currentMonth) {
            reIndex = index;
        }
    });
    return reIndex > 0 ? dateKeys[reIndex - 1][0] : currentMonth;
}

function renderMatchSchedule(match: matchDataTypes, isPast: boolean) {
    let isCityWin: string;
    if (match.home.name === "Man City") {
        match.home.score > match.away.score
            ? (isCityWin = "win")
            : match.home.score === match.away.score
            ? (isCityWin = "draw")
            : (isCityWin = "lose");
    } else {
        match.away.score > match.home.score
            ? (isCityWin = "win")
            : match.away.score === match.home.score
            ? (isCityWin = "draw")
            : (isCityWin = "lose");
    }
    return (
        <MatchCol xs={24} md={6} key={match.id}>
            <div>
                <MatchScore>
                    <div>
                        <TeamLogo
                            src={`https://images.fotmob.com/image_resources/logo/teamlogo/${match.home.id}_small.png`}
                            width="40px"
                        />
                        <TeamLogo
                            src={`https://images.fotmob.com/image_resources/logo/teamlogo/${match.away.id}_small.png`}
                            width="40px"
                        />
                    </div>
                    <ScoreCol>
                        <LiveText>
                            {match.status.started && !match.status.finished
                                ? "LIVE"
                                : ""}
                        </LiveText>
                        <ScoreH4 iscitywin={isCityWin}>
                            {match.status.scoreStr}
                        </ScoreH4>
                    </ScoreCol>
                </MatchScore>
                <CustomDivider
                    ispast={isPast.toString()}
                    iscitywin={isCityWin}
                />
                <TeamName>{`${match.home.name} vs ${match.away.name}`}</TeamName>
                <TournamentName>{match.tournament.name}</TournamentName>
                <StartDate>
                    {match.status.startDateStr
                        ? match.status.startDateStr
                        : match.status.liveTime.short}
                    {match.status.startTimeStr &&
                        ` | ${match.status.startTimeStr}`}
                </StartDate>
            </div>
            <Link href={`matches/${match.id}`}>
                <a style={{ textDecoration: "none" }}>
                    <MoreButton value="More" size="medium" />
                </a>
            </Link>
        </MatchCol>
    );
}

export default MatchSchedule;

const Container = styled.div`
    padding: 2vw;
    @media screen and (max-width: 768px) {
        padding: 4vw;
    }
`;

const MatchCol = styled(Col)`
    border-right: 1px solid lightgrey;
    :nth-child(4) {
        border-right: 0px solid lightgrey;
    }
    padding: 3vw;
    @media screen and (max-width: 768px) {
        border-right: none;
        padding: 5vw;
    }
`;

const MatchScore = styled(Row)`
    justify-content: space-between;
    align-items: flex-end;
`;

const TeamLogo = styled.img`
    margin-right: 1vw;
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
    font-size: 14px;
    font-weight: 500;
    margin: 0;
    color: ${(props) =>
        props.iscitywin === "win"
            ? "#6cabdd"
            : props.iscitywin === "draw"
            ? "darkgrey"
            : "#EC3325"};
`;

const TeamName = styled.h3`
    font-size: 14px;
    margin: 0;
    height: 50px;
`;

const TournamentName = styled.h5`
    font-size: 10px;
    color: darkgray;
    height: 10px;
`;

const StartDate = styled.span`
    font-size: 10px;
    height: 10px;
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
    height: ${(props) => (props.ispast === "true" ? "2px" : "1px")};
`;
