import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  childId: 0,
  activities: [],
  itemIndex: 0,
  activityId: 0,
  activity: [],
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
    setActivity: (state, { payload: activity }) => {
      state.activity = activity;
    },
    postActivity: (state, { payload: activity }) => {
      state.activity = activity;
    },
    updateActivity: (state, { payload: activity }) => {
      state.activity = activity;
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
  setActivity,
  postActivity,
  updateActivity,
  deleteActivity,
} = activitiesSlice.actions;

const selectActivities = state => state.activities;

export const selectActivitiesList = state => selectActivities(state).activities;
export const selectItemIndex = state => selectActivities(state).itemIndex;
export const selectActivityData = state => selectActivities(state).activity;
export const selectActivityId = state => selectActivityData(state).id;

export default activitiesSlice.reducer;