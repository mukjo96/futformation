import MoreButton from "@features/common/button/moreButton";
import Fade from "react-reveal-effects/Fade";
import {
    playerListDataTypes,
    playerTypes,
} from "@features/home/api/cityDataTypes";
import { Collapse, List, Row, Col, Divider } from "antd";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { useTranslation } from "next-i18next";

const { Panel } = Collapse;

type dataType = {
    playerData: Array<playerListDataTypes>;
    teamColor: string;
};

const PlayerList = ({ playerData, teamColor }: dataType) => {
    const { t } = useTranslation("common");

    return (
        <Container>
            <Fade bottom cascade ssrFadeout>
                <StyledCollapse bordered={false}>
                    {playerData.map((position) => (
                        <Panel
                            header={
                                position[0] === "attackers"
                                    ? t("FORWARDS")
                                    : t(position[0].toUpperCase())
                            }
                            key={position[0]}
                        >
                            <List
                                itemLayout="vertical"
                                dataSource={position[1]}
                                renderItem={(item: playerTypes) => {
                                    return (
                                        <List.Item>
                                            <List.Item.Meta
                                                style={{ margin: 0 }}
                                                title={
                                                    <>
                                                        <MatchScore>
                                                            <div>
                                                                <TeamLogo
                                                                    src={`https://images.fotmob.com/image_resources/playerimages/${item.id}.png`}
                                                                    width="60px"
                                                                    alt={
                                                                        item.name
                                                                    }
                                                                />
                                                            </div>
                                                            <ScoreCol>
                                                                <TeamLogo
                                                                    src={`https://images.fotmob.com/image_resources/logo/teamlogo/${item.ccode.toLowerCase()}.png`}
                                                                    width="40px"
                                                                    alt={
                                                                        item.cname
                                                                    }
                                                                />
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
                                                    <TeamName>
                                                        {item.name}
                                                    </TeamName>
                                                    <TournamentName>
                                                        {item.role ===
                                                        "goalkeepers"
                                                            ? t("Goalkeeper")
                                                            : item.role ===
                                                              "defenders"
                                                            ? t("Defender")
                                                            : item.role ===
                                                              "midfielders"
                                                            ? t("Midfielder")
                                                            : item.role ===
                                                              "attackers"
                                                            ? t("Forward")
                                                            : t("Coach")}
                                                    </TournamentName>
                                                </div>
                                                {position[0] !== "coach" && (
                                                    <Link
                                                        href={`players/${item.id}`}
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
                                                )}
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
export default PlayerList;

const Container = styled.div`
    padding: 56px;
    @media screen and (max-width: 768px) {
        padding: 28px;
    }
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

const CustomDivider = styled(Divider)<{ teamcolor: string }>`
    margin: 10px 0;
    background: ${(props) => props.teamcolor};
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
