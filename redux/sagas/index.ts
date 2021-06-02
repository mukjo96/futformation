import { all, fork } from "redux-saga/effects";

import sagaApiExample from "./sagaApiExample";

export default function* rootSaga() {
    yield all([fork(sagaApiExample)]);
}
