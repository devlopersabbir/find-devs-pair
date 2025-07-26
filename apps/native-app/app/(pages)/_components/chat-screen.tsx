import { styles } from "@/styles/login.style";
import { useStateForPath } from "@react-navigation/native";
import { useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform } from "react-native";

const mockMessages = [
  { id: 1, text: "Hey, how's it going?", sender: "other" },
  { id: 2, text: "Pretty good, you?", sender: "user" },
  { id: 3, text: "Just chilling!", sender: "other" },
];

export default function ChatScreen() {
  const [inputText, setInputText] = useState("");

  const handleSend = () => {
    console.log("input test: ", inputText);
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    ></KeyboardAvoidingView>
  );
}
