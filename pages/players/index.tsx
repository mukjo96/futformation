import TeamPage from "@features/team/page/teamPage";
import React from "react";

import styled from "styled-components";

const Players = () => {
    return (
        <Page>
            <TeamPage />
        </Page>
    );
};

export default Players;

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
