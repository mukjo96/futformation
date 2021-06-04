import LoadingView from "@features/common/loadingView";
import PageTitle from "@features/common/text/pageTitle";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { select } from "redux/actions/actExample";
import styled from "styled-components";
import {
    actApiInit,
    actApiRequest,
} from "../../../redux/actions/actApiExample";
import { IApiExampleState } from "../../../redux/interfaces/iApiExample/iApiExample.interfaces";
import { RootStateInterface } from "../../../redux/interfaces/ifRootState";
import PlayerList from "../components/playerList";

const TeamPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    const teamId = useSelector(
        (state: RootStateInterface): number => state.rdcExample.teamId
    );
    const { apiResult, error } = useSelector(
        (state: RootStateInterface): IApiExampleState => state.rdcApiExample
    );

    useEffect(() => {
        setIsLoading(true);
        dispatchApi();
    }, [teamId]);

    const dispatchApi = () => {
        dispatch(actApiInit());
        dispatch(actApiRequest());
        dispatch(select(teamId));
    };

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
