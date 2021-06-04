import React, { Fragment } from "react";

import { LoadingOutlined } from "@ant-design/icons";
import styled from "styled-components";
import SyncLoader from "react-spinners/SyncLoader";
import { useSelector } from "react-redux";
import { RootStateInterface } from "redux/interfaces/ifRootState";
import { IExampleState } from "redux/interfaces/iExample/iExample.interfaces";

const LoadingView = () => {
    const team = useSelector(
        (state: RootStateInterface): IExampleState => state.rdcExample
    );

    return (
        <LoadingContainer>
            <StyledSpin color={team.teamColor} speedMultiplier={0.8} />
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
