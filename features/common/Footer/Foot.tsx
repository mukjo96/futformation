import React from "react";
import { Layout } from "antd";
import styled from "styled-components";

const { Footer } = Layout;

const Foot = () => {
    return <StyledFooter>Movie App ©2020 Created by mukjo96</StyledFooter>;
};

export default Foot;

const StyledFooter = styled(Footer)`
    text-align: center;
    background-color: white;
    color: #a0a0a0;
    border-top: 1px solid #d6d6d6;
`;
