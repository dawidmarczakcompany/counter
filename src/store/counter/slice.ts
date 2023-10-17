import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
  holdIntervalId: number | null;
}

const initialState: CounterState = { value: 0, holdIntervalId: null };

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increaseCounter: (state) => {
      state.value += 1;
    },
    decreaseCounter: (state) => {
      state.value -= 1;
    },
    setHoldIntervalId: (state, action: PayloadAction<number>) => {
      state.holdIntervalId = action.payload;
    },
    resetHoldIntervalId: (state) => {
      state.holdIntervalId = null;
    },
  },
});

export const {
  increaseCounter,
  decreaseCounter,
  setHoldIntervalId,
  resetHoldIntervalId,
} = counterSlice.actions;

export default counterSlice.reducer;
