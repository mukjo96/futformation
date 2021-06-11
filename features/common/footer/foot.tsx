import React from "react";
import { Col, Layout, Row } from "antd";
import styled from "styled-components";
import { IconLogo, TextLogo } from "../logo/Logo";
import { useSelector } from "react-redux";
import { RootStateInterface } from "redux/interfaces/ifRootState";

const { Footer } = Layout;

const Foot = () => {
    const teamColor = useSelector(
        (state: RootStateInterface): string => state.rdcExample.teamColor
    );
    return (
        <StyledFooter teamcolor={teamColor}>
            <StyledRow>
                <Row align="middle">
                    <TextLogo />
                    {/* <Text>FUTFORMATION</Text> */}
                </Row>
                <Col>
                    <Text>©2021 Created by mukjo96</Text>
                </Col>
            </StyledRow>
        </StyledFooter>
    );
};

export default Foot;

const StyledFooter = styled(Footer)<{ teamcolor: string }>`
    text-align: center;
    background-color: ${(props) => props.teamcolor};
    color: white;
    border-top: 1px solid #d6d6d6;
`;

const StyledRow = styled(Row)`
    justify-content: center;
    align-items: center;
    text-align: start;
`;

const Text = styled.h4`
    color: white;
    margin: 0;
    padding-left: 12px;

    strong {
        font-family: "Viaoda Libre", cursive;
        font-weight: 400;
        font-size: 16px;
    }
`;
