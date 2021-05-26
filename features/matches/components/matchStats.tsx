import { Col, Progress, Row } from "antd";
import React from "react";
import styled from "styled-components";

const MatchStats = ({ statData }) => {
    const stats = statData.stats;
    const homeColor = statData.teamColors.home;
    const awayColor = statData.teamColors.away;
    return (
        <Row justify="center">
            <Col
                xs={24}
                md={16}
                style={{ padding: "5% 0", justifyContent: "center" }}
            >
                <h2 style={{ textAlign: "center" }}>{stats[0].title}</h2>
                {stats[0].stats.map((stat, index) =>
                    stat.type === "graph" ? (
                        <div key={index}>
                            <Title>{stat.title}</Title>
                            <Row
                                key={stat.title}
                                style={{
                                    justifyContent: "center",
                                    marginBottom: "12px",
                                }}
                            >
                                <Col xs={6} md={4}>
                                    <StatTitle
                                        highlited={stat.highlighted === "home"}
                                        textcolor={homeColor}
                                    >
                                        {stat.stats[0] + "%"}
                                    </StatTitle>
                                </Col>
                                <Col xs={12} md={12}>
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
                                <Col xs={6} md={4}>
                                    <StatTitle
                                        highlited={stat.highlighted === "away"}
                                        textcolor={awayColor}
                                    >
                                        {stat.stats[1] + "%"}
                                    </StatTitle>
                                </Col>
                            </Row>
                        </div>
                    ) : (
                        <div key={index}>
                            {renderPlayerStats(stat, homeColor, awayColor)}
                        </div>
                    )
                )}
            </Col>
            <Row style={{ justifyContent: "center" }}>
                {stats.slice(1, 5).map((subStats, index) => (
                    <Col
                        key={index}
                        xs={24}
                        md={10}
                        style={{ marginBottom: "24px" }}
                    >
                        <h3 style={{ textAlign: "center" }}>
                            {subStats.title}
                        </h3>
                        {subStats.stats.map((stat) => (
                            <div key={stat.title}>
                                {renderPlayerStats(stat, homeColor, awayColor)}
                            </div>
                        ))}
                    </Col>
                ))}
            </Row>
        </Row>
    );

    function renderPlayerStats(stat, homeColor, awayColor) {
        return (
            <Row key={stat.title} style={{ justifyContent: "center" }}>
                <Col xs={6} md={4}>
                    <StatTitle
                        highlited={stat.highlighted === "home"}
                        textcolor={homeColor}
                    >
                        {stat.stats[0]}
                    </StatTitle>
                </Col>
                <Col xs={12} md={12}>
                    <Title>{stat.title}</Title>
                </Col>
                <Col xs={6} md={4}>
                    <StatTitle
                        highlited={stat.highlighted === "away"}
                        textcolor={awayColor}
                    >
                        {stat.stats[1]}
                    </StatTitle>
                </Col>
            </Row>
        );
    }
};
export default MatchStats;

const Title = styled.h3`
    font-size: 14px;
    text-align: center;
    color: darkgray;
    font-weight: 400;
`;

const StatTitle = styled.div<{ highlited: boolean; textcolor: string }>`
    width: 75%;
    margin: 0 auto;
    font-size: 14px;
    text-align: center;
    border-radius: 4px;

    background-color: ${(props) =>
        props.highlited ? props.textcolor : "none"};
    color: ${(props) => (props.highlited ? "white" : "black")};
`;
