import { COLORS } from "@/constants";
import { Dimensions, StyleSheet } from "react-native";

const { height, width } = Dimensions.get("window");
export const viewTabStyle = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: COLORS.surface,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  profileInfo: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  cardProfile: {
    position: "relative",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  profileFlug: {
    width: 25,
    height: 25,
    borderRadius: 100,
    position: "absolute",
    bottom: 1,
    left: 5,
  },
  cardAbout: {
    flexDirection: "column",
    gap: 5,
  },
  dev: {
    flexDirection: "row",
  },
  cardName: {
    fontSize: 17,
    fontWeight: "semibold",
    color: COLORS.white,
  },
  lastSeen: {
    color: COLORS.gray,
  },
  loveIcon: {
    justifyContent: "flex-end",
    color: COLORS.secondary,
  },
});
