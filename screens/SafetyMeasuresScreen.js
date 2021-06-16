import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Context } from "../components/Context";

export default function SafetyMeasuresScreen() {
  const dataList = React.useContext(Context);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgreen",
      }}
    >
      <Text>{dataList.name}</Text>
      <Text>Hi I am the Safety Measures screen!</Text>
    </View>
  );
}
