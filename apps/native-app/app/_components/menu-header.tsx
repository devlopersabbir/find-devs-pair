import ApplicationLogo from "@/components/shared/application-logo";
import { COLORS } from "@/constants";
import { devStyles } from "@/styles/devs.style";
import { Ionicons } from "@expo/vector-icons";
import { View, TouchableOpacity } from "react-native";

export default function MenuHeader() {
  const openSettings = () => {};
  return (
    <View style={devStyles.headerContainer}>
      <Ionicons name="refresh" color={COLORS.white} size={25} />
      <ApplicationLogo />
      <TouchableOpacity activeOpacity={0.9} onPress={openSettings}>
        <Ionicons name="settings" size={25} color={COLORS.white} />
      </TouchableOpacity>
    </View>
  );
}
