import { faExchangeAlt, faFutbol } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Badge, Col, Row, Tooltip, Modal, Divider } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import styled from "styled-components";

const MatchLineup = ({ matchData }) => {
    const [visibleModalNumber, setVisibleModalNumber] = useState("0");

    return (
        <Row style={{ marginTop: "48px" }}>
            {matchData.content.lineup.lineup.map((team, index) => {
                const players =
                    index === 1
                        ? team.players
                        : team.players.slice(0).reverse();
                return (
                    <StyledCol md={12} xs={24} key={index}>
                        <BackgroundPitch>
                            <Row justify="space-around">
                                <Title>{team.teamName.toUpperCase()}</Title>
                                <Title>{team.lineup}</Title>
                            </Row>
                            {players.map((position, index) => (
                                <Row justify="space-around" key={index}>
                                    {position.map((player) => (
                                        <div key={player.id}>
                                            {renderPlayer(player, false)}
                                            {playerModal(player)}
                                        </div>
                                    ))}
                                </Row>
                            ))}
                        </BackgroundPitch>
                        {
                            <Row justify="center">
                                <StyledDivider
                                    style={{ borderTopColor: "lightgray" }}
                                >
                                    SUBSTITUTES
                                </StyledDivider>
                                {team.bench.slice(0, 8).map((player) => (
                                    <Col span={6} key={player.id}>
                                        {renderPlayer(player, true)}
                                        {playerModal(player)}
                                    </Col>
                                ))}
                            </Row>
                        }
                    </StyledCol>
                );
            })}
        </Row>
    );

    function tooltipPlayerStat(stats) {
        return (
            <>
                {stats.map((statList, listIndex) =>
                    Object.entries(statList).map((map, index) => (
                        <Row justify="space-between">
                            {listIndex > 0 && index === 0 && <StyledDivider />}
                            <StatTitle>
                                {index === 0 ? (
                                    <strong>{map[0].toUpperCase()}</strong>
                                ) : (
                                    map[0]
                                )}
                            </StatTitle>
                            <StatTitle>
                                {index === 0 ? (
                                    <strong>{map[1]}</strong>
                                ) : (
                                    map[1]
                                )}
                            </StatTitle>
                        </Row>
                    ))
                )}
            </>
        );
    }

    function renderPlayer(player, isBench) {
        return (
            <PlayerContainer
                onClick={() => {
                    setVisibleModalNumber(player.id);
                }}
            >
                <Badge
                    count={
                        player.rating.num ? (
                            <Rating background={player.rating.bgcolor}>
                                {player.rating.num}
                            </Rating>
                        ) : (
                            0
                        )
                    }
                >
                    <Avatar
                        size={48}
                        shape="circle"
                        src={player.imageUrl}
                        icon={<UserOutlined />}
                        onError={() => true}
                    />
                </Badge>

                <PlayerName justify="center" align="middle">
                    <Shirt>{player.shirt}</Shirt>
                    <Name isbench={isBench}>{player.name.lastName}</Name>
                    {player?.events?.g && (
                        <GoalIcon
                            icon={faFutbol}
                            style={{
                                marginLeft: "4px",
                            }}
                        />
                    )}
                    {player?.timeSubbedOn && (
                        <FontAwesomeIcon
                            icon={faExchangeAlt}
                            style={{
                                marginLeft: "4px",
                                width: "10px",
                            }}
                        />
                    )}
                </PlayerName>
            </PlayerContainer>
        );
    }

    function playerModal(player) {
        return (
            <Modal
                title={`${player.shirt} ${player.name.firstName} ${player.name.lastName}`}
                visible={visibleModalNumber === player.id}
                onCancel={() => {
                    setVisibleModalNumber("0");
                }}
                footer={null}
            >
                {tooltipPlayerStat(player.stats)}
            </Modal>
        );
    }
};

export default MatchLineup;

const StyledCol = styled(Col)`
    :first-child {
        border-right: 1px solid white;
    }
    margin-bottom: 24px;
`;

const BackgroundPitch = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding-top: 8px;
    background-image: url("http://sharemytactics.com/images/pitch.svg");
    height: 580px;

    @media screen and (max-width: 768px) {
        height: 500px;
    }
`;

const Title = styled.span`
    color: white;

    text-shadow: 2px 2px 4px #666666;
`;

const StatTitle = styled.span`
    color: black;
    font-size: 14px;

    strong {
        font-size: 16px;
    }
`;

const StyledDivider = styled(Divider)`
    place-self: center;
    .ant-divider-with-text {
        margin: 0 !important;
    }
`;

const PlayerContainer = styled.div`
    text-align: center;
    text-align: -webkit-center;
    padding: 16px 4px;
    :hover {
        cursor: pointer;
    }

    @media screen and (max-width: 768px) {
        padding: 8px 0;
    }
`;

const Rating = styled.span<{ background: string }>`
    font-size: 12px;
    background-color: ${(props) => props.background};
    border-radius: 4px;
    padding: 4px;
`;

const PlayerName = styled(Row)`
    box-shadow: 0 2px 8px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    padding: 1px 4px;
    border-radius: 2px;
    width: fit-content;
`;

const Shirt = styled.span`
    font-size: 12px;
    margin-right: 4px;
    color: darkgray;
    @media screen and (max-width: 768px) {
        font-size: 10px;
    }
`;

const Name = styled.span<{ isbench: boolean }>`
    font-size: 12px;

    color: ${(props) => (props.isbench ? "black" : "white")};
    @media screen and (max-width: 768px) {
        font-size: 10px;
    }
`;

const GoalIcon = styled(FontAwesomeIcon)`
    @media screen and (max-width: 768px) {
        width: 10px !important;
    }
`;
