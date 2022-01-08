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
    clearChildrenList: () => initialState,
  },
});

export const {
  setChildren,
  clearChildrenList,
} = childrenSlice.actions;

export const selectChildren = state => state.children.children;

export default childrenSlice.reducer;