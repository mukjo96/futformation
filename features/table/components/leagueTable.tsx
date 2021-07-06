import React from "react";
import styled from "styled-components";
import { Row, Col, Avatar, Divider, List, Empty } from "antd";
import Fade from "react-reveal-effects/Fade";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { tableDataTypes } from "@features/home/api/cityDataTypes";

type propTypes = {
    tableData: tableDataTypes;
    color: string;
    teamId: number;
};

const LeagueTable = ({ tableData, color, teamId }: propTypes) => {
    return (
        <Container justify="space-around">
            {tableData.tables[0].table ? (
                <Col span={24}>
                    <Fade ssrFadeout bottom cascade>
                        <StyledList size="small" bordered teamcolor={color}>
                            <StyledItem isteam={"false"} teamcolor={color}>
                                {renderTableHeader()}
                            </StyledItem>
                            {tableData.tables[0].table.map((team) => (
                                <StyledItem
                                    key={team.id}
                                    isteam={(team.id === teamId).toString()}
                                    teamcolor={color}
                                >
                                    {renderTableData(team)}
                                </StyledItem>
                            ))}
                        </StyledList>
                    </Fade>
                </Col>
            ) : (
                tableData.tables[0].tables.map((tables) => (
                    <Col xs={24} md={10} key={tables.leagueName}>
                        <Fade ssrFadeout bottom cascade>
                            <h3>{tables.leagueName}</h3>
                            <StyledList size="small" bordered teamcolor={color}>
                                <StyledItem isteam={"false"} teamcolor={color}>
                                    {renderTableHeader()}
                                </StyledItem>
                                {tables.table.map((team) => (
                                    <StyledItem
                                        key={team.id}
                                        isteam={(team.id === teamId).toString()}
                                        teamcolor={color}
                                    >
                                        {renderTableData(team)}
                                    </StyledItem>
                                ))}
                            </StyledList>
                        </Fade>
                    </Col>
                ))
            )}
            <Col>
                {tableData.tables[0].legend.map((legend) => (
                    <Row justify="start" align="middle" key={legend.title}>
                        <FontAwesomeIcon icon={faCircle} color={legend.color} />
                        <span style={{ marginLeft: "12px" }}>
                            {legend.title}
                        </span>
                    </Row>
                ))}
            </Col>
        </Container>
    );
};

function renderTableHeader() {
    return (
        <>
            <Col span={1}></Col>
            <Col span={1}>#</Col>
            <Col span={10}>TEAM</Col>
            <Col span={2}>PL</Col>
            <Col span={2}>W</Col>
            <Col span={2}>D</Col>
            <Col span={2}>L</Col>
            <Col span={2}>GD</Col>
            <Col span={2}>PTS</Col>
        </>
    );
}

function renderTableData(team) {
    return (
        <>
            <Col
                span={1}
                style={{
                    alignSelf: "stretch",
                    justifyContent: "center",
                    display: "flex",
                }}
            >
                <LegendDiv
                    style={{
                        backgroundColor: team.qualColor && team.qualColor,
                    }}
                ></LegendDiv>
            </Col>
            <Col span={1}>{team.idx}</Col>
            <Col span={10}>{team.name}</Col>
            <Col span={2}>{team.played}</Col>
            <Col span={2}>{team.wins}</Col>
            <Col span={2}>{team.draws}</Col>
            <Col span={2}>{team.losses}</Col>
            <Col span={2}>{team.goalConDiff}</Col>
            <Col span={2}>
                <strong>{team.pts}</strong>
            </Col>
        </>
    );
}
export default LeagueTable;

const Container = styled(Row)`
    padding: 5%;
`;

const StyledList = styled(List)<{ teamcolor: string }>`
    text-align: center;
    font-size: 12px;
    margin: 36px 0;
    border-radius: 15px;
    background: #ffffff;
    border-color: ${(props) => props.teamcolor};
    box-shadow: 15px 15px 30px #d9d9d9, -15px -15px 30px #ffffff;

    @media screen and (max-width: 768px) {
        box-shadow: 5px 5px 10px #d9d9d9, -5px -5px 10px #ffffff;
    }
`;

const StyledItem = styled(List.Item)<{ isteam: string; teamcolor: string }>`
    background-color: ${(props) =>
        props.isteam === "true" && props.teamcolor + "19"};

    padding: 8px 8px !important;
`;

const LegendDiv = styled.div`
    height: 100%;
    width: 4px;
`;
