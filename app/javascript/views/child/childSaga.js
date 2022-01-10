import { call, put, select, takeLatest } from "redux-saga/effects";
import { getDataFromApi } from "../../assets/utils/handleApiCalls";
import {
  fetchChildData, setChildData, reloadChildData, selectChildId,
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

export function* childSaga() {
  yield takeLatest(fetchChildData.type, fetchChildDataHandler);
  yield takeLatest(reloadChildData.type, fetchChildDataHandler);
  yield takeLatest(fetchActivities.type, fetchActivitiesHandler);
  yield takeLatest(reloadActivities.type, fetchActivitiesHandler);
};