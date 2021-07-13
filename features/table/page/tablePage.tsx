import LoadingView from "@features/common/loadingView";
import SelectTeam from "@features/common/selectTeam";
import PageTitle from "@features/common/text/pageTitle";
import { useTranslation } from "next-i18next";

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
import LeagueTable from "../components/leagueTable";
const TablePage = () => {
    const dispatch = useDispatch();

    const [activeNews, setActiveNews] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const team = useSelector(
        (state: RootStateInterface): IExampleState => state.rdcExample
    );
    const { apiResult, error } = useSelector(
        (state: RootStateInterface): IApiExampleState => state.rdcApiExample
    );
    const { t } = useTranslation("common");

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
                    text="STANDINGS"
                    mainColor={team.teamColor}
                    subColor={team.teamSubColor}
                    teamName={t(apiResult?.statList[1].tables[0].leagueName)}
                />
                <LeagueTable
                    tableData={apiResult?.statList[1]}
                    color={team.teamColor}
                    teamId={team.teamId}
                />
            </Fragment>
        );
    }
};

export default TablePage;
