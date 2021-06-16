import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Context } from "../components/Context";
import MapView, { Marker } from "react-native-maps";

function ListItem({ item }) {
  return (
    <View style={styles.list}>
      <Text style={{ fontSize: 20 }}>{"\u2B24"}</Text>
      <Text>{item}</Text>
    </View>
  );
}

const staticData = [
  { coordinates: { latitude: 37.78383, longitude: -122.405766 } },
  { coordinates: { latitude: 37.78584, longitude: -122.405478 } },
  { coordinates: { latitude: 37.784738, longitude: -122.402839 } },
];

export default function SafetyMeasuresScreen() {
  console.log("new data");

  const [isEntrance, setEntrance] = useState(false);
  const [isSanitiser, setSanitiser] = useState(false);

  function entrancePressed() {
    return isEntrance ? setEntrance(false) : setEntrance(true);
  }

  function sanitiserPressed() {
    return isSanitiser ? setSanitiser(false) : setEntrance(true);
  }

  const dataList = React.useContext(Context);
  const latitude = dataList.coordinates[0];
  const longitude = dataList.coordinates[1];
  const closedEateries = dataList.closedEateries;
  const entrances = dataList.entrances;
  const sanitisers = dataList.handSanitiser;
  console.log(typeof entrances[0].coordinates.longitude);
  console.log(typeof staticData[0].coordinates.longitude);
  // console.log(staticData.coordinates);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>
          Safety measures: {"\n"}
          <Text style={styles.content}>Wear a mask.</Text>
        </Text>
        <Text style={styles.title}>
          Closed eateries: {"\n"}
          <Text style={styles.content}>Dummy content.</Text>
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Map: {"\n"}</Text>
        <Text
          style={{ fontSize: 16, alignSelf: "center", textAlign: "center" }}
        >
          Press button to show corresponding markers, press again to hide!
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={entrancePressed} style={styles.button}>
            <Text style={styles.buttonText}>Entrances</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={sanitiserPressed} style={styles.button}>
            <Text style={styles.buttonText}>Hand sanitiser points</Text>
          </TouchableOpacity>
        </View>
        {/* <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.783363,
            longitude: -122.403908,
            latitudeDelta: 0.015922,
            longitudeDelta: 0.015421,
          }}
        >
          {staticData.map((item, index) => {
            console.log(index);
            <Marker key={index} title="Test" coordinate={item.coordinates} />;
          })}
        </MapView> */}

        <MapView
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.0008,
            longitudeDelta: 0.0004,
          }}
          style={styles.map}
          mapType="hybrid"
        >
          {/* <Marker
            coordinate={{
              latitude: latitude,
              longitude: longitude,
            }}
            title={dataList.name}
          /> */}
          {entrances.map((item, index) => {
            // console.log(item);
            <Marker
              key={index}
              coordinate={{
                latitude: item.coordinates.latitude,
                longitude: item.coordinates.longitude,
              }}
              title="Test"
            />;
          })}
        </MapView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  scrollView: {
    flexGrow: 1,
    width: "100%",
    padding: 20,
  },
  map: {
    width: 320,
    height: 320,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    fontWeight: "normal",
  },
  button: {
    backgroundColor: "#BA68C8",
    padding: 10,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: 60,
  },
  buttonText: {
    color: "white",
  },
  list: { flex: 1, flexDirection: "row", padding: 10 },
});
