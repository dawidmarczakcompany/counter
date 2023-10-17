import { useCallback, useEffect } from "react";
import { CounterButtonType } from "../types";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCounter,
  increaseCounter,
  resetHoldIntervalId,
  setHoldIntervalId,
} from "../store/counter/slice";
import {
  HOLD_INCREASE_INTERVAL,
  MAX_COUNTER_VALUE,
  MIN_COUNTER_VALUE,
} from "../constants";
import {
  selectCounterValue,
  selectHoldIntervalId,
} from "../store/counter/selectors";

const useCounterLongPress = () => {
  const dispatch = useDispatch();
  const holdIntervalId = useSelector(selectHoldIntervalId); //Normally I would use state here but wanted to stick to instruction to not use setState
  const counterValue = useSelector(selectCounterValue);

  const handleLongPress = useCallback(
    (variant: CounterButtonType) => {
      const interval = setInterval(() => {
        dispatch(
          variant === "increase" ? increaseCounter() : decreaseCounter()
        );
      }, HOLD_INCREASE_INTERVAL);

      dispatch(setHoldIntervalId(interval));
    },
    [dispatch]
  );

  const handlePressOut = useCallback(() => {
    if (holdIntervalId) {
      clearInterval(holdIntervalId);
      resetHoldIntervalId();
    }
  }, [holdIntervalId]);

  useEffect(() => {
    if (
      counterValue >= MAX_COUNTER_VALUE ||
      counterValue <= MIN_COUNTER_VALUE
    ) {
      handlePressOut();
    }
  }, [counterValue, handlePressOut]);

  return { handleLongPress, handlePressOut };
};

export default useCounterLongPress;
