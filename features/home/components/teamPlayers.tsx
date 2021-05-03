import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Row, Col, List, Avatar } from "antd";
import BlockTitle from "./Title/blockTitle";
import { getCityPlayers } from "../api/getCityData.api";
import Loading from "@features/common/Loading";
import PlayerInfo from "./playerInfo";

const TeamPlayers = () => {
    const [dataList, setDataList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedId, setSelectedId] = useState(0);

    useEffect(() => {
        getCityPlayers()
            .then((data) => {
                setDataList(data.squad);
            })
            .then((_) => {
                setIsLoading(false);
            });
    }, []);

    const data = [];

    if (isLoading) {
        return <Loading />;
    } else {
        {
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
        return (
            <Container>
                <BlockTitle title="MCI PLAYERS" link="players" theme="light" />
                <StyledRow>
                    <Col span={18}>
                        <PlayerInfo id={selectedId} />
                    </Col>
                    <ListCol span={6}>
                        <List
                            dataSource={data.reverse()}
                            size="large"
                            renderItem={(item) => (
                                <StyledItem
                                    key={item.id}
                                    onClick={() => setSelectedId(item.id)}
                                    id={(selectedId === item.id).toString()}
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
                                                <PlayerName>
                                                    {item.name}
                                                </PlayerName>
                                                <PlayerRole>
                                                    {item.role === "goalkeepers"
                                                        ? "Goalkeeper"
                                                        : item.role ===
                                                          "defenders"
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
    }
};

export default TeamPlayers;

const Container = styled.div`
    padding: 2vw;
    @media screen and (max-width: 768px) {
        padding: 4vw;
    }
`;

const StyledRow = styled(Row)`
    height: 360px;
`;

const ListCol = styled(Col)`
    height: 360px;
    overflow: auto;
`;

const StyledItem = styled(List.Item)<{ id: string }>`
    background-color: ${(props) =>
        props.id === "true" && "rgba(108,171,221,0.1)"};
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
