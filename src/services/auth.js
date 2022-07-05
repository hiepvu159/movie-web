import axios from "axios";
import {
  loginPending,
  loginSuccess,
  loginFailed,
  logout,
  registerPending,
  registerSuccess,
  registerFailed,
} from "../redux/authSlice";

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginPending());
  try {
    const res = await axios.post(`/auth/login`, user);
    localStorage.setItem("token", res.data.accessToken);
    if (res.data.isAdmin === true) {
      navigate("/admin");
    } else navigate("/");
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailed(error));
  }
};

export const logoutUser = async (dispatch, navigate) => {
  dispatch(logout());
  navigate("/");
};

export const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerPending());
  try {
    await axios.post(`/auth/register`, user);
    dispatch(registerSuccess());
    navigate("/login");
  } catch (error) {
    dispatch(registerFailed());
  }
};
