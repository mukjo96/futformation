import React from "react";
import { Col, Layout, Row } from "antd";
import styled from "styled-components";
import { IconLogo, TextLogo } from "../logo/Logo";

const { Footer } = Layout;

const Foot = () => {
    return (
        <StyledFooter>
            <StyledRow>
                <TextLogo />
                <Text>
                    Manchester City Unofficial Website ©2021 Created by mukjo96
                </Text>
            </StyledRow>
        </StyledFooter>
    );
};

export default Foot;

const StyledFooter = styled(Footer)`
    text-align: center;
    background-color: #1c2c5b;
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
`;
