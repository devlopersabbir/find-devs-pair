import {
  TouchableOpacity,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants";
import { convStyles } from "@/styles/conversation.style";
import { useState } from "react";

export default function MessageFooter() {
  const [message, setMessage] = useState("");

  return (
    <View style={convStyles.bottomContainer}>
      <TouchableOpacity style={convStyles.iconButton}>
        <Ionicons name="document-attach" size={25} color={COLORS.gray} />
      </TouchableOpacity>
      <TextInput
        allowFontScaling={false}
        keyboardType="default"
        multiline
        placeholder="Type a message..."
        value={message}
        onChangeText={setMessage}
        returnKeyType="send"
        onSubmitEditing={() => {
          if (message.trim()) {
            // Handle send message here
            setMessage("");
          }
        }}
        style={convStyles.messageInput}
      />
      <TouchableOpacity
        style={convStyles.iconButton}
        disabled={!message.trim()}
        onPress={() => {
          if (message.trim()) {
            // Handle send message here
            console.log("message: ", message);
            setMessage("");
          }
        }}
      >
        <Ionicons
          name="send"
          size={25}
          color={message.trim() ? COLORS.primary : COLORS.gray}
        />
      </TouchableOpacity>
    </View>
  );
}
