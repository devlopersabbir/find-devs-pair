import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "@/constants";

const { height, width } = Dimensions.get("window");

export const convStyles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: COLORS.background,
  },
  convHeader: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  leftSideWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  profileImageWrapper: {
    position: "relative",
  },
  greenBatti: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: COLORS.primary,
    position: "absolute",
    right: 0,
    bottom: 0,
    borderWidth: 2,
    borderColor: COLORS.white,
  },
  userAvater: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  chatCardInfo: {
    gap: 4,
  },
  headerName: {
    color: COLORS.background,
    fontWeight: "600",
    fontSize: 16,
  },
  headerStatus: {
    color: COLORS.surfaceLight,
    fontWeight: "400",
    fontSize: 12,
  },
  rightSideWrapper: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },
  iconButton: {
    padding: 5,
  },
  messagingBox: {
    flex: 1,
    paddingHorizontal: 15,
  },
  messageContentContainer: {
    paddingVertical: 15,
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  messageParent: {
    marginBottom: 5,
  },
  messagingProfileWrapper: {
    flexDirection: "row",
    alignItems: "flex-end",
    maxWidth: width * 0.75,
  },
  senderMessage: {
    flexDirection: "row",
  },
  receiverMessage: {
    flexDirection: "row-reverse",
  },
  messageWrapper: {
    flex: 1,
  },
  message: {
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    lineHeight: 20,
    color: COLORS.white,
  },
  senderBubble: {
    backgroundColor: COLORS.surfaceLight,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    marginLeft: 10,
  },
  receiverBubble: {
    backgroundColor: COLORS.gray,
    borderRadius: 15,
    borderBottomRightRadius: 0,
    marginRight: 10,
    color: COLORS.white,
  },
  avater: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  messageInput: {
    flex: 1,
    borderColor: COLORS.gray,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginHorizontal: 8,
    maxHeight: 100,
    color: COLORS.background,
  },
});
