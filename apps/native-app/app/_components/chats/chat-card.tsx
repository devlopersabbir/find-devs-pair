import { COLORS, Devs } from "@/constants";
import { chatStyles } from "@/styles/chats.style";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

type Props = {
  dev: Devs;
};
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
export default function ChatCard({ dev }: Props) {
  return (
    <TouchableOpacity
      style={chatStyles.chatCardWrapper}
      activeOpacity={0.5}
      onPress={() => {
        // @ts-ignore
        router.push(`/(pages)/conversation/${dev.id}`);
      }}
    >
      <View style={chatStyles.profileImageWrapper}>
        <Image
          source={dev.image}
          placeholder={{ blurhash }}
          style={chatStyles.userAvater}
          contentFit="cover"
          transition={1000}
          alt={dev.name}
        />
        <View style={chatStyles.greenBatti} />
      </View>
      <View style={chatStyles.chatCardInfo}>
        <Text style={{ color: COLORS.white, fontWeight: "600" }}>
          {dev.name}
        </Text>
        <Text style={{ color: COLORS.gray, fontWeight: "500" }}>
          Last message...
        </Text>
      </View>
    </TouchableOpacity>
  );
}
