import { RootState } from "../reducer";

export const selectCounterValue = (state: RootState) => state.counter.value;
