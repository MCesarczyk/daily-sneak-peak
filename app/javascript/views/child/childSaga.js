import { call, put, select, takeLatest } from "redux-saga/effects";
import { getDataFromApi, sendDataToApi } from "../../assets/utils/handleApiCalls";
import { reloadChildrenList } from "../children/childrenSlice";
import { setDialogClosed } from "../dialog/dialogSlice";
import {
  selectChildData, fetchChildData, setChildData, reloadChildData, putChildData, selectChildId,
  fetchActivities, setActivities, reloadActivities,
} from "./childSlice";

function* fetchChildDataHandler() {
  try {
    const id = yield select(selectChildId);
    const url = `../api/v1/children/${id}`;
    const response = yield call(getDataFromApi, url);
    const data = yield response;
    yield put(setChildData(data));
  } catch (error) {
    yield call(console.error, error.message);
  }
};

function* fetchActivitiesHandler() {
  try {
    const id = yield select(selectChildId);
    const url = `../api/v1/children/${id}/activities`;
    const response = yield call(getDataFromApi, url);
    const data = yield response;
    yield put(setActivities(data));
  } catch (error) {
    yield call(console.error, error.message);
  }
};

function* putChildDataHandler() {
  try {
    const url = "api/v1/children";
    const child = yield select(selectChildData);
    yield call(sendDataToApi, url, 'post', child);
    yield put(setDialogClosed());
    yield put(reloadChildrenList());
  } catch (error) {
    yield call(console.error, error.message);
  }
};

export function* childSaga() {
  yield takeLatest(fetchChildData.type, fetchChildDataHandler);
  yield takeLatest(reloadChildData.type, fetchChildDataHandler);
  yield takeLatest(putChildData.type, putChildDataHandler);
  yield takeLatest(fetchActivities.type, fetchActivitiesHandler);
  yield takeLatest(reloadActivities.type, fetchActivitiesHandler);
};