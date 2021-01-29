import { combineReducers } from "redux";
import authReducer from "./authReducer";
import busReducer from "./busReducer";
import ticketReducer from "./ticketReducer";
import errorReducer from "./errorsReducer";
import commonReducer from "./commonReducer";

export default combineReducers({
  auth: authReducer,
  busData: busReducer,
  ticketData: ticketReducer,
  errors: errorReducer,
  common: commonReducer,
});
