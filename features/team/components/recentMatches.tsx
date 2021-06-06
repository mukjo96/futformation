import MoreButton from "@features/common/button/moreButton";
import { faFutbol, faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Collapse, List, Row, Col, Divider, Tooltip } from "antd";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const { Panel } = Collapse;

const RecentMatches = ({ playerData }) => {
    const matches = playerData.recentMatches;

    return (
        <Col>
            <StyledCollapse bordered={false}>
                {matches.tabs.map((matchName: string) => (
                    <Panel header={matchName} key={matchName}>
                        <List
                            itemLayout="vertical"
                            dataSource={matches[matchName]}
                            renderItem={(item: any) => {
                                return (
                                    <List.Item>
                                        <List.Item.Meta
                                            style={{ margin: 0 }}
                                            title={
                                                <>
                                                    <MatchScore>
                                                        <TeamName>
                                                            {`${item.htName.toUpperCase()} v ${item.atName.toUpperCase()}`}
                                                        </TeamName>
                                                        <ScoreCol>
                                                            <ScoreH4>
                                                                {`${item.versus.homeTeamScore} : ${item.versus.awayTeamScore}`}
                                                            </ScoreH4>
                                                        </ScoreCol>
                                                    </MatchScore>
                                                    <CustomDivider
                                                        teamcolor={
                                                            playerData.origin
                                                                .teamColor
                                                        }
                                                    />
                                                </>
                                            }
                                        />
                                        <MatchDescription>
                                            <div>
                                                <StyledRow align="middle">
                                                    <Col span={2}>
                                                        <Tooltip title="Minutes Played">
                                                            <TimeIcon
                                                                icon={
                                                                    faStopwatch
                                                                }
                                                            />
                                                        </Tooltip>
                                                    </Col>
                                                    <Col span={2}>
                                                        {item.minutesPlayed}
                                                    </Col>
                                                    <Col span={2}>
                                                        <Tooltip title="Goals">
                                                            <GoalIcon
                                                                icon={faFutbol}
                                                            />
                                                        </Tooltip>
                                                    </Col>
                                                    <Col span={2}>
                                                        {item.goals}
                                                    </Col>
                                                    <Col span={2}>
                                                        <Tooltip title="Assists">
                                                            <AssistIcon />
                                                        </Tooltip>
                                                    </Col>
                                                    <Col span={2}>
                                                        {item.assists}
                                                    </Col>
                                                    <Col span={2}>
                                                        <Tooltip title="Yellow Cards">
                                                            <Card color="Yellow" />
                                                        </Tooltip>
                                                    </Col>
                                                    <Col span={2}>
                                                        {item.yellowCards}
                                                    </Col>
                                                    <Col span={2}>
                                                        <Tooltip title="Red Cards">
                                                            <Card color="Red" />
                                                        </Tooltip>
                                                    </Col>
                                                    <Col span={2}>
                                                        {item.redCards}
                                                    </Col>
                                                    <Col span={4}>
                                                        <Rating
                                                            background={
                                                                item.ratingProps
                                                                    .bgcolor
                                                            }
                                                        >
                                                            {
                                                                item.ratingProps
                                                                    .num
                                                            }
                                                        </Rating>
                                                    </Col>
                                                </StyledRow>
                                                <TournamentName>
                                                    {item.date}
                                                </TournamentName>
                                            </div>
                                            <Link
                                                href={`matches/${item.versus.matchId}`}
                                            >
                                                <a
                                                    style={{
                                                        textDecoration: "none",
                                                        alignSelf: "flex-end",
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
        </Col>
    );
};

export default RecentMatches;

const StyledCollapse = styled(Collapse)`
    background-color: white;
`;

const MatchScore = styled(Row)`
    justify-content: space-between;
    align-items: flex-end;
`;

const TeamName = styled.h2`
    margin: 0;
    font-size: 16px;
    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

const CustomDivider = styled(Divider)<{ teamcolor: string }>`
    margin: 10px 0;
    background: ${(props) => props.teamcolor};
`;

const StyledRow = styled(Row)`
    width: 300px;
    text-align: center;
    .ant-col-2 {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media screen and (max-width: 768px) {
        width: 260px;
    }
`;

const GoalIcon = styled(FontAwesomeIcon)`
    width: 16px !important;
    height: 24px;
`;

const TimeIcon = styled(FontAwesomeIcon)`
    width: 14px !important;
    height: 24px;
`;

const Card = styled.div<{ color: string }>`
    border-radius: 0.1em;
    align-self: center;
    background: ${(props) =>
        props.color === "Yellow" ? "#ffc659" : "#EC3325"};
    width: 0.6em;
    height: 1em;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        width: 0.4em;
        height: 0.8em;
        margin: 0 0.3em;
    }
`;

const Rating = styled.span<{ background: string }>`
    font-size: 12px;
    background-color: ${(props) => props.background};
    border-radius: 4px;
    padding: 4px;
`;

const ScoreCol = styled(Col)`
    align-content: space-between;
`;

const ScoreH4 = styled.h4`
    font-size: 16px;
    font-weight: 500;
    margin: 0;

    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

const MatchDescription = styled.div`
    display: flex;
    justify-content: space-between;
`;

const TournamentName = styled.h5`
    font-size: 12px;
    color: darkgray;
    margin-top: 12px;
    margin-bottom: 0;

    @media screen and (max-width: 768px) {
        font-size: 10px;
    }
`;

const AssistIcon = styled.img.attrs(() => ({
    src: "/image/assists.png",
}))`
    width: 24px;
    height: 24px;
`;
