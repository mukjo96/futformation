import React from "react";
import NewsPage from "@features/news/page/newsPage";
import styled from "styled-components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const News = () => {
    return (
        <Page>
            <NewsPage />
        </Page>
    );
};

export default News;

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
