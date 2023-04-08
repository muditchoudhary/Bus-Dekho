// In App.js in a new project
import * as React from "react";
import { Button, View, Text, StyleSheet, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import  {useState} from 'react';

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
    const [currentLocation, setcurrentLocation] = useState("");
    const [destinationLocation, setdestinationLocation] = useState("");

  return (
    <View style={styles.mainContainer}>
      <View styeles={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
            setcurrentLocation(text)
        }}
        value={currentLocation} />
        <TextInput
        style={styles.input}
        onChangeText={(text) => {
            setdestinationLocation(text)
        }}
        value={destinationLocation} />
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "BusDekho" }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: "red",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "green",
  },
  input: {
    width: "100%",
    borderWidth: 2,
    borderColor: "blue"
  }
});
export default App;
