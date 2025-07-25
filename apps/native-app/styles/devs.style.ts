import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "@/constants";

const { height, width } = Dimensions.get("window");

export const devStyles = StyleSheet.create({
  devContainer: {
    padding: width * 0.03,
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingHorizontal: 0.05,
  },

  mainViewContainer: {
    flex: 1,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 40,
  },
  devCardView: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: COLORS.white,
    borderColor: COLORS.white,
    borderRadius: 20,
    position: "relative",
  },

  cardImage: {
    objectFit: "cover",
    width: "100%",
    flex: 1,
    borderRadius: 20,
  },

  overlayContainer: {
    position: "relative",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },

  overlayTopContainer: {
    position: "absolute",
    top: 20,
    left: 20,
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

  overlayButtonContainer: {
    position: "relative",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  overlayBottom: {
    flexDirection: "row",
    gap: 20,
    bottom: 30,
    position: "absolute",
    zIndex: 2,
  },
  actionButton: {
    backgroundColor: COLORS.primary,
    shadowColor: COLORS.background,
    borderRadius: 100,
    padding: 5,
  },

  // contentWrapper: {
  //   paddingHorizontal: width * 0.03,
  //   paddingTop: 15,
  // },
  // sectionTitle: {
  //   fontSize: 20,
  //   fontWeight: "bold",
  //   marginBottom: 10,
  // },
  // paragraph: {
  //   fontSize: 16,
  //   color: "#333",
  // },
});
