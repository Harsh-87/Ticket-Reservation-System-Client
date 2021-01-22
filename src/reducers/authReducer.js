import { TYPE_TEST, SET_ADMIN_USER } from "../actions/types";
import isEmpty from "../validations/is-empty";

const initialState = {
  isAuthenticated: false,
  user: {},
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case TYPE_TEST:
      return { ...state, user: action.payload };

    case SET_ADMIN_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };

    default:
      return state;
  }
}
