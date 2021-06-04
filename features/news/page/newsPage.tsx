import LoadingView from "@features/common/loadingView";
import PageTitle from "@features/common/text/pageTitle";

import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { select } from "redux/actions/actExample";
import {
    actApiInit,
    actApiRequest,
} from "../../../redux/actions/actApiExample";
import { IApiExampleState } from "../../../redux/interfaces/iApiExample/iApiExample.interfaces";
import { RootStateInterface } from "../../../redux/interfaces/ifRootState";
import NewsCard from "../components/newsCard";

const NewsPage = () => {
    const dispatch = useDispatch();

    const [activeNews, setActiveNews] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const teamId = useSelector(
        (state: RootStateInterface): number => state.rdcExample.teamId
    );
    const { apiResult, error } = useSelector(
        (state: RootStateInterface): IApiExampleState => state.rdcApiExample
    );

    useEffect(() => {
        setIsLoading(true);
        dispatchApi();
    }, [teamId]);

    const dispatchApi = () => {
        dispatch(actApiInit());
        dispatch(actApiRequest());
        dispatch(select(teamId));
    };

    if (isLoading) {
        apiResult && setIsLoading(false);
        return <LoadingView />;
    } else {
        return (
            <Fragment>
                <PageTitle text="CITY NEWS" />
                <NewsCard
                    newsList={apiResult.newsList}
                    activeSlide={activeNews}
                    setActiveSlide={setActiveNews}
                />
            </Fragment>
        );
    }
};

export default NewsPage;
