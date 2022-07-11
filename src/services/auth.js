import axios from "axios";
import { logout } from "../redux/authSlice";

export const loginUser = async (user) => {
  const res = await axios.post(`/auth/login`, user);
  localStorage.setItem("user", JSON.stringify(res.data));
};

export const logoutUser = async (dispatch, navigate) => {
  localStorage.setItem("user", null);
  dispatch(logout());
  navigate("/login");
};

export const registerUser = async (user) => {
  await axios.post(`/auth/register`, user);
};
