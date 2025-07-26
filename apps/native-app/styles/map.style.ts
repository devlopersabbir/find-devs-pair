import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "@/constants";

const { height, width } = Dimensions.get("window");

export const mapStyles = StyleSheet.create({
  mapContainer: {
    flex: 1,
  },
  mapView: {
    height: height * 0.79,
    backgroundColor: COLORS.gray,
    position: "relative",
  },
  overlayContainer: {
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  showMeonMapButton: {
    position: "absolute",
    bottom: 30,
    flexDirection: "row",
    gap: 10,
    zIndex: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
    paddingVertical: 16,
    paddingHorizontal: 10,
    borderRadius: 14,
    marginBottom: 20,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 5,
  },
  mapIconContainer: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  mapButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.surface,
  },
});
