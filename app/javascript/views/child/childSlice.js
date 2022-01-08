import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  child: {},
};

const childSlice = createSlice({
  name: 'child',
  initialState,
  reducers: {
    setChild: (state, { payload: child }) => {
      state.child = child;
    },
  },
});

export const {
  setChild,
} = childSlice.actions;

export const selectChild = state => state.child.child;

export default childSlice.reducer;