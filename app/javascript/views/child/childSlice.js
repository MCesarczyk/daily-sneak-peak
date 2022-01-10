import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 0,
  data: {},
  activities: [],
  itemIndex: 0,
  activity: [],
};

const childSlice = createSlice({
  name: 'child',
  initialState,
  reducers: {
    fetchChildData: (state, { payload: id }) => {
      state.id = id;
    },
    setChildData: (state, { payload: child }) => {
      state.data = child;
    },
    postChildData: (state, { payload: child }) => {
      state.data = child;
    },
    updateChildData: (state, { payload: child }) => {
      state.data = child;
    },
    reloadChildData: (state, { payload: id }) => {
      state.data = {};
      state.id = id;
    },
    clearChildData: () => initialState,
    fetchActivities: () => { },
    setActivities: (state, { payload: activities }) => {
      state.activities = activities;
    },
    postActivity: (state, { payload: activity }) => {
      state.activity = activity;
    },
    reloadActivities: () => initialState,
    clearActivities: () => initialState,
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
  fetchChildData,
  setChildData,
  postChildData,
  updateChildData,
  reloadChildData,
  clearChildData,
  fetchActivities,
  setActivities,
  postActivity,
  reloadActivities,
  clearActivities,
  setItemIndex,
  clearItemIndex,
  setActivity,
  clearActivity,
} = childSlice.actions;

const selectChild = state => state.child;

export const selectChildId = state => selectChild(state).id;
export const selectChildData = state => selectChild(state).data;
export const selectActivities = state => selectChild(state).activities;
export const selectItemIndex = state => selectChild(state).itemIndex;
export const selectActivity = state => selectChild(state).activity;

export default childSlice.reducer;