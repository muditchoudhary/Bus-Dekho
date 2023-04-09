// In App.js in a new project
import * as React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import BusCard from "./Components/BusCards";
import BusDetails from "./Components/BusDetails";
import initialData from "./Data/data.js";

function DetailsScreen({ navigation, route }) {
  const { busLocations, busFreq } = route.params;
  return <BusDetails busLocations={busLocations} busFreq={busFreq} />;
}

function HomeScreen({ navigation }) {
  const [currentLocation, setcurrentLocation] = useState("");
  const [destinationLocation, setdestinationLocation] = useState("");
  const [doesActivityLoading, setDoesActivityLoading] = useState("false");
  const [busData, setBusData] = useState(initialData);
  const [fetchedBused, setFetchedBused] = useState([]);
  const [doesFetched, setDoesFetched] = useState(false);

  const doesBothLocationPresent = (cl, dl, locations) => {
    let isCurrentLocationPresent = locations.includes(cl);
    let isDestinationLocationPresent = locations.includes(dl);

    if (isCurrentLocationPresent && isDestinationLocationPresent) {
      return true;
    }

    return false;
  };

  function formatText(text) {
    text = text.trim();
    return text.replace(/ /g, "_").toLowerCase();
  }

  const findBus = (cl, dl) => {
    return new Promise((resolve, reject) => {
      cl = formatText(cl);
      dl = formatText(dl);
      const jaipurBusesLen = Object.keys(busData).length;
      const jaipurBusesObjKeys = Object.keys(busData);
      const resultBuses = [];

      for (let i = 0; i < jaipurBusesLen; i++) {
        const currentBusKey = jaipurBusesObjKeys[i];
        const locations = busData[currentBusKey].location;
        if (doesBothLocationPresent(cl, dl, locations)) {
          resultBuses.push(busData[currentBusKey]);
        }
      }

      resolve(resultBuses);
    });
  };

  return (
    <View style={styles.mainContainer}>
      <View styeles={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            setcurrentLocation(text);
          }}
          value={currentLocation}
          placeholder="Current Location"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            setdestinationLocation(text);
          }}
          value={destinationLocation}
          placeholder="Destination Location"
        />
        <Button
          onPress={() => {
            findBus(currentLocation, destinationLocation)
              .then((result) => {
                setFetchedBused(result);
                setDoesFetched(true);
              })
              .catch((error) => {
                console.error(error);
              });
          }}
          title="Search Bus"
          color="pink"
        />
      </View>
      {doesFetched ? (
        <ScrollView
          style={{
            flex: 2,
            borderWidth: 2,
            borderColor: "black",
            marginTop: 5,
          }}
        >
          {fetchedBused.map((busObj) => {
            const currentBus = busObj;
            return (
              <TouchableHighlight
                onPress={() => {
                  navigation.navigate("Details", {
                    busLocations: currentBus.location,
                    busFreq: currentBus.frequency,
                  });
                }}
                underlayColor="white"
                key={currentBus.uniqueKey}
                style={{ margin: 10 }}
              >
                <BusCard
                  busNumber={currentBus.busNum}
                  busImg={currentBus.img}
                  key={currentBus.uniqueKey}
                />
              </TouchableHighlight>
            );
          })}
        </ScrollView>
      ) : (
        <View
          style={{ flex: 2, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>
            Please enter the locations.
          </Text>
        </View>
      )}
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
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: "BusDekho" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: 10,
    display: "flex",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    columnGap: 15,
    flex: 1,
  },
  input: {
    width: "100%",
    borderWidth: 2,
    borderColor: "black",
    marginVertical: 5,
    padding: 10,
    fontSize: 18,
    borderRadius: 16,
  },
  searchBtn: {
    width: "50%",
    backgroundColor: "pink",
    borderWidth: 2,
    borderColor: "black",
    color: "black",
  },
});

export default App;
