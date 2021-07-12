import React from "react";
import Home from "@features/home/page/Home";
import styled from "styled-components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Index = () => {
    return (
        <Page>
            <Home />
        </Page>
    );
};

export default Index;

export const getServerSideProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["common"])),
    },
});

const Page = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    @media screen and (min-width: 1280px) {
        width: 1280px;
    }
`;
