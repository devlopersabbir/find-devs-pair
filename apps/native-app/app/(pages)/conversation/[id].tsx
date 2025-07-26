import { Devs, devs } from "@/constants";
import { convStyles } from "@/styles/conversation.style";
import { useLocalSearchParams } from "expo-router";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import MessageHeader from "../_components/message-header";
import MessageFooter from "../_components/message-footer";
import Messageging from "../_components/messesign";
import { useRef } from "react";

export default function Conversation() {
  const { id } = useLocalSearchParams();
  const dev = devs.find((value) => value.id === id);
  const scrollViewRef = useRef<ScrollView>(null);

  if (!dev) return <Text>Developer not found with that id</Text>;

  return (
    <KeyboardAvoidingView
      style={convStyles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
    >
      <View style={convStyles.container}>
        <MessageHeader dev={dev} />
        <ScrollView
          ref={scrollViewRef}
          style={convStyles.messagingBox}
          contentContainerStyle={convStyles.messageContentContainer}
          showsVerticalScrollIndicator={false}
          onContentSizeChange={() =>
            scrollViewRef.current?.scrollToEnd({ animated: true })
          }
        >
          <Messageging dev={dev} isSender={true} />
          <Messageging dev={dev} isSender={true} />
          <Messageging dev={dev} isSender={true} />
          <Messageging dev={dev} isSender={true} />
          <Messageging dev={dev} isSender={false} />
          <Messageging dev={dev} isSender={false} />
          <Messageging dev={dev} isSender={false} />
          <Messageging dev={dev} isSender={true} />
        </ScrollView>
        <MessageFooter />
      </View>
    </KeyboardAvoidingView>
  );
}
