import { Col, Progress, Row } from "antd";
import React from "react";
import styled from "styled-components";

const MatchStats = ({ statData }) => {
    const stats = statData.stats;
    const homeColor = statData.teamColors.home;
    const awayColor = statData.teamColors.away;
    return (
        <>
            <div style={{ padding: "5% 15%" }}>
                <h2 style={{ textAlign: "center" }}>{stats[0].title}</h2>
                {stats[0].stats.map((stat) =>
                    stat.type === "graph" ? (
                        <div>
                            <Title>{stat.title}</Title>
                            <Row
                                style={{
                                    justifyContent: "center",
                                    marginBottom: "12px",
                                }}
                            >
                                <Col span={4}>
                                    <StatTitle
                                        highlited={stat.highlighted === "home"}
                                        textcolor={homeColor}
                                    >
                                        {stat.stats[0]}
                                    </StatTitle>
                                </Col>
                                <Col span={12}>
                                    <Progress
                                        percent={
                                            (parseInt(stat.stats[0]) /
                                                (parseInt(stat.stats[0]) +
                                                    parseInt(stat.stats[1]))) *
                                            100
                                        }
                                        strokeColor={homeColor}
                                        trailColor={awayColor}
                                        strokeLinecap="square"
                                        showInfo={false}
                                    />
                                </Col>
                                <Col span={4}>
                                    <StatTitle
                                        highlited={stat.highlighted === "away"}
                                        textcolor={awayColor}
                                    >
                                        {stat.stats[1]}
                                    </StatTitle>
                                </Col>
                            </Row>
                        </div>
                    ) : (
                        <div>
                            <Row style={{ justifyContent: "center" }}>
                                <Col span={4}>
                                    <StatTitle
                                        highlited={stat.highlighted === "home"}
                                        textcolor={homeColor}
                                    >
                                        {stat.stats[0]}
                                    </StatTitle>
                                </Col>
                                <Col span={12}>
                                    <Title>{stat.title}</Title>
                                </Col>
                                <Col span={4}>
                                    <StatTitle
                                        highlited={stat.highlighted === "away"}
                                        textcolor={awayColor}
                                    >
                                        {stat.stats[1]}
                                    </StatTitle>
                                </Col>
                            </Row>
                        </div>
                    )
                )}
            </div>
            <Row style={{ justifyContent: "center" }}>
                {stats.slice(1, 5).map((subStats) => (
                    <Col span={10} style={{ marginBottom: "12px" }}>
                        <h3 style={{ textAlign: "center" }}>
                            {subStats.title}
                        </h3>
                        {subStats.stats.map((stat) => (
                            <Row style={{ justifyContent: "center" }}>
                                <Col span={4}>
                                    <StatTitle
                                        highlited={stat.highlighted === "home"}
                                        textcolor={homeColor}
                                    >
                                        {stat.stats[0]}
                                    </StatTitle>
                                </Col>
                                <Col span={12}>
                                    <Title>{stat.title}</Title>
                                </Col>
                                <Col span={4}>
                                    <StatTitle
                                        highlited={stat.highlighted === "away"}
                                        textcolor={awayColor}
                                    >
                                        {stat.stats[1]}
                                    </StatTitle>
                                </Col>
                            </Row>
                        ))}
                    </Col>
                ))}
            </Row>
        </>
    );
};
export default MatchStats;

const Title = styled.h3`
    font-size: 14px;
    text-align: center;
    color: darkgray;
    font-weight: 400;
`;

const StatTitle = styled.div<{ highlited: boolean; textcolor: string }>`
    width: 50%;
    margin: 0 auto;
    font-size: 14px;
    text-align: center;
    border-radius: 4px;

    background-color: ${(props) =>
        props.highlited ? props.textcolor : "none"};
    color: ${(props) => (props.highlited ? "white" : "black")};
`;
