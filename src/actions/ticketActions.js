import axios from "axios";
import { SAVE_TICKET, GET_ERRORS, CLEAR_ERRORS } from "./types";

export const getTicket = (query) => (dispatch) => {
  axios
    .get(`/ticket`, { params: query })
    .then((res) =>
      dispatch({
        type: SAVE_TICKET,
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

export const bookTicket = (ticketData) => (dispatch) => {
  dispatch(clearErrors());
  axios
    .post("/ticket", ticketData)
    .then((res) =>
      dispatch({
        type: SAVE_TICKET,
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

export const cancelTicket = (query) => (dispatch) => {
  dispatch(clearErrors());
  axios
    .delete("/ticket", { params: query })
    .then((res) =>
      dispatch({
        type: SAVE_TICKET,
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

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
