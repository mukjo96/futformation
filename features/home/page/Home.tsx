import Loading from "@features/common/Loading";
import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import {
    matchDataTypes,
    newsDataTypes,
    playerListDataTypes,
    playerStatDataTypes,
} from "../api/cityDataTypes";
import {
    getCityFixtures,
    getCityNews,
    getCityPlayers,
    getCityStats,
} from "../api/getCityData.api";
import AdBanner from "../components/adBanner";
import LatestNews from "../components/latestNews";
import MainBanner from "../components/mainBanner";
import MatchSchedule from "../components/matchSchedule";
import PlayerStats from "../components/playerStats";
import Sponsorship from "../components/sponsorship";
import TeamPlayers from "../components/teamPlayers";

const BackDiv = styled.div`
    background-color: white;
    height: 50px;
`;

const Home = () => {
    const [matchList, setMatchList] = useState<Array<matchDataTypes>>();
    const [currentMonth, setCurrentMonth] = useState("");
    const [newsList, setNewsList] = useState<Array<newsDataTypes>>();
    const [dataList, setDataList] = useState<Array<playerListDataTypes>>();
    const [statList, setStatList] = useState<playerStatDataTypes>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getCityApi();
    }, []);

    function getCityApi() {
        getCityNews().then((data) => {
            setNewsList(data.news);
        });
        getCityFixtures().then((data) => {
            setCurrentMonth(data.fixturesTab.currentMonth);
            setMatchList(data.fixturesTab.fixtures);
        });
        getCityPlayers().then((data) => {
            setDataList(data.squad);
        });
        getCityStats().then((data) => {
            setStatList(data);
        });
    }

    if (isLoading) {
        matchList && newsList && dataList && statList && setIsLoading(false);

        return <Loading />;
    } else {
        return (
            <Fragment>
                <MainBanner bannerList={newsList[0]} />
                <MatchSchedule
                    matchList={matchList}
                    currentMonth={currentMonth}
                />
                <LatestNews newsList={newsList} />
                <TeamPlayers dataList={dataList} />
                <PlayerStats statList={statList} />
                <AdBanner />
                <Sponsorship />
                <BackDiv></BackDiv>
            </Fragment>
        );
    }
};

export default Home;
