import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  activities: [],
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
  },
});

export const {
  setChildData,
  clearChildData,
  setActivities,
  clearActivitiesList,
} = childSlice.actions;

const selectChild = state => state.child;

export const selectChildData = state => selectChild(state).data;
export const selectActivities = state => selectChild(state).activities;

export default childSlice.reducer;