import { ADD_MOVIE, GET_MOVIES, GET_MOVIE, CLEAR_DATA } from "../actions/types";
const initialState = {
  movies: [],
  movie: {},
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        movie: action.payload,
      };

    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };

    case GET_MOVIE:
      return {
        ...state,
        movie: action.payload,
      };

    case CLEAR_DATA:
      return {
        ...state,
        movie: {},
        movies: [],
      };

    default:
      return state;
  }
}
