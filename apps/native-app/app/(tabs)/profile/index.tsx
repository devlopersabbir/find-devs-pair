import ProfileHeader from "@/app/_components/profiles/profile-header";
import { devs } from "@/constants";
import { profileStyle } from "@/styles/profile.style";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React from "react";
import { Text, View } from "react-native";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function Profile() {
  return (
    <View style={profileStyle.container}>
      <ProfileHeader />
      <View style={profileStyle.wrapper}>
        <View style={profileStyle.profileView}>
          <View style={profileStyle.imageView}>
            <Image
              placeholder={{ blurhash }}
              source={devs[5].image}
              alt={devs[5].name}
              contentFit="cover"
              transition={1000}
              style={profileStyle.profileImage}
            />
          </View>
          <View style={profileStyle.generel}>
            <Ionicons name="flag" size={25} style={profileStyle.generelIcon} />
            <Text style={profileStyle.generelText}>{devs[5].name}, </Text>
            <Text style={profileStyle.generelText}>{devs[5].age}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
