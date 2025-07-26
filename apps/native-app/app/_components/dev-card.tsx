import { Devs } from "@/constants";
import { devStyles } from "@/styles/devs.style";
import { View } from "react-native";
import BottomActions from "./bottom-action";
import LeftRightShadow from "./shared/left-right-shadow";
import TopBottomShadow from "./shared/top-bottom-shadow";
import UserProfileOverlay from "./user-porofile-overlay";
import { Image } from "expo-image";

export type DevProps = {
  dev: Devs;
};
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
export default function DevCard({ dev }: DevProps) {
  return (
    <View style={devStyles.devCardView}>
      <Image
        source={dev.image}
        placeholder={{ blurhash }}
        style={devStyles.cardImage}
        contentFit="cover"
        transition={1000}
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
