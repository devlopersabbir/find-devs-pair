import { Ionicons } from "@expo/vector-icons";
import { Icon } from "@expo/vector-icons/build/createIconSet";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native";

type Props = {
  icon?: typeof Ionicons;
};
export default function BackButton({ icon }: Props) {
  return (
    <TouchableOpacity
      onPress={() => router.canGoBack()}
      style={{ marginRight: 20 }}
    >
      {icon && <Ionicons size={25} name="arrow-back" />}
    </TouchableOpacity>
  );
}
