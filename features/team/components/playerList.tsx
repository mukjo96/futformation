import MoreButton from "@features/common/button/moreButton";
import Fade from "react-reveal/Fade";
import {
    playerListDataTypes,
    playerTypes,
} from "@features/home/api/cityDataTypes";
import { Collapse, List, Row, Col, Divider } from "antd";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const { Panel } = Collapse;

type dataType = {
    playerData: Array<playerListDataTypes>;
};

const PlayerList = ({ playerData }: dataType) => {
    return (
        <Container>
            <Fade bottom cascade ssrFadeout>
                <StyledCollapse bordered={false}>
                    {playerData.map((position) => (
                        <Panel
                            header={position[0].toUpperCase()}
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
                                                                />
                                                            </div>
                                                            <ScoreCol>
                                                                <TeamLogo
                                                                    src={`https://images.fotmob.com/image_resources/logo/teamlogo/${item.ccode.toLowerCase()}.png`}
                                                                    width="40px"
                                                                />
                                                            </ScoreCol>
                                                        </MatchScore>
                                                        <CustomDivider />
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
                                                            ? "Goalkeeper"
                                                            : item.role ===
                                                              "defenders"
                                                            ? "Defender"
                                                            : item.role ===
                                                              "midfielders"
                                                            ? "Midfielder"
                                                            : item.role ===
                                                              "attackers"
                                                            ? "Forward"
                                                            : "Coach"}
                                                    </TournamentName>
                                                </div>
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

const CustomDivider = styled(Divider)`
    margin: 10px 0;
    background: #6cabdd;
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
