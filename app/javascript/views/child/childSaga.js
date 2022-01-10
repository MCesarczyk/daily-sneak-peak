import { call, put, select, takeLatest } from "redux-saga/effects";
import { getDataFromApi, sendDataToApi } from "../../assets/utils/handleApiCalls";
import { reloadChildrenList } from "../children/childrenSlice";
import { setDialogClosed } from "../dialog/dialogSlice";
import {
  selectChildData, fetchChildData, setChildData, reloadChildData, selectChildId, postChildData, updateChildData,
  fetchActivities, setActivities, reloadActivities, selectActivity, postActivity, selectActivityId, updateActivity,
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

function* dispatchChildDataHandler(url, method) {
  try {
    const child = yield select(selectChildData);
    yield call(sendDataToApi, url, method, child);
    yield put(setDialogClosed());
  } catch (error) {
    yield call(console.error, error.message);
  }
};

function* postChildDataHandler() {
  const url = "api/v1/children";
  const method = "post";
  yield call(dispatchChildDataHandler, url, method);
  yield put(reloadChildrenList());
};

function* updateChildDataHandler() {
  const id = yield select(selectChildId);
  const url = `../api/v1/children/${id}`;
  const method = "put";
  yield call(dispatchChildDataHandler, url, method);
};

function* dispatchActivityHandler(url, method) {
  try {
    const activity = yield select(selectActivity);
    yield call(sendDataToApi, url, method, activity);
    yield put(setDialogClosed());
  } catch (error) {
    yield call(console.error, error.message);
  }
};

function* postActivityHandler() {
  const childId = yield select(selectChildId);
  const url = `../api/v1/children/${childId}/activities`;
  const method = "post";
  yield call(dispatchActivityHandler, url, method);
};

function* updateActivityHandler() {
  const childId = yield select(selectChildId);
  const activityId = yield select(selectActivityId);
  const url = `../api/v1/children/${childId}/activities/${activityId}`;
  const method = "put";
  yield call(dispatchActivityHandler, url, method);
};

export function* childSaga() {
  yield takeLatest(fetchChildData.type, fetchChildDataHandler);
  yield takeLatest(reloadChildData.type, fetchChildDataHandler);
  yield takeLatest(postChildData.type, postChildDataHandler);
  yield takeLatest(updateChildData.type, updateChildDataHandler);
  yield takeLatest(fetchActivities.type, fetchActivitiesHandler);
  yield takeLatest(reloadActivities.type, fetchActivitiesHandler);
  yield takeLatest(postActivity.type, postActivityHandler);
  yield takeLatest(updateActivity.type, updateActivityHandler);
};