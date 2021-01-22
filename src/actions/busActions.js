import axios from "axios";
import { ADD_BUS, GET_BUSES, GET_BUS, GET_ERRORS, CLEAR_ERRORS } from "./types";

export const addBus = (busData) => (dispatch) => {
  dispatch(clearErrors());
  axios
    .post("/bus", busData)
    .then((res) =>
      dispatch({
        type: ADD_BUS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err,
      })
    );
};

export const getBuses = (query) => (dispatch) => {
  axios
    .get("/bus", { params: query })
    .then((res) =>
      dispatch({
        type: GET_BUSES,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_BUSES,
        payload: null,
      })
    );
};

export const getBus = (id) => (dispatch) => {
  axios
    .get(`/bus/${id}`)
    .then((res) =>
      dispatch({
        type: GET_BUS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_BUS,
        payload: null,
      })
    );
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
