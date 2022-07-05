import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: {
    currentUser: null,
    isLoading: false,
    error: false,
  },
  register: {
    isLoading: false,
    error: false,
    success: false,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginPending(state) {
      state.login.isLoading = true;
    },
    loginSuccess(state, action) {
      state.login.currentUser = action.payload;
      state.login.isLoading = false;
    },
    loginFailed(state) {
      state.login.error = true;
      state.login.isLoading = false;
    },
    logout(state) {
      state.login.currentUser = null;
    },
    registerPending(state) {
      state.register.isLoading = true;
    },
    registerSuccess(state) {
      state.register.success = true;
      state.register.isLoading = false;
    },
    registerFailed(state) {
      state.register.error = true;
      state.register.isLoading = false;
    },
  },
});

export const {
  loginPending,
  loginSuccess,
  loginFailed,
  logout,
  registerPending,
  registerSuccess,
  registerFailed,
} = authSlice.actions;
export default authSlice.reducer;
