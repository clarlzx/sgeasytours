import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightcoral",
      }}
    >
      <Text>Hi I am the Home screen!</Text>
      <Button
        title="Go to attractions"
        onPress={() => navigation.navigate("Attraction Tab Screen")}
      ></Button>
    </View>
  );
}
