import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = null as null | number;

export const appIdSlice = createSlice({
  name: "appIdSlice",
  initialState,
  reducers: {
    updateAppId: (state, action: PayloadAction<number | null>) => {
      return action.payload;
    },
  },
});

export const { updateAppId } = appIdSlice.actions;

export default appIdSlice.reducer;
