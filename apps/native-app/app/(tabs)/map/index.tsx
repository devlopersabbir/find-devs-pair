import React from "react";
import { AppleMaps } from "expo-maps";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import { mapStyles } from "@/styles/map.style";
import MenuHeader from "@/app/_components/menu-header";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants";

const Maps = () => {
  return (
    <View style={mapStyles.mapContainer}>
      <MenuHeader />
      <View style={mapStyles.mapView}>
        {/* mapp will be here */}
        <View style={mapStyles.overlayContainer}>
          <TouchableOpacity
            style={mapStyles.showMeonMapButton}
            activeOpacity={0.9}
            onPress={() => {
              alert("show me on map");
            }}
          >
            <View style={mapStyles.mapIconContainer}>
              <Ionicons name="map" size={20} color={COLORS.surface} />
            </View>
            <Text style={mapStyles.mapButtonText}>Show me on map</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Maps;
