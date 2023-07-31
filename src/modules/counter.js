import { createAction, handleActions } from "redux-actions";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

export const increase = createAction(INCREASE, diff => diff);
export const decrease = createAction(DECREASE);

const initialState = 0;

const counter = handleActions(
  {
    [INCREASE]: (state, { payload: diff }) => state + diff,
    [DECREASE]: state => state - 1
  },
  initialState
);

export default counter;
