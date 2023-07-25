import { all, fork } from 'redux-saga/effects';

import watchInstagram from "./instagram";

export default function* RootSaga() {
    yield all([
        fork(watchInstagram)
    ]);
}