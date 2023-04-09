import * as React from "react";
import {View, Text, StyleSheet, Image } from "react-native";
import cardImg from "../assets/card-demo-img.png";
function BusCard(props) {
  return (
    <View style={styles.busContainer}>
      <View style={styles.busNumContainer}>
        <Text style={{fontSize: 30, fontWeight: "bold"}}>{props.busNumber}</Text>
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
    borderWidth: 2,
    borderColor: "pink",
    borderRadius: 16,
    width: "100%",
    padding: 5,
    flexDirection: "row",
  },
  busNumContainer: {
    flex: 1,
    padding: 5,
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    gap: 10
  },
  imageContainer: {
    flex: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "black",
    overflow: "hidden"
  },
});

export default BusCard;
