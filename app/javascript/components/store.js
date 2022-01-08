import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import childrenReducer from "../views/children/childrenSlice";
import childReducer from "../views/child/childSlice";

const store = configureStore({
  reducer: {
    children: childrenReducer,
    child: childReducer,
  },
});

export default store;