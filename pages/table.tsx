import TablePage from "@features/table/page/tablePage";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styled from "styled-components";

const Table = () => {
    return (
        <Page>
            <TablePage />
        </Page>
    );
};

export default Table;

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
