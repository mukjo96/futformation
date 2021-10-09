import { all, call, put, take, fork, takeEvery } from "redux-saga/effects";

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
        const action = yield take("SELECT");
        const data: IApiResult = yield call(
            callCityDataAPI,
            action.data.teamId
        );
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
