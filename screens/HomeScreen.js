import * as React from "react";
import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";
import ScrollView from "../components/ScrollView";
import SearchBar from "../components/SearchBar";

export default function HomeScreen({ navigation, attractions }) {
  console.log(attractions);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/app-title.png")}
        style={styles.image}
      >
        <SearchBar style={styles.searchBar} />
        <ScrollView />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
  },
  searchBar: {
    justifyContent: "center",
    alignItems: "center",
  },
});
