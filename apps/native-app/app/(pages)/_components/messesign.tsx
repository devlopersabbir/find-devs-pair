import { Devs } from "@/constants";
import { convStyles } from "@/styles/conversation.style";
import { Image } from "expo-image";
import { Text, View } from "react-native";

type Props = {
  dev: Devs;
  isSender: boolean;
};

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function Messageging({ isSender, dev }: Props) {
  return (
    <View
      style={[
        convStyles.messageParent,
        { alignItems: isSender ? "flex-start" : "flex-end" },
      ]}
    >
      <View
        style={[
          convStyles.messagingProfileWrapper,
          isSender ? convStyles.senderMessage : convStyles.receiverMessage,
        ]}
      >
        {isSender && (
          <Image
            source={dev.image}
            placeholder={{ blurhash }}
            style={convStyles.avater}
            contentFit="cover"
            transition={1000}
            alt={dev.name}
          />
        )}
        <View style={convStyles.messageWrapper}>
          <Text
            style={[
              convStyles.message,
              isSender ? convStyles.senderBubble : convStyles.receiverBubble,
            ]}
          >
            message will be here... Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Esse, tempora?
          </Text>
        </View>
      </View>
    </View>
  );
}
