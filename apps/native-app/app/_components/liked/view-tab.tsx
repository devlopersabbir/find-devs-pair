import { devs } from "@/constants";
import { viewTabStyle } from "@/styles/viewed-tab.style";
import { View, FlatList } from "react-native";
import ViewCard from "./view-card";

const ViewTab = () => {
  return (
    <View style={viewTabStyle.container}>
      <FlatList
        data={devs}
        keyExtractor={(dev) => dev.id}
        renderItem={({ item }) => <ViewCard dev={item} />}
      />
    </View>
  );
};
export default ViewTab;
