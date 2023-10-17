import { CounterActionType } from "./types";

export const increaseCounter = () => ({
  type: CounterActionType.INCREASE_COUNTER,
});
