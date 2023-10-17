import { CounterActionType } from "./types";

export const increaseCounter = () => ({
  type: CounterActionType.INCREASE_COUNTER,
});

export const decreaseCounter = () => ({
  type: CounterActionType.DECREASE_COUNTER,
});
