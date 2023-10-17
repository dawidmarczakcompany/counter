import { AnyAction } from "redux";

export interface CounterState {
  value: number;
}

const initialState: CounterState = { value: 0 };

const counterReducer = (
  state: CounterState = initialState,
  action: AnyAction //CHANGE
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default counterReducer;
