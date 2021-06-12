import MoreButton from "@features/common/button/moreButton";
import {
    faFutbol,
    faStopwatch,
    faTshirt,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Collapse, List, Row, Col, Divider, Tooltip, Avatar } from "antd";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Fade from "react-reveal-effects/Fade";

const { Panel } = Collapse;

const CareerHistory = ({ playerData }) => {
    const careerHistory = playerData.careerHistory;
    return (
        <ContainerCol>
            {Object.keys(careerHistory.careerData.careerItems).map((key) => (
                <List
                    itemLayout="vertical"
                    dataSource={careerHistory.careerData.careerItems[key]}
                    key={key}
                    header={<strong>{key.toUpperCase()}</strong>}
                    bordered
                    style={{ marginBottom: "24px" }}
                    renderItem={(item: any) => {
                        return (
                            <List.Item>
                                <List.Item.Meta
                                    style={{ margin: 0 }}
                                    title={
                                        <>
                                            <MatchScore>
                                                <Row align="middle">
                                                    <TeamLogo
                                                        src={`https://images.fotmob.com/image_resources/logo/teamlogo/${item.teamId}_small.png`}
                                                        shape="square"
                                                        icon={
                                                            <FontAwesomeIcon
                                                                icon={faUsers}
                                                                color="black"
                                                            />
                                                        }
                                                        style={{
                                                            background: "white",
                                                        }}
                                                        size={{
                                                            xs: 20,
                                                            md: 40,
                                                        }}
                                                        onError={() => true}
                                                    />
                                                    <TeamName>
                                                        {item.team}
                                                    </TeamName>
                                                </Row>

                                                <HistoryCol>
                                                    <HistoryH4>
                                                        {`${item.startDate} ~ ${
                                                            item.endDate ===
                                                            "now"
                                                                ? ""
                                                                : item.endDate
                                                        }`}
                                                    </HistoryH4>
                                                </HistoryCol>
                                            </MatchScore>
                                            <CustomDivider
                                                teamcolor={
                                                    playerData.origin.teamColor
                                                }
                                            />
                                            <StyledRow>
                                                <Col>
                                                    <Tooltip
                                                        title={"Appearances"}
                                                    >
                                                        <ShirtIcon
                                                            icon={faTshirt}
                                                        />
                                                    </Tooltip>
                                                </Col>
                                                <DataCol>
                                                    {item.appearances ?? 0}
                                                </DataCol>
                                                <Divider
                                                    type="vertical"
                                                    style={{
                                                        alignSelf: "center",
                                                    }}
                                                />
                                                <Col>
                                                    <Tooltip title="Goals">
                                                        <GoalIcon
                                                            icon={faFutbol}
                                                        />
                                                    </Tooltip>
                                                </Col>
                                                <DataCol>
                                                    {item.goals ?? 0}
                                                </DataCol>
                                            </StyledRow>
                                        </>
                                    }
                                />
                            </List.Item>
                        );
                    }}
                />
            ))}
        </ContainerCol>
    );
};

export default CareerHistory;

const ContainerCol = styled(Col)`
    @media screen and (max-width: 768px) {
        padding: 5%;
    }
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
        font-size: 12px;
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

const HistoryCol = styled(Col)`
    align-self: center;
`;

const HistoryH4 = styled.h4`
    font-size: 16px;
    font-weight: 500;
    margin: 0;

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const StyledRow = styled(Row)`
    text-align: center;
    .ant-col {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media screen and (max-width: 768px) {
        width: 260px;
    }
`;

const DataCol = styled(Col)`
    margin-left: 4px;
    font-size: 14px;

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const GoalIcon = styled(FontAwesomeIcon)`
    width: 16px !important;
    height: 100%;

    @media screen and (max-width: 768px) {
        width: 14px !important;
        height: 100%;
    }
`;

const ShirtIcon = styled(FontAwesomeIcon)`
    width: 18px !important;
    height: 18px;
    @media screen and (max-width: 768px) {
        width: 14px !important;
        height: 14px;
    }
`;
