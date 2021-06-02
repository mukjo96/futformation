import LoadingView from "@features/common/loadingView";
import { PageTitle } from "@features/common/text/pageTitle";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    actApiInit,
    actApiRequest,
} from "../../../redux/actions/actApiExample";
import { IApiExampleState } from "../../../redux/interfaces/iApiExample/iApiExample.interfaces";
import { RootStateInterface } from "../../../redux/interfaces/ifRootState";
import MatchList from "../components/matchList";

const MatchPage = () => {
    const dispatch = useDispatch();
    const { apiResult, error } = useSelector(
        (state: RootStateInterface): IApiExampleState => state.rdcApiExample
    );

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (!apiResult) {
            dispatch(actApiInit());
            dispatch(actApiRequest());
        }
    }, []);

    if (isLoading) {
        apiResult && setIsLoading(false);
        return <LoadingView />;
    } else {
        return (
            <Fragment>
                <PageTitle text="CITY MATCHES" />
                <MatchList
                    matchData={apiResult.matchList}
                    currentMonth={apiResult.currentMonth}
                />
            </Fragment>
        );
    }
};

export default MatchPage;
