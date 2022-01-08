import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  activities: [],
  itemIndex: 0,
  activity: [],
};

const childSlice = createSlice({
  name: 'child',
  initialState,
  reducers: {
    setChildData: (state, { payload: child }) => {
      state.data = child;
    },
    clearChildData: () => initialState,
    setActivities: (state, { payload: activities }) => {
      state.activities = activities;
    },
    clearActivitiesList: () => initialState,
    setItemIndex: (state, { payload: index }) => {
      state.itemIndex = index;
    },
    clearItemIndex: () => initialState,
    setActivity: (state, { payload: activity }) => {
      state.activity = activity;
    },
    clearActivity: () => initialState,
  },
});

export const {
  setChildData,
  clearChildData,
  setActivities,
  clearActivitiesList,
  setItemIndex,
  clearItemIndex,
  setActivity,
  clearActivity,
} = childSlice.actions;

const selectChild = state => state.child;

export const selectChildData = state => selectChild(state).data;
export const selectActivities = state => selectChild(state).activities;
export const selectItemIndex = state => selectChild(state).itemIndex;
export const selectActivity = state => selectChild(state).activity;

export default childSlice.reducer;