import { devStyles } from "@/styles/devs.style";
import { Text, TouchableOpacity, View } from "react-native";
import { DevProps } from "./dev-card";
import { Image } from "expo-image";
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
export default function UserProfileOverlay({ dev }: DevProps) {
  const handleSubmit = async () => {
    alert("hello profile");
  };
  return (
    <TouchableOpacity
      style={devStyles.overlayTopContainer}
      onPress={handleSubmit}
    >
      <Image
        source={dev.image}
        placeholder={{ blurhash }}
        style={devStyles.userAvater}
        contentFit="cover"
        transition={1000}
        alt={dev.name}
      />
      <View>
        <Text style={devStyles.profileName}>
          {dev.name}, {dev.age}
        </Text>
        <Text style={devStyles.profileTitle}>{dev.title}</Text>
      </View>
    </TouchableOpacity>
  );
}
