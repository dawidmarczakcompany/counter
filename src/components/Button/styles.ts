import { StyleSheet } from "react-native";

export default StyleSheet.create({
  buttonWrapper: {
    borderRadius: 8,
    marginHorizontal: 8,
    minWidth: 100,
    height: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  buttonText: {
    fontSize: 14,
    textTransform: "uppercase",
  },
  buttonDisabled: {
    opacity: 0.5,
  },
});
