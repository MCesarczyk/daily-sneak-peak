import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  children: {},
};

const childrenSlice = createSlice({
  name: 'children',
  initialState,
  reducers: {
    setChildren: (state, { payload: children }) => {
      state.children = children;
    },
  },
});

export const {
  setChildren,
} = childrenSlice.actions;

export const selectChildren = state => state.children.children;

export default childrenSlice.reducer;