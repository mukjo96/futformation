import MoreButton from "@features/common/button/moreButton";
import {
    faFutbol,
    faStopwatch,
    faTshirt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Collapse, List, Row, Col, Divider, Tooltip } from "antd";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Fade from "react-reveal-effects/Fade";
import { playerInfoDataTypes } from "@features/home/api/cityDataTypes";
import { TFunction, useTranslation } from "next-i18next";

const { Panel } = Collapse;
type propTypes = {
    playerData: playerInfoDataTypes;
    teamColor: string;
};

const RecentMatches = ({ playerData, teamColor }: propTypes) => {
    const matches = playerData.recentMatches;
    const { t } = useTranslation("common");

    return (
        <Fade bottom cascade ssrFadeout>
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
                                                            <Row align="middle">
                                                                <TeamName>
                                                                    {`vs ${item.versus.opponentName}`}
                                                                </TeamName>
                                                                <TeamLogo
                                                                    src={`https://images.fotmob.com/image_resources/logo/teamlogo/${item.versus.opponentId}_small.png`}
                                                                    width="40px"
                                                                />
                                                            </Row>

                                                            <ScoreCol>
                                                                <ScoreH4>
                                                                    {`${item.versus.homeTeamScore} : ${item.versus.awayTeamScore}`}
                                                                </ScoreH4>
                                                            </ScoreCol>
                                                        </MatchScore>
                                                        <CustomDivider
                                                            teamcolor={
                                                                teamColor
                                                            }
                                                        />
                                                    </>
                                                }
                                            />
                                            <MatchDescription>
                                                <div>
                                                    {item.minutesPlayed > 0
                                                        ? renderPlayerStats(
                                                              true,
                                                              item.minutesPlayed,
                                                              item.goals,
                                                              item.assists,
                                                              item.yellowCards,
                                                              item.redCards,
                                                              t,
                                                              item.ratingProps
                                                          )
                                                        : t("Ruled Out")}
                                                    <TournamentName>
                                                        {item.date}
                                                    </TournamentName>
                                                </div>
                                                <Link
                                                    href={`/matches/${item.versus.matchId}`}
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
            </Col>
        </Fade>
    );
};

export function renderPlayerStats(
    isMatch: boolean,
    minutesPlayed: number,
    goals: number,
    assists: number,
    yellowcards: number,
    redcards: number,
    t: TFunction,
    rating?: {
        bgcolor: string;
        num: number;
    }
) {
    return (
        <StyledRow align="middle">
            <Col>
                <Tooltip
                    title={isMatch ? t("Minutes Played") : t("Appearances")}
                >
                    {isMatch ? (
                        <TimeIcon icon={faStopwatch} />
                    ) : (
                        <ShirtIcon icon={faTshirt} />
                    )}
                </Tooltip>
            </Col>
            <DataCol>{minutesPlayed}</DataCol>
            <Divider type="vertical" />
            <Col>
                <Tooltip title={t("Goals")}>
                    <GoalIcon icon={faFutbol} />
                </Tooltip>
            </Col>
            <DataCol>{goals}</DataCol>
            <Divider type="vertical" />
            <Col>
                <Tooltip title={t("Assists")}>
                    <AssistIcon />
                </Tooltip>
            </Col>
            <DataCol>{assists}</DataCol>
            <Divider type="vertical" />
            <Col>
                <Tooltip title={t("Yellow Cards")}>
                    <Card color="Yellow" />
                </Tooltip>
            </Col>
            <DataCol>{yellowcards}</DataCol>
            <Divider type="vertical" />
            <Col>
                <Tooltip title={t("Red Cards")}>
                    <Card color="Red" />
                </Tooltip>
            </Col>

            <DataCol>{redcards}</DataCol>
            {rating && (
                <>
                    <Divider type="vertical" />
                    <DataCol>
                        <Rating background={rating.bgcolor}>
                            {rating.num}
                        </Rating>
                    </DataCol>
                </>
            )}
        </StyledRow>
    );
}

export default RecentMatches;

const StyledCollapse = styled(Collapse)`
    background-color: white;
`;

const MatchScore = styled(Row)`
    justify-content: space-between;
    align-items: flex-end;
`;

const TeamLogo = styled.img`
    margin-left: 12px;
    @media screen and (max-width: 768px) {
        margin-left: 2vw;
    }
`;

const TeamName = styled.h2`
    margin: 0;
    font-size: 16px;
    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

const CustomDivider = styled(Divider)<{ teamcolor: string }>`
    align-self: center;
    margin: 10px 0;
    background: ${(props) => props.teamcolor};
`;

const StyledRow = styled(Row)`
    text-align: center;
    .ant-col {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media screen and (max-width: 768px) {
        width: 260px;
    }
`;

const DataCol = styled(Col)`
    margin-left: 4px;
`;

const GoalIcon = styled(FontAwesomeIcon)`
    width: 16px !important;
    height: 100%;

    @media screen and (max-width: 768px) {
        width: 14px !important;
        height: 100%;
    }
`;

const TimeIcon = styled(FontAwesomeIcon)`
    width: 14px !important;
    height: 100%;
    @media screen and (max-width: 768px) {
        width: 12px !important;
        height: 100%;
    }
`;
const ShirtIcon = styled(FontAwesomeIcon)`
    width: 18px !important;
    height: 18px;
    @media screen and (max-width: 768px) {
        width: 14px !important;
        height: 14px;
    }
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

    @media screen and (max-width: 768px) {
        width: 18px;
        height: 100%;
    }
`;
