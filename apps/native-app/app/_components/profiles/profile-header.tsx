import ApplicationLogo from "@/components/shared/application-logo";
import { COLORS } from "@/constants";
import { devStyles } from "@/styles/devs.style";
import { Ionicons } from "@expo/vector-icons";
import { View, TouchableOpacity } from "react-native";

const ProfileHeader = () => {
  const editProfile = () => {};
  return (
    <View style={devStyles.headerContainer}>
      <Ionicons name="settings" color={COLORS.white} size={25} />
      <ApplicationLogo />
      <TouchableOpacity activeOpacity={0.9} onPress={editProfile}>
        <Ionicons name="pencil" size={25} color={COLORS.white} />
      </TouchableOpacity>
    </View>
  );
};
export default ProfileHeader;
