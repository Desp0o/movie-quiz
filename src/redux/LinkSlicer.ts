import { createSlice } from "@reduxjs/toolkit";

const linkSlicer = createSlice({
  name: "linkSlicer",
  initialState: {
    value: "",
  },
  reducers: {
    setLinkName(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setLinkName } = linkSlicer.actions;
export default linkSlicer.reducer;
