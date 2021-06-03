import React from "react";
import MatchPage from "@features/matches/page/matchPage";
import styled from "styled-components";

const Matches = () => {
    return (
        <Page>
            <MatchPage />
        </Page>
    );
};

export default Matches;

const Page = styled.div`
    width: 100%;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    @media screen and (min-width: 1280px) {
        width: 1280px;
    }
`;
