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

const BackDiv = styled.div`
    background-color: white;
    height: 50px;
`;

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    const dispatch = useDispatch();
    const { apiResult, error } = useSelector(
        (state: RootStateInterface): IApiExampleState => state.rdcApiExample
    );

    useEffect(() => {
        if (!apiResult) {
            handleOnClick();
        }
    }, []);

    const handleOnClick = () => {
        dispatch(actApiInit());
        dispatch(actApiRequest());
    };

    if (isLoading) {
        apiResult && setIsLoading(false);
        return (
            <Container>
                <LoadingView />
            </Container>
        );
    } else {
        return (
            <Fragment>
                <MainBanner bannerList={apiResult?.newsList[0]} />
                <MatchSchedule
                    matchList={apiResult?.matchList}
                    currentMonth={apiResult?.currentMonth}
                />
                <LatestNews newsList={apiResult?.newsList} />
                <TeamPlayers dataList={apiResult?.playerList} />
                <PlayerStats statList={apiResult?.statList} />
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
`;
