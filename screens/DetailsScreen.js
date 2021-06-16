import * as React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
  ScrollView,
} from "react-native";
import openMap from "react-native-open-maps";
//import so we can use the params from the initial context given
import { Context } from "../components/Context";

let queryName = "";
let overview = "";
let openingHours = "";
let address = null;
let coordinates = null;
let website = "";

export default function DetailsScreen() {
  const dataList = React.useContext(Context);

  queryName = dataList.queryName;
  overview = dataList.overview;
  openingHours = dataList.openingHours;
  address = dataList.address;
  coordinates = dataList.coordinates;
  website = dataList.website;

  openingHours = openingHours.replace("\\n", "\n");

  function goToMap() {
    // console.log(coordinates[0] + ", " + coordinates[1]);
    openMap({
      query: queryName,
      // latitude: coordinates[0],
      // longitude: coordinates[1],
      zoom: 18,
    });
  }

  function goToSite() {
    Linking.openURL(`${website}`);
  }

  return (
    <ScrollView
      // <View
      style={{
        flex: 1,
        padding: 20,
        paddingTop: 0,
        backgroundColor: "white",
      }}
    >
      <Text style={styles.title}>Overview</Text>
      <Text style={styles.content}>{overview}</Text>
      <TouchableOpacity onPress={goToSite} style={styles.button}>
        <Text style={styles.buttonText}>More</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Opening hours</Text>
      <Text style={styles.content}>{openingHours}</Text>

      <Text style={styles.title}>Location</Text>
      <Text style={styles.content}>{address}</Text>
      <TouchableOpacity onPress={goToMap} style={styles.button}>
        <Text style={styles.buttonText}>Map</Text>
      </TouchableOpacity>
      {/* </View> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 5,
  },
  content: {
    fontSize: 16,
    fontWeight: "normal",
    textAlign: "justify",
  },
  button: {
    color: "white",
    borderRadius: 3,
    backgroundColor: "#BA68C8",
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    // width: 70,
    alignItems: "center",
    fontSize: 16,
  },
  buttonText: {
    color: "white",
  },
});
