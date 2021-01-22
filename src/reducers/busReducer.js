import { ADD_BUS, GET_BUSES, GET_BUS } from "../actions/types";
const initialState = {
  buses: [],
  bus: {},
};

export default function busReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BUS:
      return {
        ...state,
        buses: [action.payload, ...state.buses],
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

    default:
      return state;
  }
}
