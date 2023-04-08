import * as React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import cardImg from "../assets/card-demo-img.png";

function BusDetails() {
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.locationsMainContainer}>
        <Text>Via Locations</Text>
        <View style={styles.locationsSubContainer}>
          <Text>Locations to show</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: "red",
  },
  locationsMainContainer: {
    borderWidth: 2,
    borderColor: "green",
  },
  locationsSubContainer: {
    borderWidth: 2,
    borderColor: "blue",
  },
});
export default BusDetails;
