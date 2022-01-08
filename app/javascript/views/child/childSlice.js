import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  child: {},
  activities: [],
};

const childSlice = createSlice({
  name: 'child',
  initialState,
  reducers: {
    setChild: (state, { payload: child }) => {
      state.child = child;
    },
    clearChildData: () => initialState,
    setActivities: (state, { payload: activities }) => {
      state.activities = activities;
    },
    clearActivitiesList: () => initialState,
  },
});

export const {
  setChild,
  clearChildData,
  setActivities,
  clearActivitiesList,
} = childSlice.actions;

export const selectChild = state => state.child.child;
export const selectActivities = state => state.child.activities;

export default childSlice.reducer;