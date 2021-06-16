import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import ScrollView from "../components/ScrollView";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/longer-bus-app-title.png")}
        style={styles.image}
      >
        <View style={styles.titleImageView}>
          <Image
            style={styles.titleImage}
            resizeMode="contain"
            source={require("../assets/title.png")}
          />
        </View>
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
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  titleImageView: {
    height: "20%",
    width: "100%",
    alignItems: "flex-end",
    paddingTop: 120,
    paddingRight: 25,
    justifyContent: "center",
  },
  titleImage: {
    right: 0,
    width: Dimensions.get("screen").width * 0.6,
  },
  searchOuter: {
    backgroundColor: "#BA68C8",
    width: "85%",
    marginTop: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  searchInner: {
    backgroundColor: "#663a82",
    borderRadius: 5,
    width: "100%",
    padding: 10,
  },
  searchText: {
    color: "white",
    fontSize: 18,
  },
});
