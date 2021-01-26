import { GET_ERRORS, SET_ADMIN_USER } from "./types";
import axios from "axios";

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

export const setAdminUser = (user) => {
  return {
    type: SET_ADMIN_USER,
    payload: user,
  };
};
