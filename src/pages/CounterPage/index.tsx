import { Image, Text, View } from "react-native";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { selectCounterValue } from "../../store/counter/selectors";
import Button from "../../components/Button";
import { MAX_COUNTER_VALUE, MIN_COUNTER_VALUE } from "../../constants";
import { increaseCounter, decreaseCounter } from "../../store/counter/slice";
import { useCallback } from "react";
import { CounterButtonType } from "../../types";
import useCounterLongPress from "../../hooks/useCounterLongPress";
import plusImg from "../../assets/plus.png";
import minusImg from "../../assets/minus.png";

const CounterPage = () => {
  const counterValue = useSelector(selectCounterValue);
  const dispatch = useDispatch();
  const { handleLongPress, handlePressOut } = useCounterLongPress();

  const onButtonPress = useCallback(
    (variant: CounterButtonType) => {
      dispatch(variant === "increase" ? increaseCounter() : decreaseCounter());
    },
    [dispatch]
  );

  return (
    <View style={styles.pageWrapper}>
      <Text style={styles.pageHeader}>Counter Application</Text>

      <Text style={styles.counter}>{counterValue}</Text>

      <View style={styles.buttonsWrapper}>
        <Button
          onPress={() => onButtonPress("decrease")}
          onLongPress={() => handleLongPress("decrease")}
          label="Subtract"
          disabled={counterValue === MIN_COUNTER_VALUE}
          onPressOut={handlePressOut}
          icon={<Image style={styles.buttonImg} source={minusImg} />}
        />

        <Button
          onPress={() => onButtonPress("increase")}
          onLongPress={() => handleLongPress("increase")}
          label="Add"
          disabled={counterValue === MAX_COUNTER_VALUE}
          onPressOut={handlePressOut}
          icon={<Image style={styles.buttonImg} source={plusImg} />}
        />
      </View>
    </View>
  );
};

export default CounterPage;
