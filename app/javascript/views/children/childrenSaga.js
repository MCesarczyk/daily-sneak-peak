import { call, put, takeLatest } from "redux-saga/effects";
import { getDataFromApi } from "../../assets/utils/handleApiCalls";
import { fetchChildrenList, reloadChildrenList, setChildrenList } from "./childrenSlice";

function* fetchChildrenListHandler() {
  try {
    console.log("run");
    const url = "api/v1/children";
    const response = yield call(getDataFromApi, url);
    console.log("response");
    const data = yield response;
    yield put(setChildrenList(data));
  } catch (error) {
    yield call(console.error, error.message);
  }
};

export function* childrenSaga() {
  yield takeLatest(fetchChildrenList.type, fetchChildrenListHandler);
  yield takeLatest(reloadChildrenList.type, fetchChildrenListHandler);
};