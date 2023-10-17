import { combineReducers } from "redux";
import counterReducer, { CounterState } from "./counter/slice";

export type RootState = {
  counter: CounterState;
};

const createRootReducer = () =>
  combineReducers<RootState>({
    counter: counterReducer,
  });

export default createRootReducer;
