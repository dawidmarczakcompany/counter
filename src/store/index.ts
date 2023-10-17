import { configureStore } from "@reduxjs/toolkit";
import counterReducer, { CounterState } from "./counter/slice";

interface RootStore {
  counter: CounterState;
}

const store = configureStore<RootStore>({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
