import { viewTabStyle } from "@/styles/viewed-tab.style";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Text, View } from "react-native";
import { DevProps } from "../dev-card";

type Props = DevProps & {
  isLike?: boolean;
};
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
const ViewCard = ({ dev, isLike }: Props) => {
  return (
    <View style={viewTabStyle.card}>
      <View style={viewTabStyle.profileInfo}>
        <View style={viewTabStyle.cardProfile}>
          <Image
            placeholder={{ blurhash }}
            source={dev.image}
            alt={dev.name}
            contentFit="cover"
            transition={1000}
            style={viewTabStyle.profileImage}
          />
          <Image
            placeholder={{ blurhash }}
            source={dev.image}
            alt={dev.name}
            contentFit="cover"
            transition={1000}
            style={viewTabStyle.profileFlug}
          />
        </View>
        <View style={viewTabStyle.cardAbout}>
          <View style={viewTabStyle.dev}>
            <Text style={viewTabStyle.cardName}>{dev.name}, </Text>
            <Text style={viewTabStyle.cardName}>{dev.age}</Text>
          </View>
          <Text style={viewTabStyle.lastSeen}>2 days ago</Text>
        </View>
      </View>
      {!isLike && (
        <Ionicons name="heart" size={30} style={viewTabStyle.loveIcon} />
      )}
    </View>
  );
};
export default ViewCard;
