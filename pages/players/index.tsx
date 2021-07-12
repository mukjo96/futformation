import TeamPage from "@features/team/page/teamPage";
import React from "react";

import styled from "styled-components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Players = () => {
    return (
        <Page>
            <TeamPage />
        </Page>
    );
};

export default Players;

export const getServerSideProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["common"])),
    },
});

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
