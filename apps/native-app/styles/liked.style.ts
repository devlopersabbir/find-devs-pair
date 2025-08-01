import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "@/constants";

const { height, width } = Dimensions.get("window");

export const likeStyles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: COLORS.background,
  },
  topsection: {
    backgroundColor: COLORS.background,
    flex: 3,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  topsectionIcon: {
    backgroundColor: COLORS.white,
    padding: 10,
    fontSize: 70,
    color: COLORS.primary,
    borderRadius: 100,
  },
  topsectionTitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 10,
    color: COLORS.white,
  },
  topsectionTagline: {
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 25,
    color: COLORS.gray,
  },
  mainContent: {
    flex: 7,
    marginBottom: 45,
    overflow: "hidden",
  },
});
