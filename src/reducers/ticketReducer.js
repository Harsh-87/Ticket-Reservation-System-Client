import { SAVE_TICKET } from "../actions/types";
const initialState = {
  ticket: {},
};

export default function ticketReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_TICKET:
      return {
        ...state,
        ticket: action.payload,
      };

    default:
      return state;
  }
}
