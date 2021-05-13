import { PageTitle } from "@features/common/Text/pageTitle";
import React, { Fragment } from "react";
import MatchList from "../components/matchList";

const MatchPage = () => {
    return (
        <Fragment>
            <PageTitle text="CITY MATCHES" />
            <MatchList />
        </Fragment>
    );
};

export default MatchPage;
