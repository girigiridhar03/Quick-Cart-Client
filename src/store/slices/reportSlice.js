import { createReport } from "@/api/report.api";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reportLoading: false,
  error: null,
};

const reportSlice = createSlice({
  name: "report",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(createReport.pending, (state) => {
        state.reportLoading = true;
        state.error = null;
      })
      .addCase(createReport.fulfilled, (state) => {
        state.reportLoading = false;
      })
      .addCase(createReport.rejected, (state, { payload }) => {
        state.reportLoading = false;
        state.error = payload;
      }),
});

export default reportSlice.reducer;
