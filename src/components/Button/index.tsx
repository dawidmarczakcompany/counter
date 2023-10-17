import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { ReactNode } from "react";

interface ButtonProps {
  onPress: () => void;
  label: string;
  icon?: ReactNode;
  disabled?: boolean;
  onLongPress?: () => void;
  onPressOut?: () => void;
}

const Button = ({
  label,
  onPress,
  disabled,
  onLongPress,
  onPressOut,
  icon,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonWrapper, disabled && styles.buttonDisabled]}
      disabled={disabled}
      onLongPress={onLongPress} //Called if the time after onPressIn lasts longer than 500 milliseconds.
      onPressOut={onPressOut}
    >
      {icon}
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
