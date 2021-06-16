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

export default function SafetyMeasuresScreen() {
  const [isEntrance, setBoolean] = useState(true);

  function buttonPressed() {}

  const dataList = React.useContext(Context);
  const latitude = dataList.coordinates[0];
  const longitude = dataList.coordinates[1];
  const closedEateries = dataList.closedEateries;
  const entrances = dataList.entrances;
  const sanitisers = dataList.handSanitiser;

  const formattedEntrances = entrances.reduce(function (rows, key, index) {
    return (
      (index % 2 == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
      rows
    );
  }, []);

  const formattedSanitisers = sanitisers.reduce(function (rows, key, index) {
    return (
      (index % 2 == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
      rows
    );
  }, []);

  console.log("new data");
  console.log(formattedEntrances);

  // const LOCATIONS = [
  //   {id: '1', spot: 'sweethut'}, {id: '2', spot:'hardrockcafe'}
  // ]

  const LOCATIONS = dataList.closedEateries;

  // const MEASURES = [
  //   {id: '1', measure: 'wear a mask bro'}, {id: '2', measure:'touch points sanitised every 2 hours'}
  // ]

  const MEASURES = dataList.measures;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* <Text style={styles.title}>
          Safety measures: {"\n"}
          <Text style={styles.content}>Wear a mask.</Text>
        </Text>
        <Text style={styles.title}>
          Closed eateries: {"\n"}
          <Text style={styles.content}>Dummy content.</Text>
          {/* <FlatList
            data={closedEateries}
            renderItem={({ item }) => <ListItem item={item} />}
            keyExtractor={({ item }) => item}
          /> 
        </Text> */}
        <FlatList 
          data={MEASURES}
          renderItem={({item}) => {
            return (<Text>{`\u2022 ${item.measure}`}</Text>);
          }}
          keyExtractor={item => item.id}
          ListHeaderComponent={<Text style={styles.title}>Safety measures:</Text>}
          style={{paddingBottom: 15}}
        />
        <FlatList 
          data={LOCATIONS}
          renderItem={({item}) => {
            return (<Text>{`\u2022 ${item.eatery}`}</Text>);
          }}
          keyExtractor={item => item.id}
          ListHeaderComponent={<Text style={styles.title}>Closed Eateries:</Text>}
          style={{paddingBottom: 15}}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Map: {"\n"}</Text>
        {/* <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: "grey", marginBottom: 10, fontSize: 20 }}>
            {isEntrance
              ? "Entrances are now pinned"
              : "Hand sanitiser points are now pinned"}
          </Text>
        </View> */}
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Entrances</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Hand sanitiser points</Text>
          </TouchableOpacity>
        </View>
        <MapView
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.008,
            longitudeDelta: 0.004,
          }}
          style={styles.map}
          mapType="hybrid"
        >
          <Marker
            coordinate={{ latitude: latitude, longitude: longitude }}
            title={dataList.name}
          />
          {/* {formattedEntrances.map((marker) => (
            <Marker
              coordinate={{ latitude: latitude, longitude: longitude }}
              title={marker.title}
            />
          ))} */}
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
    marginBottom: 10,
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
