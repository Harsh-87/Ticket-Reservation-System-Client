import { ADD_BUS, GET_BUSES, GET_BUS, CLEAR_DATA } from "../actions/types";
const initialState = {
  buses: [],
  bus: {},
};

export default function busReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BUS:
      return {
        ...state,
        bus: action.payload,
      };

    case GET_BUSES:
      return {
        ...state,
        buses: action.payload,
      };

    case GET_BUS:
      return {
        ...state,
        bus: action.payload,
      };

    case CLEAR_DATA:
      return {
        ...state,
        bus: {},
        buses: [],
      };

    default:
      return state;
  }
}
