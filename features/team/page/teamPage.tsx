import LoadingView from "@features/common/loadingView";
import PageTitle from "@features/common/text/pageTitle";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
    actApiInit,
    actApiRequest,
} from "../../../redux/actions/actApiExample";
import { IApiExampleState } from "../../../redux/interfaces/iApiExample/iApiExample.interfaces";
import { RootStateInterface } from "../../../redux/interfaces/ifRootState";
import PlayerList from "../components/playerList";

const TeamPage = () => {
    const dispatch = useDispatch();
    const { apiResult, error } = useSelector(
        (state: RootStateInterface): IApiExampleState => state.rdcApiExample
    );

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (!apiResult) {
            dispatch(actApiInit());
            dispatch(actApiRequest());
        }
    }, []);

    if (isLoading) {
        apiResult && setIsLoading(false);
        return (
            <LoadingContainer>
                <LoadingView />
            </LoadingContainer>
        );
    } else {
        return (
            <Fragment>
                <PageTitle text="CITY SQUAD" />
                <PlayerList playerData={apiResult.playerList} />
            </Fragment>
        );
    }
};

export default TeamPage;

const LoadingContainer = styled.div`
    width: 100%;
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        height: 600px;
    }
`;
