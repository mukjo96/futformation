import { faFutbol } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Badge, Col, Row } from "antd";
import React from "react";
import styled from "styled-components";

const MatchLineup = ({ matchData }) => {
    return (
        <Row style={{ marginTop: "48px" }}>
            {matchData.content.lineup.lineup.map((team, index) => {
                const players =
                    index === 1
                        ? team.players
                        : team.players.slice(0).reverse();
                return (
                    <StyledCol span={12}>
                        {players.map((position) => (
                            <Row justify="space-around">
                                {position.map((player) => renderPlayer(player))}
                            </Row>
                        ))}
                    </StyledCol>
                );
            })}
        </Row>
    );

    function renderPlayer(player) {
        return (
            <PlayerContainer>
                <Badge
                    count={
                        <Rating background={player.rating.bgcolor}>
                            {player.rating.num}
                        </Rating>
                    }
                >
                    <Avatar size={48} shape="square" src={player.imageUrl} />
                </Badge>

                <Row justify="center" align="middle">
                    <Shirt>{player.shirt}</Shirt>
                    <Name>{player.name.lastName}</Name>
                    {player?.events?.g && <FontAwesomeIcon icon={faFutbol} />}
                </Row>
            </PlayerContainer>
        );
    }
};

export default MatchLineup;

const StyledCol = styled(Col)`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    border: 0.5px solid darkgray;
    padding-top: 12px;

    :first-child {
        border-right: none;
    }
`;

const PlayerContainer = styled.div`
    text-align: center;
    padding: 12px;
`;

const Rating = styled.span<{ background: string }>`
    font-size: 12px;
    background-color: ${(props) => props.background};
    border-radius: 4px;
    padding: 4px;
`;

const Shirt = styled.span`
    font-size: 12px;
    margin-right: 4px;
    color: darkgray;
`;

const Name = styled.span`
    font-size: 12px;
    margin-right: 4px;
`;
