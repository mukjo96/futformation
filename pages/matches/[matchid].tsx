import MatchInfoPage from "@features/matches/page/matchInfoPage";
import React from "react";
import styled from "styled-components";

const MatchInfo = () => {
    return (
        <Page>
            <MatchInfoPage />
        </Page>
    );
};

export default MatchInfo;

const Page = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    @media screen and (min-width: 1280px) {
        width: 1280px;
    }
`;
