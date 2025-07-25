import { devStyles } from "@/styles/devs.style";
import { Text, TouchableOpacity, View } from "react-native";
import { blurhash, DevProps } from "./dev-card";
import { Image } from "expo-image";

export default function UserProfileOverlay({ dev }: DevProps) {
  const handleSubmit = async () => {};
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
