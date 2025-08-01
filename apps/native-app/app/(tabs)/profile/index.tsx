import ProfileHeader from "@/app/_components/profiles/profile-header";
import { devs } from "@/constants";
import { profileStyle } from "@/styles/profile.style";
import { useClerk, useUser } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function Profile() {
  const { user } = useUser();
  const { signOut } = useClerk();

  return (
    <View style={profileStyle.container}>
      <ProfileHeader />
      <View style={profileStyle.wrapper}>
        <View style={profileStyle.profileView}>
          <View style={profileStyle.imageView}>
            <Image
              placeholder={{ blurhash }}
              source={user?.imageUrl}
              alt={devs[5].name}
              contentFit="cover"
              transition={1000}
              style={profileStyle.profileImage}
            />
          </View>
          <View style={profileStyle.generel}>
            <Ionicons name="flag" size={25} style={profileStyle.generelIcon} />
            <Text style={profileStyle.generelText}>{user?.fullName}, </Text>
            <Text style={profileStyle.generelText}>00</Text>
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={async () => {
            await signOut({
              redirectUrl: "/(auth)",
            });
          }}
        >
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
