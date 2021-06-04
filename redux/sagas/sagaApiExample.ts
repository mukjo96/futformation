import {
    all,
    call,
    delay,
    put,
    take,
    takeLatest,
    fork,
    takeEvery,
} from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";

import { actApiSuccess, actApiFail } from "../actions/actApiExample";
import {
    EActionTypesApiExample,
    IActApiRequest,
} from "../interfaces/iApiExample/iApiExampleAct.interfaces";
import { IApiResult } from "../interfaces/iApiExample/iApiExample.interfaces";
import {
    getCityFixtures,
    getCityNews,
    getCityPlayers,
    getCityStats,
} from "@features/home/api/getCityData.api";
import { useSelector } from "react-redux";
import { RootStateInterface } from "redux/interfaces/ifRootState";

async function callCityDataAPI(teamId: number) {
    let matchList, currentMonth, newsList, playerList, statList;
    await Promise.all([
        getCityFixtures(teamId).then((data) => {
            currentMonth = data.fixturesTab.currentMonth;
            matchList = data.fixturesTab.fixtures;
        }),
        getCityNews(teamId).then((data) => {
            newsList = data.news;
        }),
        getCityPlayers(teamId).then((data) => {
            playerList = data.squad;
        }),
        getCityStats(teamId).then((data) => {
            statList = data;
        }),
    ]);
    return {
        matchList: matchList,
        currentMonth: currentMonth,
        newsList: newsList,
        playerList: playerList,
        statList: statList,
    };
}

function* apiRequest() {
    try {
        // const headers = { headers: { Authorization: "bearer " } };
        // const formData = new FormData();
        // formData.append('id', id);

        // const { status, data }: AxiosResponse<ICityDataReducer> = yield call(
        //     axios.post,
        //     "/api/animal",
        //     params,
        //     headers
        // );
        const action = yield take("SELECT");
        const data: IApiResult = yield call(callCityDataAPI, action.teamId);
        yield put(actApiSuccess(data));
    } catch (err) {
        yield put(actApiFail(err));
    }
}

function* watchApiRequest() {
    yield takeEvery(EActionTypesApiExample.API_REQUEST, apiRequest);
}

function* sagaApiExample(): Generator {
    yield all([fork(watchApiRequest)]);
}

export default sagaApiExample;
