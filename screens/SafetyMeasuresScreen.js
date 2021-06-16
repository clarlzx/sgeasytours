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
import MapView from "react-native-maps";

export default function SafetyMeasuresScreen() {
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
        <Text
          style={{
            fontSize: 16,
            alignSelf: "center",
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          Zoom in to view the location of the markers!
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Legend:</Text>
          <View style={[styles.textBox, { backgroundColor: "#decf2c" }]}>
            <Text>Entrances</Text>
          </View>
          <View style={[styles.textBox, { backgroundColor: "#24cbd4" }]}>
            <Text>Hand sanitiser points</Text>
          </View>
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
          <MapView.Marker
            coordinate={{
              latitude: latitude,
              longitude: longitude,
            }}
            title={dataList.name}
          />
          {entrances.map((item, index) => {
            return (
              <MapView.Marker
                pinColor="yellow"
                key={index}
                coordinate={item.coordinates}
                title="Entrance"
              />
            );
          })}
          {sanitisers.map((item, index) => {
            return (
              <MapView.Marker
                pinColor="aqua"
                key={index}
                coordinate={item.coordinates}
                title="Hand sanitiser point"
              />
            );
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
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    fontWeight: "normal",
  },
  textBox: { borderRadius: 5, margin: 5, padding: 10 },
  list: { flex: 1, flexDirection: "row", padding: 10 },
});
