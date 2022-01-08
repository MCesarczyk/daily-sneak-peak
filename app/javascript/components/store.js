import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import childrenReducer from "../views/children/childrenSlice";

const store = configureStore({
  reducer: {
    children: childrenReducer,
  },
});

export default store;