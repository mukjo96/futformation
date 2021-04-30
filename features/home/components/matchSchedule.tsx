import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Row, Col, Divider } from "antd";
import { getCityFixtures } from "../api/getCityData.api";
import Loading from "@features/common/Loading";
import styled from "styled-components";

const MatchSchedule = () => {
    const [matchList, setMatchList] = useState([]);
    const [currentMonth, setCurrentMonth] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log(getCityFixtures());
        getCityFixtures()
            .then(async (data) => {
                if (data) {
                    setCurrentMonth(data.fixturesTab.currentMonth);
                    setMatchList(data.fixturesTab.fixtures);
                }
            })
            .then((_) => {
                setIsLoading(false);
            });
    }, []);
    if (isLoading) {
        return <Loading />;
    } else {
        console.log(matchList[currentMonth]);
        return (
            <Container>
                <Col>
                    <Col>
                        <h2>MATCH SCHEDULE</h2>
                        <h5>View all matches +</h5>
                    </Col>
                    <Row>
                        <MatchCol span={6}>
                            {matchList[currentMonth].map((match) => {
                                if (match.lastPlayedMatch) {
                                    return (
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
                                                <ScoreH4>
                                                    {match.status.scoreStr}
                                                </ScoreH4>
                                            </MatchScore>
                                            <CustomDivider />
                                            <h3>{`${match.home.name} vs ${match.away.name}`}</h3>
                                            <h4>{match.tournament.name}</h4>
                                            <h5>{match.status.startDateStr}</h5>
                                        </div>
                                    );
                                }
                            })}
                        </MatchCol>
                        <MatchCol span={6}>1</MatchCol>
                        <MatchCol span={6}>1</MatchCol>
                        <MatchCol span={6}>1</MatchCol>
                    </Row>
                </Col>
            </Container>
        );
    }
};

export default MatchSchedule;

const Container = styled.div`
    padding: 1vw;
`;

const MatchCol = styled(Col)`
    border-right: 1px solid grey;
    padding: 2vw;
`;

const MatchScore = styled(Row)`
    justify-content: space-between;
    align-items: flex-end;
`;

const TeamLogo = styled.img`
    margin-right: 1vw;
`;

const ScoreH4 = styled.h4`
    margin: 0;
    color: #1c2c5b;
`;

const CustomDivider = styled(Divider)`
    margin: 10px 0;
    height: 2px;
    background: #1c2c5b;
`;
