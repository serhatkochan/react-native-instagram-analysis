import { call, put, takeLatest } from "redux-saga/effects";
import { GET_INSTAGRAM_DATA } from "../constants/instagram";
import services from "../services";
import actions from "../actions";

const {
    instagram: {pending, setInstagramData}
} = actions;
const {
    instagram: {getInstagramDataService}
} = services;

export default function* instagram() {
    yield takeLatest(GET_INSTAGRAM_DATA, fetchUserSaga);
}

function* fetchUserSaga() {
    try {
        yield put(pending());
        const response = yield call(getInstagramDataService);
        yield put(setInstagramData(response));
    } catch (error) {
        console.error(error);
    }
}