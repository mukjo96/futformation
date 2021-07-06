import LoadingView from "@features/common/loadingView";
import SelectTeam from "@features/common/selectTeam";
import PageTitle from "@features/common/text/pageTitle";

import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { select } from "redux/actions/actExample";
import { IExampleState } from "redux/interfaces/iExample/iExample.interfaces";
import {
    actApiInit,
    actApiRequest,
} from "../../../redux/actions/actApiExample";
import { IApiExampleState } from "../../../redux/interfaces/iApiExample/iApiExample.interfaces";
import { RootStateInterface } from "../../../redux/interfaces/ifRootState";
import NewsCard from "../components/newsCard";

const NewsPage = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);

    const team = useSelector(
        (state: RootStateInterface): IExampleState => state.rdcExample
    );
    const { apiResult, error } = useSelector(
        (state: RootStateInterface): IApiExampleState => state.rdcApiExample
    );

    useEffect(() => {
        setIsLoading(true);
        dispatchApi();
    }, [team.teamId]);

    const dispatchApi = () => {
        dispatch(actApiInit());
        dispatch(actApiRequest());
        dispatch(select(team));
    };

    if (team.teamId === 0) {
        return <SelectTeam />;
    } else if (isLoading) {
        apiResult && setIsLoading(false);
        return <LoadingView />;
    } else {
        return (
            <Fragment>
                <PageTitle
                    text={`${team.teamName} NEWS`}
                    mainColor={team.teamColor}
                    subColor={team.teamSubColor}
                />
                <NewsCard newsList={apiResult.newsList} teamId={team.teamId} />
            </Fragment>
        );
    }
};

export default NewsPage;
