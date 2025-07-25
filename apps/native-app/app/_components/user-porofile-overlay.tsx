import { devStyles } from "@/styles/devs.style";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { DevProps } from "./dev-card";

export default function UserProfileOverlay({ dev }: DevProps) {
  const handleSubmit = async () => {};
  return (
    <TouchableOpacity
      style={devStyles.overlayTopContainer}
      onPress={handleSubmit}
    >
      <Image
        source={{
          uri: dev.image,
        }}
        style={devStyles.userAvater}
        alt={dev.name}
        width={50}
        height={50}
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
