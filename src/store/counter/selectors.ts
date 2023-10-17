import { RootState } from "../reducer";

export const selectCounterValue = (state: RootState) => state.counter.value;

export const selectHoldIntervalId = (state: RootState) =>
  state.counter.holdIntervalId;
