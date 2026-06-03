import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import MapView, { Marker } from "react-native-maps"
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { router } from 'expo-router';

const SetLocation = () => {
    const [region, setRegion] = useState({
        latitude: 6.5244,
        longitude: 3.3792,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    });

        const submitForm = () => {
            console.log("Form submitted successfully")
            router.push("/(auth)/Interest")
        };

    return (
        <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#000" />
        <Text style={styles.headerText}>Set Your Location</Text>
      </View>

      {/* Map */}
      <MapView
        style={styles.map}
        initialRegion={region}
        customMapStyle={mapStyle}
      >
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
        >
          <View style={styles.markerContainer}>
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/women/44.jpg",
              }}
              style={styles.avatar}
            />
          </View>
        </Marker>
      </MapView>

      {/* Bottom Card */}
      <View style={styles.bottomCard}>
        <Text style={styles.locationTitle}>Location</Text>

        <View style={styles.inputContainer}>
          <TextInput
            value="Oniru, Lagos State"
            editable={false}
            style={styles.input}
          />
          <Ionicons name="location-sharp" size={20} color="#000" />
        </View>

        <TouchableOpacity style={styles.button} onPress={submitForm}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: "#fff",
    zIndex: 100,
  },

  headerText: {
    fontSize: 22,
    fontWeight: "600",
    marginLeft: 10,
  },

  map: {
    flex: 1,
  },

  markerContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#8A2BE2",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderColor: "#fff",
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },

  bottomCard: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 25,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 10,
  },

  locationTitle: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
  },

  inputContainer: {
    height: 55,
    backgroundColor: "#F5F5F5",
    borderRadius: 15,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },

  input: {
    flex: 1,
    color: "#555",
  },

  button: {
    backgroundColor: "#8A2BE2",
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#8A2BE2",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});

const mapStyle = [
  {
    elementType: "geometry",
    stylers: [{ color: "#E8D9FF" }],
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#7B61FF" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#FFFFFF" }],
  },
];

export default SetLocation;
