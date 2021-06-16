import * as React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from "react-native";
import openMap from "react-native-open-maps";
//import so we can use the params from the initial context given
import { Context } from "../components/Context";

let overview = "";
let openingHours = "";
let address = null;
let coordinates = null;
let website = "";

export default function DetailsScreen() {
  const dataList = React.useContext(Context);

  overview = dataList.overview;
  openingHours = dataList.openingHours;
  address = dataList.address;
  coordinates = dataList.coordinates;
  website = dataList.website;

  function goToMap() {
    console.log(coordinates[0] + ", " + coordinates[1]);
    openMap({ latitude: coordinates[0], longitude: coordinates[1] });
  }

  function goToSite() {
    Linking.openURL(`${website}`);
  }

  return (
    <View
      style={{
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        padding: 20,
        backgroundColor: "lemonchiffon",
      }}
    >
      <Text style={styles.title}>
        Overview:{"\n"} <Text style={styles.content}>{overview}</Text>
      </Text>
      <TouchableOpacity
        onPress={goToSite}
        style={{
          borderRadius: 3,
          backgroundColor: "lightpink",
          padding: 5,
          width: 50,
          alignItems: "center",
          fontSize: 16,
        }}
      >
        <Text>More</Text>
      </TouchableOpacity>

      <Text style={styles.title}>
        Opening hours:{"\n"} <Text style={styles.content}>{openingHours}</Text>
      </Text>

      <Text style={styles.title}>
        Location:{"\n"} <Text style={styles.content}>{address}</Text>
      </Text>
      <TouchableOpacity
        onPress={goToMap}
        style={{
          borderRadius: 3,
          backgroundColor: "lightpink",
          padding: 5,
          width: 50,
          alignItems: "center",
          fontSize: 16,
        }}
      >
        <Text>Map</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    fontSize: 16,
    fontWeight: "normal",
    marginBottom: 20,
  },
});
