import { all, fork, takeLatest, call, put } from "redux-saga/effects";
import {
    loadCitydataFailureAction,
    loadCitydataRequestAction,
    loadCitydataSuccessAction,
} from "../reducers/cityDataReducer";
import {
    getCityFixtures,
    getCityNews,
    getCityPlayers,
    getCityStats,
} from "@features/home/api/getCityData.api";

async function loadCityDataAPI() {
    let cityData = {
        matchList: [],
        currentMonth: "",
        newsList: [],
        playerList: [],
        statList: [],
    };
    await Promise.all([
        getCityFixtures().then((data) => {
            cityData.currentMonth = data.fixturesTab.currentMonth;
            cityData.matchList = data.fixturesTab.fixtures;
        }),
        getCityNews().then((data) => {
            cityData.newsList = data.news;
        }),
        getCityPlayers().then((data) => {
            cityData.playerList = data.squad;
        }),
        getCityStats().then((data) => {
            cityData.statList = data;
        }),
    ]).then((_) => {
        return cityData;
    });
    return cityData;
}

function* loadCityData() {
    try {
        // call로 loadcityDataAPI 를 실행합니다. 인자로 action.data를 넘깁니다. call대신 fork를 쓰면 비동기적으로 지나가버려서 result에 값이 없어서 에러가 납니다.
        const result = yield call(loadCityDataAPI);
        yield put(loadCitydataSuccessAction(result));
    } catch (e) {
        // put은 dispatch와 같은 역할을 합니다. 결과의 data를 Success로 보내줍니다.
        console.error(e);
        yield put(loadCitydataFailureAction(e));
    }
}

function* watchLoadCityData() {
    // takeLatest : 한번에 많은 LOAD_cityData_REQUEST가  들어오면 마지막 요청일 때만 loadcityData 함수를 실행합니다.
    yield takeLatest(loadCitydataRequestAction, loadCityData);
}

export default function* cityDataSaga() {
    yield all([
        // watchLoadcityData를 비동기적으로 실행합니다. 밑에 더 많은 함수들을 적을 수 있어요.
        fork(watchLoadCityData),
    ]);
}
