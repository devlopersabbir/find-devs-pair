import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  applicationLogo: {},
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  shadow: {
    position: "absolute",
    zIndex: 1,
  },
  top: {
    top: 0,
    left: 0,
    right: 0,
    height: 50,
  },
  bottom: {
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
  },
  left: {
    top: 0,
    bottom: 0,
    left: 0,
    width: 10,
  },
  right: {
    top: 0,
    bottom: 0,
    right: 0,
    width: 10,
  },
});
