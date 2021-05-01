import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Row, Col, Divider } from "antd";
import { getCityFixtures } from "../api/getCityData.api";
import Loading from "@features/common/Loading";
import styled from "styled-components";
import Link from "next/link";

function getBeforeDateKey(currentMonth, dateKeys) {
    let reIndex = 0;
    dateKeys.map((list, index) => {
        if (list[0] === currentMonth) {
            reIndex = index;
        }
    });
    return reIndex > 0 ? dateKeys[reIndex - 1][0] : currentMonth;
}

function renderMatchSchedule(match, isPast) {
    return (
        <MatchCol span={6} key={match.id}>
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
                        <ScoreH4>{match.status.scoreStr}</ScoreH4>
                    </ScoreCol>
                </MatchScore>
                <CustomDivider ispast={isPast.toString()} />
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
            <MoreButton>
                <span>More</span>
                <span>+</span>
            </MoreButton>
        </MatchCol>
    );
}

const MatchSchedule = () => {
    const [matchList, setMatchList] = useState([]);
    const [currentMonth, setCurrentMonth] = useState("");
    // const [beforeMonth, setBeforeMonth] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getCityFixtures()
            .then((data) => {
                if (data) {
                    setCurrentMonth(data.fixturesTab.currentMonth);
                    setMatchList(data.fixturesTab.fixtures);
                    // setBeforeMonth(pbeforeMonth);
                }
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
        console.log("month", matchList[currentMonth]);
        let match5 = 0;
        return (
            <Container>
                <Col>
                    <Col>
                        <Title>MATCH SCHEDULE</Title>
                        <Link href="/matches">
                            <MatchLink>View all matches +</MatchLink>
                        </Link>
                    </Col>
                    <Row>
                        {[
                            ...matchList[beforeMonth],
                            ...matchList[currentMonth],
                        ].map((match) => {
                            console.log(match);
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

export default MatchSchedule;

const Container = styled.div`
    padding: 2vw;
`;

const MatchCol = styled(Col)`
    border-right: 1px solid lightgrey;
    :nth-child(4) {
        border-right: 0px solid lightgrey;
    }
    padding: 3vw;
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
const ScoreH4 = styled.h4`
    font-size: 14px;
    font-weight: 500;
    margin: 0;
    color: #6cabdd;
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

const CustomDivider = styled(Divider)<{ ispast: string }>`
    margin: 10px 0;
    background: ${(props) =>
        props.ispast === "true" ? "#6CABDD" : "lightgrey"};
    height: ${(props) => (props.ispast === "true" ? "2px" : "1px")};
`;

const Title = styled.h2`
    font-weight: 600;
    margin: 0;
`;

const MatchLink = styled.span`
    color: darkgray;
    font-size: 12px;
    :hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;

const MoreButton = styled.button`
    color: white;
    background: #1c2c5b;
    border: none;
    width: 8vw;
    display: flex;
    justify-content: space-between;
    margin-top: 1vw;
    padding: 5px 10px;

    span {
        font-size: 10px;
    }
`;
