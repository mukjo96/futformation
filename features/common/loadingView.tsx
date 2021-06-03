import React, { Fragment } from "react";

import { LoadingOutlined } from "@ant-design/icons";
import styled from "styled-components";
import SyncLoader from "react-spinners/SyncLoader";

const LoadingView = () => {
    return (
        <LoadingContainer>
            <StyledSpin color="#6cabdd" speedMultiplier={0.8} />
        </LoadingContainer>
    );
};

export default LoadingView;

const StyledSpin = styled(SyncLoader)`
    margin: 10vw auto;
    justify-self: center;
    align-self: center;
`;

const LoadingContainer = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
