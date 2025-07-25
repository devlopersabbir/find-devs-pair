import { Devs } from "@/constants";
import { devStyles } from "@/styles/devs.style";
import { Image, View } from "react-native";
import BottomActions from "./bottom-action";
import LeftRightShadow from "./shared/left-right-shadow";
import TopBottomShadow from "./shared/top-bottom-shadow";
import UserProfileOverlay from "./user-porofile-overlay";

export type DevProps = {
  dev: Devs;
};
export default function DevCard({ dev }: DevProps) {
  return (
    <View style={devStyles.devCardView}>
      <Image
        source={{
          uri: dev.image,
        }}
        style={devStyles.cardImage}
      />

      {/* <View style={devStyles.contentWrapper}>
        <Text style={devStyles.sectionTitle}>About Me</Text>
        <Text style={devStyles.paragraph}>{dev.about}</Text>

        {dev.interests.map((inta, i) => (
          <Text key={i} style={{ paddingVertical: 10 }}>
            {inta}
          </Text>
        ))}
      </View> */}
      <TopBottomShadow />
      <LeftRightShadow />
      <UserProfileOverlay dev={dev} />
      <BottomActions />
    </View>
  );
}
