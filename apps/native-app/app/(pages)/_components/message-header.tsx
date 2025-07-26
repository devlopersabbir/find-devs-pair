import { COLORS, Devs } from "@/constants";
import { convStyles } from "@/styles/conversation.style";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import { View, TouchableOpacity, Text } from "react-native";

type Props = {
  dev: Devs;
};

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function MessageHeader({ dev }: Props) {
  return (
    <View style={convStyles.convHeader}>
      <View style={convStyles.leftSideWrapper}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={convStyles.iconButton}
        >
          <Ionicons size={25} name="arrow-back" color={COLORS.background} />
        </TouchableOpacity>
        <View style={convStyles.profileImageWrapper}>
          <Image
            source={dev.image}
            placeholder={{ blurhash }}
            style={convStyles.userAvater}
            contentFit="cover"
            transition={1000}
            alt={dev.name}
          />
          <View style={convStyles.greenBatti} />
        </View>
        <View style={convStyles.chatCardInfo}>
          <Text style={convStyles.headerName}>{dev.name}</Text>
          <Text style={convStyles.headerStatus}>15 hours ago</Text>
        </View>
      </View>
      <View style={convStyles.rightSideWrapper}>
        <TouchableOpacity style={convStyles.iconButton}>
          <Ionicons name="call" size={25} color={COLORS.primary} />
        </TouchableOpacity>
        <TouchableOpacity style={convStyles.iconButton}>
          <Ionicons name="settings" size={25} color={COLORS.surfaceLight} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
