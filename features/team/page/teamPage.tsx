import Loading from "@features/common/Loading";
import { PageTitle } from "@features/common/Text/pageTitle";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    actApiInit,
    actApiRequest,
} from "../../../redux/actions/actApiExample";
import { IApiExampleState } from "../../../redux/interfaces/iApiExample/iApiExample.interfaces";
import { RootStateInterface } from "../../../redux/interfaces/ifRootState";

const TeamPage = () => {
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
        return <Loading />;
    } else {
        return (
            <Fragment>
                <PageTitle text="CITY SQUAD" />
            </Fragment>
        );
    }
};

export default TeamPage;
