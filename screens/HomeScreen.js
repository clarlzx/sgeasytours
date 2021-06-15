import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import ScrollView from "../components/ScrollView";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/app-title.png")}
        style={styles.image}
      >
        <View style={styles.searchOuter}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Search Screen")}
            style={styles.searchInner}
          >
            <Text style={styles.searchText}>Search attractions...</Text>
          </TouchableOpacity>
        </View>
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
  searchOuter: {
    backgroundColor: "#1b1b26",
    width: "80%",
    marginTop: 100,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  searchInner: {
    backgroundColor: "#424242",
    borderRadius: 10,
    width: "90%",
    padding: 10,
  },
  searchText: {
    color: "white",
    fontSize: 18,
  },
});
