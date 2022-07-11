import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../services/auth";

export const getUser = createAsyncThunk(
  "user/login",
  async (user, thunkAPI) => {
    try {
      const currentUser = await loginUser(user);
      return currentUser;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: {},
    isLoading: false,
    error: false,
  },
  reducers: {
    logout(state) {
      state.currentUser = null;
    },
  },
  extraReducers: {
    [getUser.pending]: (state) => {
      state.isLoading = true;
    },
    [getUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
    },
    [getUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
