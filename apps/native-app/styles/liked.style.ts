import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "@/constants";

const { height, width } = Dimensions.get("window");

export const likeStyles = StyleSheet.create({
  container: {
    flex: 10,
  },
  topsection: {
    backgroundColor: COLORS.secondary,
    flex: 3,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  topsectionIcon: {
    backgroundColor: "white",
    padding: 10,
    color: "black",
    borderRadius: 100,
  },
  topsectionTitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 10,
  },
  topsectionTagline: {
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 25,
    color: COLORS.surfaceLight,
  },
  mainContent: {
    flex: 7,
    marginBottom: 45,
    overflow: "hidden",
  },
});
