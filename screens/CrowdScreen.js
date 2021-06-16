import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Context } from "../components/Context";

export default function CrowdScreen() {
  const dataList = React.useContext(Context);
  console.log(dataList);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
      }}
    >
      <Text>{dataList.name}</Text>
      <Text>Hi I am the Crowd screen!</Text>
    </View>
  );
}
