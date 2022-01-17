import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import childrenReducer from "../views/children/childrenSlice";
import childReducer from "../views/child/childSlice";
import activitiesReducer from "../views/activities/activitiesSlice";
import dialogReducer from "../views/dialog/dialogSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    children: childrenReducer,
    child: childReducer,
    activities: activitiesReducer,
    dialog: dialogReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;