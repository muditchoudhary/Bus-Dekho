import * as React from "react";
import {View, Text, StyleSheet, Image } from "react-native";
import cardImg from "../assets/card-demo-img.png";
function BusCard(props) {
  return (
    <View style={styles.busContainer}>
      <View style={styles.busNumContainer}>
        <Text>{props.busNumber}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "cover",
          }}
          source={props.busImg}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  busContainer: {
    display: "flex",
    borderWidth: 1,
    borderColor: "orange",
    width: "100%",
    padding: 5,
    flexDirection: "row",
  },
  busNumContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: "pink",
    padding: 5,
    width: "100%",
    height: 100,
  },
  imageContainer: {
    flex: 2,
    borderWidth: 1,
    borderColor: "blue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    height: 100,
  },
});

export default BusCard;
