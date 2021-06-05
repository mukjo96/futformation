import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col, List, Avatar, Result } from "antd";
import { SelectOutlined } from "@ant-design/icons";
import BlockTitle from "./Title/blockTitle";

import PlayerInfo from "./playerInfo";
import { useSelector } from "react-redux";
import { RootStateInterface } from "redux/interfaces/ifRootState";
import { IExampleState } from "redux/interfaces/iExample/iExample.interfaces";

const TeamPlayers = ({ dataList }) => {
    const [selectedId, setSelectedId] = useState(0);

    const data = [];

    playerDataToObjects();

    const team = useSelector(
        (state: RootStateInterface): IExampleState => state.rdcExample
    );

    return (
        <Container>
            <StyledTitle>
                <BlockTitle
                    title={`${team.teamName} PLAYERS`}
                    link="players"
                    theme="light"
                />
            </StyledTitle>
            <StyledRow>
                <Col xs={24} md={18} style={{ alignSelf: "center" }}>
                    {selectedId === 0 ? (
                        <Result
                            icon={<SelectOutlined />}
                            title="Select your player!"
                        />
                    ) : (
                        <PlayerInfo id={selectedId} />
                    )}
                </Col>
                <ListCol xs={24} md={6}>
                    <List
                        dataSource={data.reverse()}
                        size="large"
                        renderItem={(item) => (
                            <StyledItem
                                key={item.id}
                                onClick={() => setSelectedId(item.id)}
                                id={(selectedId === item.id).toString()}
                                teamcolor={team.teamColor}
                            >
                                <StyledMeta
                                    avatar={
                                        <Avatar
                                            size={48}
                                            shape="square"
                                            src={`https://images.fotmob.com/image_resources/playerimages/${item.id}.png`}
                                        />
                                    }
                                    title={
                                        <Col>
                                            <PlayerName>{item.name}</PlayerName>
                                            <PlayerRole>
                                                {item.role === "goalkeepers"
                                                    ? "Goalkeeper"
                                                    : item.role === "defenders"
                                                    ? "Defender"
                                                    : item.role ===
                                                      "midfielders"
                                                    ? "Midfielder"
                                                    : "Forward"}
                                            </PlayerRole>
                                        </Col>
                                    }
                                />
                            </StyledItem>
                        )}
                    ></List>
                </ListCol>
            </StyledRow>
        </Container>
    );

    function playerDataToObjects() {
        dataList.map((players) => {
            players[0] !== "coach" &&
                players[1].map((player) => {
                    data.push({
                        id: player.id,
                        name: player.name,
                        role: player.role,
                    });
                });
        });
    }
};

export default TeamPlayers;

const Container = styled.div``;

const StyledTitle = styled.div`
    padding: 28px;
    @media screen and (max-width: 768px) {
        padding: 4vw;
    }
`;

const StyledRow = styled(Row)``;

const ListCol = styled(Col)`
    height: 393px;
    overflow: auto;
`;

const StyledItem = styled(List.Item)<{ id: string; teamcolor: string }>`
    background-color: ${(props) =>
        props.id === "true" && props.teamcolor + "19"};
`;

const StyledMeta = styled(List.Item.Meta)`
    .ant-list-item-meta-content {
        align-self: center;
    }
`;

const PlayerName = styled.h3`
    font-size: 14px;
    margin: 0;
`;
const PlayerRole = styled.h5`
    font-size: 10px;
    color: darkgray;
    margin: 0;
`;
