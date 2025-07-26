import { COLORS } from "@/constants";
import { devStyles } from "@/styles/devs.style";
import { Ionicons } from "@expo/vector-icons";
import { View, TouchableOpacity } from "react-native";

export default function BottomActions() {
  return (
    <View style={devStyles.overlayButtonContainer}>
      <View style={devStyles.overlayBottom}>
        <TouchableOpacity style={devStyles.actionButton}>
          <Ionicons size={35} name="infinite" color={COLORS.secondary} />
        </TouchableOpacity>
        <TouchableOpacity style={devStyles.actionButton}>
          <Ionicons size={35} name="heart" color={COLORS.red} />
        </TouchableOpacity>
        <TouchableOpacity style={devStyles.actionButton}>
          <Ionicons size={35} name="hand-right" color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
