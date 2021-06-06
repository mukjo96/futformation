import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootStateInterface } from "../../../redux/interfaces/ifRootState";
import {
    actApiInit,
    actApiRequest,
} from "../../../redux/actions/actApiExample";

import AdBanner from "../components/adBanner";
import LatestNews from "../components/latestNews";
import MainBanner from "../components/mainBanner";
import MatchSchedule from "../components/matchSchedule";
import PlayerStats from "../components/playerStats";
import Sponsorship from "../components/sponsorship";
import TeamPlayers from "../components/teamPlayers";
import { IApiExampleState } from "../../../redux/interfaces/iApiExample/iApiExample.interfaces";
import LoadingView from "@features/common/loadingView";
import { IExampleState } from "redux/interfaces/iExample/iExample.interfaces";
import { select } from "redux/actions/actExample";

const BackDiv = styled.div`
    background-color: white;
    height: 50px;
`;

const Home = () => {
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
            <Container>
                <LoadingView />
            </Container>
        );
    } else {
        console.log(apiResult?.statList);
        return (
            <Fragment>
                <MainBanner bannerList={apiResult?.newsList[0]} />
                <MatchSchedule
                    matchList={apiResult?.matchList}
                    currentMonth={apiResult?.currentMonth}
                />
                <LatestNews
                    newsList={apiResult?.newsList}
                    teamId={team.teamId}
                />
                <TeamPlayers dataList={apiResult?.playerList} />
                <PlayerStats
                    statList={apiResult?.statList}
                    color={team.teamColor}
                    teamId={team.teamId}
                />
                <AdBanner />
                <Sponsorship />
                <BackDiv></BackDiv>
            </Fragment>
        );
    }
};

export default Home;

const Container = styled.div`
    width: 100%;
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        height: 600px;
    }
`;
