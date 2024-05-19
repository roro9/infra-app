import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IApplication {
  id: number;
  name: string;
  status: "deployed" | "uninstalled";
  version: string;
  updatedAt: `${EpochTimeStamp}`;
  desiredVersion: string;
}

type IApplicationsState = IApplication[];

const initialState: IApplicationsState = [];

export const applicationsSlice = createSlice({
  name: "applicationsSlice",
  initialState,
  reducers: {
    updateApplications: (state, action: PayloadAction<IApplicationsState>) => {
      return [...action.payload];
    },
  },
});

export const { updateApplications } = applicationsSlice.actions;

export default applicationsSlice.reducer;
