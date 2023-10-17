import { StyleSheet } from "react-native";

export default StyleSheet.create({
  pageWrapper: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#ebe8e1",
    justifyContent: "space-between",
  },
  pageHeader: {
    fontSize: 24,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginVertical: 32,
  },
  buttonsWrapper: {
    display: "flex",
    flexDirection: "row",
    margin: 24,
  },
  counter: {
    fontSize: 60,
    fontWeight: "bold",
  },
  buttonImg: {
    width: "40%",
    height: "40%",
    marginBottom: 8,
  },
});
