import Loading from "@features/common/loading";
import { PageTitle } from "@features/common/text/pageTitle";

import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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

    const { apiResult, error } = useSelector(
        (state: RootStateInterface): IApiExampleState => state.rdcApiExample
    );

    useEffect(() => {
        if (!apiResult) {
            dispatch(actApiInit());
            dispatch(actApiRequest());
        }
    }, []);

    if (isLoading) {
        apiResult && setIsLoading(false);
        return <Loading />;
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
