import { call, put, select, takeLatest } from "redux-saga/effects";
import { getDataFromApi, removeDataFromApi, sendDataToApi } from "../../assets/utils/handleApiCalls";
import { selectChildId } from "../child/childSlice";
import { setDialogClosed } from "../dialog/dialogSlice";
import {
  fetchActivities, setActivities, reloadActivities, selectActivityData,
  postActivity, selectActivityId, updateActivity, deleteActivity,
  setItemIndex, selectItemIndex, setActivityId,
} from "./activitiesSlice";

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

function* dispatchActivityHandler(url, method) {
  try {
    const activity = yield select(selectActivityData);
    yield call(sendDataToApi, url, method, activity);
    yield put(setDialogClosed());
    yield put(reloadActivities());
  } catch (error) {
    yield call(console.error, error.message);
  }
};

function* postActivityHandler() {
  const childId = yield select(selectChildId);
  const url = `../api/v1/children/${childId}/activities`;
  const method = "post";
  yield put(setItemIndex(0));
  yield call(dispatchActivityHandler, url, method);
};

function* updateActivityHandler() {
  const childId = yield select(selectChildId);
  const activityId = yield select(selectActivityId);
  const url = `../api/v1/children/${childId}/activities/${activityId}`;
  const method = "put";
  yield put(setActivityId(activityId));
  yield call(dispatchActivityHandler, url, method);
};

function* deleteActivityHandler() {
  const childId = yield select(selectChildId);
  const activityId = yield select(selectActivityId);
  const url = `../api/v1/children/${childId}/activities/${activityId}`;
  yield call(removeDataFromApi, url);
  const itemIndex = yield select(selectItemIndex);
  yield put(setItemIndex(itemIndex > 0 ? itemIndex - 1 : 0));
  yield put(reloadActivities(itemIndex));
};

export function* activitiesSaga() {
  yield takeLatest(fetchActivities.type, fetchActivitiesHandler);
  yield takeLatest(reloadActivities.type, fetchActivitiesHandler);
  yield takeLatest(postActivity.type, postActivityHandler);
  yield takeLatest(updateActivity.type, updateActivityHandler);
  yield takeLatest(deleteActivity.type, deleteActivityHandler);
};