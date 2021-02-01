import { SHOW_TOAST } from "./types";
let curToastNum = 0;

export const showToast = (text) => async (dispatch) => {
  console.log("toast showing");
  const id = `toast${curToastNum}`;
  dispatch({ type: SHOW_TOAST, text: text, id: id });
  setTimeout(() => {
    console.log(window.$("#" + id).toast("show"));
  }, 2000);
  curToastNum++;
  return id;
};
