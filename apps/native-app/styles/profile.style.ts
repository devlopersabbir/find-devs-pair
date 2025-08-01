import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "@/constants";

const { height, width } = Dimensions.get("window");

export const profileStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    marginTop: 10,
    alignItems: "center",
  },
  profileView: {
    flexDirection: "column",
    gap: 5,
  },
  imageView: {
    width: 200,
    height: 200,
    borderColor: COLORS.primary,
    borderWidth: 4,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: 185,
    height: 185,
    borderRadius: 100,
  },
  generel: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    marginTop: 5,
  },
  generelIcon: {
    color: COLORS.surfaceLight,
  },
  generelText: { fontSize: 20, fontWeight: "bold" },
});
