import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AXIOS_URL } from "../../utils/axios";

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${AXIOS_URL}/formation`);
      const data = response.data;
      return data.formations;
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);

const courseSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [],
    currentCourse: null,
    parts: [],
    status: "idle",
    error: null,
  },
  reducers: {
    setCurrentCourse: (state, action) => {
      state.currentCourse = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.courses = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default courseSlice.reducer;
export const { setCurrentCourse } = courseSlice.actions;
export const selectCourses = (state) => state.courses;
