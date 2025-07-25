import { devStyles } from "@/styles/devs.style";
import { Ionicons } from "@expo/vector-icons";
import { View, TouchableOpacity } from "react-native";

export default function BottomActions() {
  return (
    <View style={devStyles.overlayButtonContainer}>
      <View style={devStyles.overlayBottom}>
        <TouchableOpacity style={devStyles.actionButton}>
          <Ionicons size={30} name="infinite" color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={devStyles.actionButton}>
          <Ionicons size={30} name="heart" color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={devStyles.actionButton}>
          <Ionicons size={30} name="hand-right" color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
