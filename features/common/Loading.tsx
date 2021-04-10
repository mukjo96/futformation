import React, { Fragment } from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import styled from "styled-components";

const antIcon = <LoadingOutlined style={{ fontSize: "8em" }} spin />;

const Loading = () => {
    return (
        <Fragment>
            <StyledSpin indicator={antIcon} />
        </Fragment>
    );
};

export default Loading;

const StyledSpin = styled(Spin)`
    margin: 10vw auto;
    color: #333333;
`;
