import React from "react";
import { View } from "react-native";
import { devStyles } from "@/styles/devs.style";
import DevHeader from "@/app/_components/dev-header";
import { devs } from "@/constants";
import Swiper from "react-native-deck-swiper";
import DevCard from "@/app/_components/dev-card";

const Devs = () => {
  return (
    <View style={devStyles.devContainer}>
      <DevHeader />
      <View style={devStyles.mainViewContainer}>
        <Swiper
          cardVerticalMargin={0}
          cardHorizontalMargin={0}
          backgroundColor="transparent"
          cards={devs}
          renderCard={(dev) => <DevCard dev={dev} />}
          onSwiped={(cardIndex) => {
            console.log(cardIndex);
          }}
          onSwipedAll={() => {
            console.log("onSwipedAll");
          }}
          cardIndex={0}
          infinite
          stackSize={3}
        />
      </View>
    </View>
  );
};

export default Devs;
