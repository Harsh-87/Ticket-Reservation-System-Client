import axios from "../axiosInstance";
import {
  ADD_MOVIE,
  GET_MOVIES,
  GET_MOVIE,
  GET_ERRORS,
  CLEAR_ERRORS,
  CLEAR_DATA,
} from "./types";

export const addMovie = (movieData) => async (dispatch) => {
  dispatch(clearErrors());
  return await axios
    .post("/movie", movieData)
    .then((res) => {
      dispatch({
        type: ADD_MOVIE,
        payload: res.data,
      });
      return res.data._id;
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
      return null;
    });
};

export const getMovies = (query) => async (dispatch) => {
  await axios
    .get("/movie", { params: query })
    .then((res) => {
      dispatch({
        type: GET_MOVIES,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({
        type: GET_MOVIES,
        payload: null,
      })
    );
};

export const getMovie = (id) => (dispatch) => {
  axios
    .get(`/movie/${id}`)
    .then((res) =>
      dispatch({
        type: GET_MOVIE,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_MOVIE,
        payload: null,
      })
    );
};

export const getMovieAdmin = (id) => (dispatch) => {
  axios
    .get(`/movie/${id}/admin`)
    .then((res) =>
      dispatch({
        type: GET_MOVIE,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_MOVIE,
        payload: null,
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
