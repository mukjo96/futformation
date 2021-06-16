import React, { useState } from "react";
import { teamList } from "@features/navigation/teamList";
import styled from "styled-components";
import { Avatar, Button, Col, Radio, Row } from "antd";
import { useDispatch } from "react-redux";
import { IExampleState } from "redux/interfaces/iExample/iExample.interfaces";
import { select } from "redux/actions/actExample";
import { TrophyOutlined } from "@ant-design/icons";
import PageTitle from "./text/pageTitle";

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
                <Radio.Group>
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
                                        : "data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA0OTcgNDk3IiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDQ5NyA0OTciIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgaWQ9Il94M0NfR3JvdXBfeDNFX18zMV8iPjxwYXRoIGQ9Im0yNzAuODUgMjk2Ljc3aC0uMDAxdi01NS4yNjVoLTQ1bC4wMDEuMDE1djcxLjI1bDI0LjI0NiA0LjAwNyAyMC43NTQtNC4wMDd6IiBmaWxsPSIjZmZkMDY0Ii8+PGc+PHBhdGggZD0ibTI3Ni43MTcgMjQ5LjQ3OWgtNTYuNDM1Yy0xLjI0NiAwLTIuNDg3LS4xNTUtMy42OTQtLjQ2MmwtNTQuMTA5LTEzLjc1Yy0zMC43MzYtNy44MTItNTguMDcyLTI0LjUwOS03OS4wNTQtNDguMjg3cy0zNC4xNDctNTIuOTgtMzguMDcxLTg0LjQ0OWMtMi4yNTgtMTguMTA1IDMuMzc0LTM2LjMzMyAxNS40NTEtNTAuMDEgMTIuMDc4LTEzLjY3NyAyOS40NjktMjEuNTIxIDQ3LjcxNC0yMS41MjFoMjc5Ljk2MmMxOC4yNDYgMCAzNS42MzcgNy44NDQgNDcuNzE0IDIxLjUyMXMxNy43MDggMzEuOTA0IDE1LjQ1IDUwLjAxYy0zLjkyNCAzMS40NjktMTcuMDg5IDYwLjY3MS0zOC4wNyA4NC40NDktMjAuOTgyIDIzLjc3OC00OC4zMTggNDAuNDc2LTc5LjA1NCA0OC4yODdsLTU0LjEwOSAxMy43NWMtMS4yMDcuMzA2LTIuNDQ4LjQ2Mi0zLjY5NS40NjJ6bTU0LjExLTI4Ljc1aC4wMXptLTEwOC42NjgtMS4yNWg1Mi42ODNsNTIuMjkxLTEzLjI4OGM1MS4wMzgtMTIuOTcxIDg4LjIyOC01NS4xMTYgOTQuNzQzLTEwNy4zNzIgMS4xOTQtOS41NzItMS43ODMtMTkuMjEtOC4xNjktMjYuNDQtNi4zODUtNy4yMzItMTUuNTc5LTExLjM3OS0yNS4yMjYtMTEuMzc5aC0yNzkuOTYyYy05LjY0NiAwLTE4Ljg0MSA0LjE0Ny0yNS4yMjYgMTEuMzc4LTYuMzg1IDcuMjMtOS4zNjMgMTYuODY3LTguMTY5IDI2LjQzOSA2LjUxNiA1Mi4yNTYgNDMuNzA1IDk0LjQwMiA5NC43NDQgMTA3LjM3M3oiIGZpbGw9IiNmZmQwNjQiLz48L2c+PHBhdGggZD0ibTMxMy44NCAzNDdoLTEzNC40Njh2LTE0LjIyOWMwLTEwLjA5NSA1LjMyOC0xOC40NDMgMTUuMDQ3LTE5LjgwNS45MTYtLjEyOCAxLjg1MS0uMTk1IDIuODAyLS4xOTVoMTAyLjI1NWMxMC4xMDYgMCAxOC40NjEgNy40OTUgMTkuODEgMTcuMjI5LjEyNi45MDYtMy4wNjMgMy4zNzktMy4wNjMgNC4zMnoiIGZpbGw9IiNmZmUwN2QiLz48cGF0aCBkPSJtMzE5LjQ4IDMzMi43N3YxNC4yM2wtNjkuODE2IDguNjctNzIuNDQ0LTguNjd2LTE0LjIzYzAtMTAuMDkgNy40OC0xOC40NCAxNy4yLTE5LjgtLjEzLjkyLS4yIDEuODUtLjIgMi44djkuMjNjMCAyLjc2MSAyLjIzOSA1IDUgNWgxMjAuMDdjLjEzLjkxLjE5IDEuODMuMTkgMi43N3oiIGZpbGw9IiNmZmQwNjQiLz48cGF0aCBkPSJtMTQxLjI0NSAyNS40NTcgMS43MDIgMTMxLjc0NWMwIDYwLjA2MSA0NS4yNjQgMTA3LjU3NCAxMDUuMzI1IDEwNy41NzQgMTcuNjQzIDAgMzQuMzA1LS40NzggNDkuMDM5LTcuOTM1IDM1LjQyNS0xNy45MjggNTkuNzExLTU0LjY3NCA1OS43MTEtOTcuMDkydi0xMzQuMjkyeiIgZmlsbD0iI2ZmZTA3ZCIvPjxwYXRoIGQ9Im0yOTcuMzEgMjU2Ljg0Yy0xNC43MyA3LjQ2LTMxLjQgMTEuNjYtNDkuMDQgMTEuNjYtNjAuMDYgMC0xMDguNzUtNDguNjktMTA4Ljc1LTEwOC43NXYtMTI4Ljc1bDEyLjYxOC03LjU4NSAxNy4zODIgNy41ODV2MTE4Ljc1YzAgNjAuMDYgNDguNjkgMTA4Ljc1IDEwOC43NSAxMDguNzUgNi41IDAgMTIuODYtLjU3IDE5LjA0LTEuNjZ6IiBmaWxsPSIjZmZkMDY0Ii8+PHBhdGggZD0ibTM0Ny44NDkgMzQ3aC0xOTljLTguMjg0IDAtMTIuMzcxIDcuMTk0LTEyLjM3MSAxNS40NzlsMi4zNjIgMTE1LjM4M2MwIDguMjg0IDYuNzE2IDE1IDE1IDE1bDE5My43MDIuNjgxYzguMjg0IDAgMTUuMzA3LTMuMjU4IDE1LjMwNy0xMS41NDN2LTEyMGMwLTguMjg0LTYuNzE1LTE1LTE1LTE1eiIgZmlsbD0iI2FiN2I2NCIvPjxwYXRoIGQ9Im0zNjIuODUgNDgxdjFjMCA4LjI4NC02LjcxNiAxNS0xNSAxNWgtMTk5Yy04LjI4NCAwLTE1LTYuNzE2LTE1LTE1di0xMjBjMC04LjI4NCA2LjcxNi0xNSAxNS0xNWgxdjEyNmMwIDQuNDE4IDMuNTgyIDggOCA4eiIgZmlsbD0iIzlhNmE1MyIvPjxwYXRoIGQ9Im0zMjYuNzMyIDM3N2gtMTQ3Ljc2MmwtNi45MTcgNC41NDNjLTIuNzYxIDAtNSAyLjIzOS01IDVsMi45NTcgNzAuNTc0YzAgMi43NjEgMi4yMzkgNSA1IDVsMTQ2LjY2IDIuMTQ5YzIuNzYxIDAgNS0yLjIzOSA1LTVsNS4wNjItNi4yNjZ2LTcxYzAtMi43NjEtMi4yMzgtNS01LTV6IiBmaWxsPSIjZmZlMDdkIi8+PGcgZmlsbD0iI2ZmZDA2NCI+PHBhdGggZD0ibTMzMS43MyA0NTN2OWMwIDIuNzYxLTIuMjM5IDUtNSA1aC0xNTYuNzZjLTIuNzYxIDAtNS0yLjIzOS01LTV2LTgwYzAtMi43NjEgMi4yMzktNSA1LTVoOXY3MmMwIDIuMjA5IDEuNzkxIDQgNCA0eiIvPjxwYXRoIGQ9Im0yOTUuODUgNDQ0LjVoLTk1Yy00LjE0MiAwLTcuNS0zLjM1Ny03LjUtNy41czMuMzU4LTcuNSA3LjUtNy41aDk1YzQuMTQzIDAgNy41IDMuMzU3IDcuNSA3LjVzLTMuMzU4IDcuNS03LjUgNy41eiIvPjxwYXRoIGQ9Im0yNzcuODUgNDE0LjVoLTU5Yy00LjE0MiAwLTcuNS0zLjM1Ny03LjUtNy41czMuMzU4LTcuNSA3LjUtNy41aDU5YzQuMTQzIDAgNy41IDMuMzU3IDcuNSA3LjVzLTMuMzU4IDcuNS03LjUgNy41eiIvPjwvZz48cGF0aCBkPSJtMzU3LjQxNSAyNy4xNi0yMTYuNzY2IDEuMjU1Yy01LjUyMyAwLTEwLTQuNDc3LTEwLTEwbC41OTYtOC40MTVjMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMGgyLjYwNSAyMTMuOTk5YzUuNTIzIDAgMTAgNC40NzcgMTAgMTB2MTFjMCA1LjUyMy00LjkxMSA2LjE2LTEwLjQzNCA2LjE2eiIgZmlsbD0iI2ZmZTA3ZCIvPjxwYXRoIGQ9Im0zNjcuODUgMTZ2NWMwIDUuNTItNC40OCAxMC0xMCAxMGgtMjE5Yy01LjUyIDAtMTAtNC40OC0xMC0xMHYtMTFjMC01LjUyIDQuNDgtMTAgMTAtMTBoNXY2YzAgNS41MiA0LjQ4IDEwIDEwIDEweiIgZmlsbD0iI2ZmZDA2NCIvPjwvZz48L3N2Zz4="
                                }
                                size="small"
                                style={{
                                    marginRight: "4px",
                                }}
                            />
                            {league.label}
                        </Radio.Button>
                    ))}
                </Radio.Group>
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

const StyledButton = styled(Button)`
    border: none;
    margin: 5%;
`;

const StyledCol = styled(Col)`
    display: flex;
`;
