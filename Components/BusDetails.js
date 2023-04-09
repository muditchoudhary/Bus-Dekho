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

  function formatFreq(freq) {
    return freq.replace(/_/g, " ");
  }
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.mainContainer}>
        <Text style={{ fontSize: 26, fontWeight: "bold", marginVertical: 10 }}>
          Via Locations
        </Text>
        <View style={styles.locationsSubContainer}>
          {props.busLocations.map((location) => {
            return (
              <Text
                style={{
                  borderWidth: 1,
                  borderColor: "black",
                  backgroundColor: "pink",
                  fontSize: 16,
                  paddingHorizontal: 10,
                  padding: 2,
                }}
              >
                {formatText(location)}
              </Text>
            );
          })}
        </View>
      </View>
      <View style={styles.mainContainer}>
        <Text style={{ fontSize: 26, fontWeight: "bold", marginVertical: 10 }}>
          Frequency
        </Text>
        <View style={styles.locationsSubContainer}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            Every {formatFreq(props.busFreq)}
          </Text>
        </View>
      </View>
      <View style={styles.fairContainer}>
        <Text style={{ fontSize: 26, fontWeight: "bold", marginVertical: 10 }}>
          Fair
        </Text>
        <View style={styles.imageContainer}>
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
    margin: 10,
  },
  mainContainer: {},
  locationsSubContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    flexWrap: "wrap",
    borderWidth: 2,
    borderColor: "black",
    padding: 10,
  },
  fairContainer: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: "black",
    height: 550,
  },
});
export default BusDetails;
