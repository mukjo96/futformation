import React, { useState } from "react";

import styled from "styled-components";
import { Avatar, Button, Col, Radio, Row } from "antd";
import { useDispatch } from "react-redux";
import { IExampleState } from "redux/interfaces/iExample/iExample.interfaces";
import { select } from "redux/actions/actExample";
import PageTitle from "./text/pageTitle";
import { teamList } from "@features/data/teamList";

const SelectTeam = () => {
    const [selectedLeagueIndex, setSelectedLeagueIndex] = useState(0);

    const dispatch = useDispatch();

    function changeTeam(teamInfo: IExampleState) {
        dispatch(select(teamInfo));
    }

    return (
        <Container>
            <PageTitle
                text="SELECT YOUR TEAM!"
                mainColor="black"
                subColor="white"
            />
            <Row justify="center" style={{ margin: "3% 0" }}>
                <StyledRadio value={selectedLeagueIndex}>
                    {teamList.map((league, index) => (
                        <Radio.Button
                            value={index}
                            onChange={(e) =>
                                setSelectedLeagueIndex(e.target.value)
                            }
                            key={league.leagueId}
                        >
                            <Avatar
                                src={
                                    league.leagueId !== 0
                                        ? `https://images.fotmob.com/image_resources/logo/leaguelogo/${league.leagueId}.png`
                                        : "data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTUuNTU1IDUxNS41NTUiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTE1LjU1NSA1MTUuNTU1IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im00OTYuNjc5IDIxMi4yMDhjMjUuMTY3IDI1LjE2NyAyNS4xNjcgNjUuOTcxIDAgOTEuMTM4cy02NS45NzEgMjUuMTY3LTkxLjEzOCAwLTI1LjE2Ny02NS45NzEgMC05MS4xMzggNjUuOTcxLTI1LjE2NyA5MS4xMzggMCIvPjxwYXRoIGQ9Im0zMDMuMzQ3IDIxMi4yMDhjMjUuMTY3IDI1LjE2NyAyNS4xNjcgNjUuOTcxIDAgOTEuMTM4cy02NS45NzEgMjUuMTY3LTkxLjEzOCAwLTI1LjE2Ny02NS45NzEgMC05MS4xMzggNjUuOTcxLTI1LjE2NyA5MS4xMzggMCIvPjxwYXRoIGQ9Im0xMTAuMDE0IDIxMi4yMDhjMjUuMTY3IDI1LjE2NyAyNS4xNjcgNjUuOTcxIDAgOTEuMTM4cy02NS45NzEgMjUuMTY3LTkxLjEzOCAwLTI1LjE2Ny02NS45NzEgMC05MS4xMzggNjUuOTcxLTI1LjE2NyA5MS4xMzggMCIvPjwvc3ZnPg=="
                                }
                                size="small"
                                style={{
                                    marginRight: "4px",
                                }}
                            />
                            <LeagueName>
                                {league.leagueId !== 0 && league.label}
                            </LeagueName>
                        </Radio.Button>
                    ))}
                </StyledRadio>
            </Row>
            <Col span={24}>
                {teamList[selectedLeagueIndex].label === "EURO" ||
                teamList[selectedLeagueIndex].label === "COPA AMERICA" ? (
                    teamList[selectedLeagueIndex].children.map((group) => (
                        <>
                            <h3>{group.label}</h3>
                            <Row
                                key={group.label}
                                style={{ marginBottom: "3%" }}
                            >
                                {group.children.map((team) => (
                                    <StyledCol xs={24} md={6} key={team.teamId}>
                                        <StyledButton
                                            type="primary"
                                            style={{
                                                background: team.teamColor,
                                            }}
                                            block
                                            size="large"
                                            shape="round"
                                            onClick={() => changeTeam(team)}
                                        >
                                            <Row
                                                align="middle"
                                                justify="center"
                                            >
                                                <Avatar
                                                    src={`https://images.fotmob.com/image_resources/logo/teamlogo/${team.teamId}_small.png`}
                                                    size="small"
                                                    style={{
                                                        marginRight: "4px",
                                                    }}
                                                />

                                                {team.teamNameLong}
                                            </Row>
                                        </StyledButton>
                                    </StyledCol>
                                ))}
                            </Row>
                        </>
                    ))
                ) : (
                    <Row>
                        {teamList[selectedLeagueIndex].children.map((team) => (
                            <StyledCol xs={24} md={6} key={team.teamId}>
                                <StyledButton
                                    type="primary"
                                    style={{
                                        background: team.teamColor,
                                    }}
                                    block
                                    size="large"
                                    shape="round"
                                    onClick={() => changeTeam(team)}
                                >
                                    <Row align="middle" justify="center">
                                        <Avatar
                                            src={`https://images.fotmob.com/image_resources/logo/teamlogo/${team.teamId}_small.png`}
                                            size="small"
                                            style={{ marginRight: "3%" }}
                                        />

                                        {team.teamNameLong}
                                    </Row>
                                </StyledButton>
                            </StyledCol>
                        ))}
                    </Row>
                )}
            </Col>
        </Container>
    );
};

export default SelectTeam;

const Container = styled.div`
    padding: 3% 5%;
`;

const StyledRadio = styled(Radio.Group)`
    text-align: center;
`;

const LeagueName = styled.span`
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const StyledButton = styled(Button)`
    border: none;
    margin: 5%;
    :hover {
        div {
            text-decoration: underline;
        }
    }
`;

const StyledCol = styled(Col)`
    display: flex;
`;
