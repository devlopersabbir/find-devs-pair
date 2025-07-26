import { globalStyles } from "@/styles/global.style";
import { LinearGradient } from "expo-linear-gradient";

export default function TopBottomShadow() {
  return (
    <>
      <LinearGradient
        colors={["rgba(0,0,0,0.2)", "transparent"]}
        style={[globalStyles.shadow, globalStyles.top]}
      />

      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.5)"]}
        style={[globalStyles.shadow, globalStyles.bottom]}
      />
    </>
  );
}
