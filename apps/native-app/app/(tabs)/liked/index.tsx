import { likeStyles } from "@/styles/liked.style";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, View, useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

const routes = [
  { key: "like", title: "Like" },
  { key: "viewed", title: "Viewed" },
];
const Liked = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  return (
    <View style={likeStyles.container}>
      <View style={likeStyles.topsection}>
        <Ionicons
          style={likeStyles.topsectionIcon}
          size={35}
          name="people"
          color={"black"}
        />
        <Text style={likeStyles.topsectionTitle}>Viewed You</Text>
        <Text style={likeStyles.topsectionTagline}>
          No need upgrade to see who viewed you!
        </Text>
      </View>
      <View style={likeStyles.mainContent}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={(props) => props.route.title}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
        />
      </View>
    </View>
  );
};

export default Liked;
