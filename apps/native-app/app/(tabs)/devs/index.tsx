import React from "react";
import { View } from "react-native";
import { devStyles } from "@/styles/devs.style";
import MenuHeader from "@/app/_components/menu-header";
import { devs } from "@/constants";
import Swiper from "react-native-deck-swiper";
import DevCard from "@/app/_components/dev-card";

const Devs = () => {
  return (
    <View style={devStyles.devContainer}>
      <MenuHeader />
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
          stackSize={devs.length}
        />
      </View>
    </View>
  );
};

export default Devs;
