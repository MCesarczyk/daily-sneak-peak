import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  childId: 0,
  activities: [],
  itemIndex: 0,
  activityId: 0,
  activityData: [],
};

const activitiesSlice = createSlice({
  name: 'activities',
  initialState,
  reducers: {
    fetchActivities: (state, { payload: id }) => {
      state.childId = id;
    },
    setActivities: (state, { payload: activities }) => {
      state.activities = activities;
    },
    reloadActivities: () => { },
    clearActivities: () => initialState,
    setItemIndex: (state, { payload: index }) => {
      state.itemIndex = index;
    },
    setActivityId: (state, { payload: id }) => {
      state.activityId = id;
    },
    setActivityData: (state, { payload: data }) => {
      state.activityData = data;
    },
    postActivity: (state, { payload: activity }) => {
      state.activityData = activity;
    },
    updateActivity: (state, { payload: activity }) => {
      state.activityData = activity;
    },
    deleteActivity: (state, { payload: id }) => {
      state.activityId = id
    },
  },
});

export const {
  fetchActivities,
  setActivities,
  reloadActivities,
  clearActivities,
  setItemIndex,
  setActivityId,
  setActivityData,
  postActivity,
  updateActivity,
  deleteActivity,
} = activitiesSlice.actions;

const selectActivities = state => state.activities;

export const selectActivitiesList = state => selectActivities(state).activities;
export const selectItemIndex = state => selectActivities(state).itemIndex;
export const selectActivityData = state => selectActivities(state).activityData;
export const selectActivityId = state => selectActivityData(state).id;

export default activitiesSlice.reducer;