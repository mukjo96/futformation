import React, { Fragment, useEffect } from "react";
import styled from "styled-components";
import MainBanner from "../components/mainBanner";
import MatchSchedule from "../components/matchSchedule";

const BackColor = styled.div`
    height: 50vw;
    max-height: 640px;
    margin-top: -68px;
    @media screen and (max-width: 768px) {
        margin-top: 0;
    }
`;
const BackDiv = styled.div`
    background-color: black;
    height: 3000px;
`;

const Home = () => {
    return (
        <Fragment>
            <BackColor>
                <MainBanner />
            </BackColor>
            <MatchSchedule />

            <BackDiv>j</BackDiv>
        </Fragment>
    );
};

export default Home;
