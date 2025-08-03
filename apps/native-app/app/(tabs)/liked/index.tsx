import LikeTab from "@/app/_components/liked/like-tab";
import ViewTab from "@/app/_components/liked/view-tab";
import { likeStyles } from "@/styles/liked.style";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, View, useWindowDimensions } from "react-native";
import { TabView } from "react-native-tab-view";

const routes = [
  { key: "like", title: "Like" } as const,
  { key: "viewed", title: "Viewed" } as const,
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
          renderScene={(props) =>
            props.route.key === "like" ? <LikeTab /> : <ViewTab />
          }
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          // renderTabBar={(props) => <TabBar {...props} /> } // TODO: need to update tabbar bg and color too
        />
      </View>
    </View>
  );
};

export default Liked;
