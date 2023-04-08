import * as React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import fairImg from "../assets/bus-images/fair-sheet.jpg";

function BusDetails(props) {
  function formatText(text) {
    let myText = text;

    myText = myText.replace(/_/g, " ");

    const firstLetter = myText.charAt(0);

    const firstLetterCap = firstLetter.toUpperCase();

    const remainingLetters = myText.slice(1);

    myText = firstLetterCap + remainingLetters;

    return myText;
  }
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.mainContainer}>
        <Text style={{ fontSize: 26, fontWeight: "bold" }}>Via Locations</Text>
        <View style={styles.locationsSubContainer}>
          {props.busLocations.map((location) => {
            return (
              <Text
                style={{ borderWidth: 1, borderColor: "pink", fontSize: 16 }}
              >
                {formatText(location)}
              </Text>
            );
          })}
        </View>
      </View>
      <View style={styles.mainContainer}>
        <Text style={{ fontSize: 26, fontWeight: "bold" }}>Frequency</Text>
        <View style={styles.locationsSubContainer}>
          <Text>{props.busFreq}</Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Text style={{ fontSize: 26, fontWeight: "bold" }}>Fair</Text>
        <View style={styles.fairContainer}>
          <Image
            source={fairImg}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "cover",
            }}
          />
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
  mainContainer: {
    borderWidth: 2,
    borderColor: "green",
  },
  locationsSubContainer: {
    borderWidth: 2,
    borderColor: "blue",
    display: "flex",
    flexDirection: "row",
    gap: 5,
    flexWrap: "wrap",
  },
  imageContainer: {
    flex: 1,
  },
  fairContainer: {
    flex: 1,
  },
});
export default BusDetails;
