import { SHOW_TOAST } from "../actions/types";
const initialState = { toasts: [{ text: "goodness", id: "toast1000" }] };
const MAX_TOASTS = 3;

export default function commonReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_TOAST:
      initialState.toasts.push({ text: action.text, id: action.id });
      while (initialState.toasts.length > MAX_TOASTS) {
        initialState.toasts.pop();
      }
      return { ...initialState, toasts: [...initialState.toasts] };
    default:
      return initialState;
  }
}
