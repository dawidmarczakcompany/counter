import { Text, View } from "react-native";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { selectCounterValue } from "../../store/counter/selectors";
import Button from "../../components/Button";
import { decreaseCounter, increaseCounter } from "../../store/counter/actions";
import { MAX_COUNTER_VALUE, MIN_COUNTER_VALUE } from "../../constants";

const CounterPage = () => {
  const counterValue = useSelector(selectCounterValue);
  const dispatch = useDispatch();

  const onCounterIncrease = () => dispatch(increaseCounter());

  const onCounterDecrease = () => dispatch(decreaseCounter());

  return (
    <View style={styles.pageWrapper}>
      <Text style={styles.pageHeader}>Counter</Text>

      <Text>{counterValue}</Text>

      <View style={styles.buttonsWrapper}>
        <Button
          onPress={onCounterDecrease}
          label="Minus"
          disabled={counterValue === MIN_COUNTER_VALUE}
        />

        <Button
          onPress={onCounterIncrease}
          label="Plus"
          disabled={counterValue === MAX_COUNTER_VALUE}
        />
      </View>
    </View>
  );
};

export default CounterPage;
