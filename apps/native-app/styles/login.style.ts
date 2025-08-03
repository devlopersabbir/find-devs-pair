import { COLORS } from "@/constants";
import { Dimensions, StyleSheet } from "react-native";

const { height, width } = Dimensions.get("window");
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  brandSection: {
    alignItems: "center",
    marginTop: height * 0.05,
  },
  logoContainer: {
    width: 60,
    height: 60,
    borderRadius: 18,
    backgroundColor: "rgba(74, 222, 128, 0.15)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  appName: {
    fontSize: 42,
    fontWeight: 700,
    fontFamily: "JetBrainsMono-Medium",
    color: COLORS.primary,
    letterSpacing: 0.5,
    marginBottom: 5,
  },
  tagLine: {
    fontSize: 16,
    color: COLORS.gray,
    letterSpacing: 1,
    textTransform: "capitalize",
  },

  // illustrationContainer
  illustrationContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  illustration: {
    width: width * 0.75,
    height: width * 0.75,
    maxHeight: 280,
  },
  // login section
  continueWrapper: {
    alignItems: "center",
    gap: 5,
    marginBottom: 5,
  },
  loginSection: {
    width: "100%",
    paddingHorizontal: 24,
    paddingBottom: 40,
    alignItems: "center",
    gap: 7,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 14,
    width: "100%",
    maxWidth: 300,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 5,
  },
  googleIconContainer: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  googleButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.surface,
  },
  termsText: {
    textAlign: "center",
    fontSize: 12,
    color: COLORS.gray,
    maxWidth: 280,
  },
});
