import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { AXIOS_URL } from "../../utils/axios";

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${AXIOS_URL}/inscription`, formData);
      console.log(response);
    } catch (error) {
      throw rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (formData, { rejectWithValue }) => {
    const { correctPhone, password } = formData;
    try {
      const response = await axios.post(`${AXIOS_URL}/connexion`, {
        telephone: correctPhone,
        password,
      });
      const userPayload = response?.data?.user;
      console.log(response);
      console.log(userPayload);
      localStorage.setItem("agrihub-user", JSON.stringify(userPayload));
      return userPayload;
    } catch (error) {
      throw rejectWithValue(error);
    }
  }
);

// Async thunk for signout user
export const signOutUser = createAsyncThunk(
  "user/signOutUser",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post(`${AXIOS_URL}/deconnexion`);
      localStorage.removeItem("agrihub-user");
      return null;
    } catch (error) {
      throw rejectWithValue(error);
    }
  }
);

// Async thunk to fetch users
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const usersList = [];

      return usersList;
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "modal",
  initialState: {
    user: JSON.parse(localStorage.getItem("agrihub-user")) || null,
    status: "idle",
    error: null,
    users: [],
    confirmationResult: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;

      state.status = "succeeded";
      state.error = null;
    },
    clearUser: (state) => {
      state.user = null;
      state.status = "idle";
      state.error = null;
    },
    setConfirmationResult: (state, action) => {
      state.confirmationResult = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        console.log(action.error);
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = "succeeded";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        console.log(action.error);
        state.error = action.error.message;
      })
      .addCase(signOutUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signOutUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = "idle";
      })
      .addCase(signOutUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { setUser, clearUser, setConfirmationResult } = userSlice.actions;

export default userSlice.reducer;

export const selectUser = (state) => state.user;
