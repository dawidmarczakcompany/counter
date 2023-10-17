import { Text, View } from "react-native";
import styles from "./styles";

const CounterPage = () => {
  return (
    <View style={styles.pageWrapper}>
      <Text style={styles.pageHeader}>Counter</Text>
    </View>
  );
};

export default CounterPage;
