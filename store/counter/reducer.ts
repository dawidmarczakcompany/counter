import { Action } from "redux";
import { CounterActionType } from "./types";

export interface CounterState {
  value: number;
}

const initialState: CounterState = { value: 0 };

const counterReducer = (
  state: CounterState = initialState,
  action: Action<CounterActionType>
): CounterState => {
  switch (action.type) {
    case CounterActionType.INCREASE_COUNTER:
      return {
        ...state,
        value: state.value + 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
