import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeLink: "home",
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setActiveLink: (state, action) => {
      state.activeLink = action.payload;
    },
  },
});

export default pageSlice.reducer;

export const { setActiveLink } = pageSlice.actions;
export const selectActiveLink = (state) => state.page.activeLink;
