import { combineReducers } from "redux";
import authReducer from "./authReducer";
import movieReducer from "./movieReducer";
import ticketReducer from "./ticketReducer";
import errorReducer from "./errorsReducer";

export default combineReducers({
  auth: authReducer,
  movieData: movieReducer,
  ticketData: ticketReducer,
  errors: errorReducer,
});
