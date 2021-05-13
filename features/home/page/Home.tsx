import React, { Fragment } from "react";
import styled from "styled-components";
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
    return (
        <Fragment>
            <MainBanner />
            <MatchSchedule />
            <LatestNews />
            <TeamPlayers />
            <PlayerStats />
            <AdBanner />
            <Sponsorship />
            <BackDiv></BackDiv>
        </Fragment>
    );
};

export default Home;
