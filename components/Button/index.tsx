import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

interface ButtonProps {
  onPress: () => void;
  label: string;
  disabled?: boolean;
}

const Button = ({ label, onPress, disabled }: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.buttonWrapper}
      disabled={disabled}
    >
      <Text style={[styles.buttonText, disabled && styles.buttonDisabled]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
