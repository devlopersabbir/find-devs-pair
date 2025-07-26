import ChatCard from "@/app/_components/chats/chat-card";
import DevsFilter from "@/app/_components/chats/devs-filter";
import ApplicationLogo from "@/components/shared/application-logo";
import { devs } from "@/constants";
import { chatStyles } from "@/styles/chats.style";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

const Chat = () => {
  const [open, setOpen] = useState(false);
  return (
    <View style={chatStyles.chatContainer}>
      <View style={chatStyles.header}>
        <ApplicationLogo />
      </View>
      <View style={chatStyles.actionbar}>
        <View style={chatStyles.leftAction}>
          <Text style={chatStyles.actionChat}>Chats</Text>
          <Text style={chatStyles.actionActive}>(Active)</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            setOpen((prev) => !prev);
          }}
        >
          <Ionicons name="filter" size={30} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={devs}
        renderItem={(dev) => <ChatCard dev={dev.item} />}
        keyExtractor={(item) => item.id}
        style={chatStyles.devsView}
      />
      {/* {open && <DevsFilter open={open} setOpen={setOpen} />} */}
    </View>
  );
};

export default Chat;
