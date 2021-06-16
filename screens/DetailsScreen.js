import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function DetailsScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lemonchiffon",
      }}
    >
      <Text>Overview</Text>
      <Text>Opening hours:</Text>
      <Text>Location:</Text>
    </View>
  );
}
