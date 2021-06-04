import LoadingView from "@features/common/loadingView";
import PageTitle from "@features/common/text/pageTitle";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { select } from "redux/actions/actExample";
import { IExampleState } from "redux/interfaces/iExample/iExample.interfaces";
import styled from "styled-components";
import {
    actApiInit,
    actApiRequest,
} from "../../../redux/actions/actApiExample";
import { IApiExampleState } from "../../../redux/interfaces/iApiExample/iApiExample.interfaces";
import { RootStateInterface } from "../../../redux/interfaces/ifRootState";
import MatchList from "../components/matchList";

const MatchPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    const team = useSelector(
        (state: RootStateInterface): IExampleState => state.rdcExample
    );
    const { apiResult, error } = useSelector(
        (state: RootStateInterface): IApiExampleState => state.rdcApiExample
    );

    useEffect(() => {
        setIsLoading(true);
        dispatchApi();
    }, [team.teamId]);

    const dispatchApi = () => {
        dispatch(actApiInit());
        dispatch(actApiRequest());
        dispatch(select(team));
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
                <PageTitle
                    text={`${team.teamName} MATCHES`}
                    mainColor={team.teamColor}
                    subColor={team.teamSubColor}
                />
                <MatchList
                    matchData={apiResult.matchList}
                    currentMonth={apiResult.currentMonth}
                />
            </Fragment>
        );
    }
};

export default MatchPage;

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
