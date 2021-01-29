import { GET_ERRORS, SET_ADMIN_USER } from "./types";
import axios from "../axiosInstance";

export const registerUser = (userdata, history) => (dispatch) => {
  axios
    .post("/admin/register", userdata)
    .then((res) => history.push("/admin/login"))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err,
      })
    );
};

export const loginUser = (userdata) => (dispatch) => {
  axios
    .post("/admin/login", userdata)
    .then((res) => {
      dispatch(setAdminUser(res.data.user));
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err,
      })
    );
};

export const logoutUser = () => (dispatch) => {
  axios
    .get("/admin/logout")
    .then((res) => {
      dispatch(setAdminUser({}));
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err,
      })
    );
};

export const verifyAdmin = () => async (dispatch) => {
  return await axios
    .get("/admin/verifyAdmin")
    .then((res) => {
      dispatch(setAdminUser(res.data.user));
      return true;
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
      return false;
    });
};

export const setAdminUser = (user) => {
  return {
    type: SET_ADMIN_USER,
    payload: user,
  };
};
