import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "@/constants";

const { height, width } = Dimensions.get("window");

export const chatStyles = StyleSheet.create({
  chatContainer: {
    flex: 1,
  },
  header: {
    alignItems: "center",
    paddingVertical: 10,
  },
  actionbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  leftAction: {
    flexDirection: "row",
    gap: 10,
  },
  actionChat: {
    color: COLORS.secondary,
    fontSize: 16,
  },
  actionActive: {
    fontWeight: "600",
    fontSize: 16,
  },

  devsView: {
    flex: 1,
    marginBottom: 45,
    marginTop: 5,
    paddingHorizontal: 15,
  },
  //   chat card
  chatCardWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: COLORS.white,
    borderBottomWidth: 2,
    gap: 15,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  profileImageWrapper: {
    position: "relative",
  },
  greenBatti: {
    width: 17,
    height: 17,
    borderRadius: 100,
    backgroundColor: COLORS.primary,
    position: "absolute",
    right: -1,
    bottom: -1,
  },
  userAvater: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  chatCardInfo: {
    gap: 3,
  },
});
