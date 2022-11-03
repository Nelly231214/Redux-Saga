import {takeEvery,put, call} from "@redux-saga/core/effects";
import { fetchData } from "../../api";
import { deleteData } from "../../api";
import { setDataPeople } from "../actions/getApi";
export function* handlePeople(){
    const data=yield call(fetchData);
    yield put(setDataPeople(data))
}
export function* handleDelPeople(id){
    yield call(deleteData,id)
    const data=yield call(fetchData);
    yield put(setDataPeople(data));
}
export function* watchFetchData(){
    yield takeEvery("FETCH_DATA", handlePeople);
    yield takeEvery ("DELETE_DATA",handleDelPeople)
}
export default function* rootSaga(){
    yield watchFetchData()
}