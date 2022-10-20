import {takeEvery,put, call} from "@redux-saga/core/effects";
import { fetchData } from "../../api";
import { setDataPeople } from "../actions/getApi";
export function* handlePeople(){
    const data=yield call(fetchData);
    yield put(setDataPeople(data))
}
export function* watchFetchData(){
    yield takeEvery("FETCH_DATA", handlePeople);
}
export default function* rootSaga(){
    yield watchFetchData()
}