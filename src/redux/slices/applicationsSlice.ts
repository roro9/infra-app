import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IApplication } from "../../interfaces";

type IApplicationsState = IApplication[];

const initialState: IApplicationsState = [];

export const applicationsSlice = createSlice({
  name: "applicationsSlice",
  initialState,
  reducers: {
    updateApplications: (_state, action: PayloadAction<IApplicationsState>) => {
      return [...action.payload];
    },
  },
});

export const { updateApplications } = applicationsSlice.actions;

export default applicationsSlice.reducer;
