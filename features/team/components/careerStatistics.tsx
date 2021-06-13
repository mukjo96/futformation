import MoreButton from "@features/common/button/moreButton";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Collapse, List, Row, Col, Divider, Modal, Avatar, Empty } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import { renderPlayerStats } from "./recentMatches";

const { Panel } = Collapse;

const CareerStatistics = ({ playerData, teamColor }) => {
    const matches = playerData.careerStatistics;
    const [visibleModalNumber, setVisibleModalNumber] = useState(0);

    if (!matches) {
        return (
            <EmptyCol>
                <Empty />
            </EmptyCol>
        );
    } else {
        return (
            <Col>
                <StyledCollapse bordered={false}>
                    {matches?.map((careers) => (
                        <Panel
                            header={
                                <>
                                    <TeamLogo
                                        src={`https://images.fotmob.com/image_resources/logo/leaguelogo/${careers.id}.png`}
                                        shape="square"
                                        icon={
                                            <FontAwesomeIcon
                                                icon={faUsers}
                                                color="black"
                                            />
                                        }
                                        style={{ background: "white" }}
                                        onError={() => true}
                                    />
                                    {careers.name}
                                </>
                            }
                            key={careers.id}
                        >
                            <List
                                itemLayout="vertical"
                                dataSource={careers.seasons}
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
                                                                    {item.name}
                                                                </TeamName>
                                                            </Row>
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
                                                    {renderPlayerStats(
                                                        false,
                                                        item.matches,
                                                        item.goals,
                                                        item.assists,
                                                        item.yc,
                                                        item.rc
                                                    )}
                                                </div>
                                                <MoreButton
                                                    value="More"
                                                    size="medium"
                                                    onClick={() =>
                                                        setVisibleModalNumber(
                                                            item.stats[0]
                                                                .startTS
                                                        )
                                                    }
                                                />
                                                {renderCareerModal(
                                                    item.stats[0],
                                                    item.name
                                                )}
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
    }

    function renderCareerModal(stats, name) {
        return (
            <Modal
                visible={visibleModalNumber === stats.startTS}
                title={`${stats.tournamentName} (${name})`}
                onCancel={() => {
                    setVisibleModalNumber(0);
                }}
                footer={null}
            >
                {stats.statsArr.map((stat) => (
                    <Row
                        justify="space-between"
                        key={stat[0]}
                        style={{ marginBottom: "8px" }}
                    >
                        <StatTitle>{stat[0]}</StatTitle>
                        <StatTitle>{stat[1]}</StatTitle>
                    </Row>
                ))}
            </Modal>
        );
    }
};

export default CareerStatistics;

const EmptyCol = styled(Col)`
    margin-top: 5%;
`;

const StyledCollapse = styled(Collapse)`
    background-color: white;
`;

const MatchScore = styled(Row)`
    justify-content: space-between;
    align-items: flex-end;
`;

const TeamLogo = styled(Avatar)`
    margin-right: 12px;
    @media screen and (max-width: 768px) {
        margin-right: 2vw;
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
    margin: 10px 0;
    background: ${(props) => props.teamcolor};
`;

const MatchDescription = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StatTitle = styled.span`
    color: black;
    font-size: 14px;

    strong {
        font-size: 16px;
    }
`;
