import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import firebase from "../database/firebaseDB";
import openMap from "react-native-open-maps";

// const attractionInfo = firebase
//   .firestore()
//   .collection("attractions")
//   .doc("3HnaqZkongaJXXvPC0pR")
//   .get();
// .then(() => console.log("retrieved"));

let overview = "";
let openingHours = "";
let address = null;
let coordinates = null;
let website = "";

const attractionInfo = firebase
  .firestore()
  .collection("attractions")
  .doc("3HnaqZkongaJXXvPC0pR")
  .get()
  .then((doc) => {
    overview = doc.data().overview;
    openingHours = doc.data().openingHours;
    address = doc.data().address;
    coordinates = doc.data().coordinates;
    website = doc.data().website;
    console.log("done");
  });

// const overview = attractionInfo.overview;

export default function DetailsScreen() {
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
