import * as React from "react";
import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";

export default function SearchBar() {
  return (
    <View style={styles.bar}>
      <Text>I am a search bar!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: "lightgrey",
    width: "80%",
    padding: 10,
    marginTop: 150,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
