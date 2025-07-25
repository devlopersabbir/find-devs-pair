import { COLORS } from "@/constants";
import { globalStyles } from "@/styles/global.style";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

export default function ApplicationLogo() {
  return (
    <View style={globalStyles.applicationLogo}>
      <Ionicons name="leaf" size={30} color={COLORS.primary} />
    </View>
  );
}
