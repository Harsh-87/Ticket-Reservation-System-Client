import axios from "axios";
import { SAVE_TICKET, CLEAR_ERRORS, CLEAR_DATA } from "./types";

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
        type: SAVE_TICKET,
        payload: {},
      })
    );
};

export const bookTicket = (ticketData, history) => (dispatch) => {
  dispatch(clearErrors());
  axios
    .post("/ticket", ticketData)
    .then((res) => {
      dispatch({
        type: SAVE_TICKET,
        payload: res.data,
      });
      history.push("/status");
    })
    .catch((err) =>
      dispatch({
        type: SAVE_TICKET,
        payload: {},
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
        type: SAVE_TICKET,
        payload: {},
      })
    );
};

export const clearData = () => (dispatch) => {
  dispatch({
    type: CLEAR_DATA,
    payload: {},
  });
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
