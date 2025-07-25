import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "@/constants";

const { height, width } = Dimensions.get("window");

export const devStyles = StyleSheet.create({
  devContainer: {
    flex: 1,
    width: width * 0.95,
    margin: "auto",
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 5,
  },

  mainViewContainer: {
    borderWidth: 1,
    backgroundColor: COLORS.white,
    borderColor: COLORS.white,
    position: "relative",
    overflow: "hidden",
    height: height * 0.78,
    borderRadius: 20,
  },

  devCardView: {
    borderWidth: 1,
    backgroundColor: COLORS.white,
    borderColor: COLORS.white,
    position: "relative",
    overflow: "hidden",
    height: height * 0.78,
    borderRadius: 20,
  },
  cardImage: {
    objectFit: "cover",
    borderRadius: 20,
    height: height * 0.78,
  },

  overlayContainer: {
    position: "relative",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },

  overlayTopContainer: {
    position: "absolute",
    top: 15,
    left: 15,
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    alignItems: "center",
  },
  userAvater: {
    width: 50,
    height: 50,
    borderRadius: 100,
    borderColor: COLORS.secondary,
    borderWidth: 2,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 600,
    color: COLORS.white,
  },
  profileTitle: {
    fontSize: 14,
    fontWeight: 500,
    color: COLORS.gray,
  },
  // Overlay button container
  overlayButtonContainer: {
    alignItems: "center",
  },
  overlayBottom: {
    position: "absolute",
    flexDirection: "row",
    gap: 20,
    bottom: 35,
    zIndex: 3,
  },
  actionButton: {
    backgroundColor: COLORS.white,
    shadowColor: COLORS.background,
    borderRadius: 100,
    padding: 5,
  },
});
