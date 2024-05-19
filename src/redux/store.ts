import { configureStore } from "@reduxjs/toolkit";
import appIdReducer from "./slices/appIdSlice";
import applicationsReducer from "./slices/applicationsSlice";

export const store = configureStore({
  reducer: {
    appId: appIdReducer,
    applications: applicationsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
