import { StyleSheet } from "react-native";

export default StyleSheet.create({
  buttonWrapper: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  buttonText: {
    textTransform: "uppercase",
  },
  buttonDisabled: {
    opacity: 0.5,
  },
});
