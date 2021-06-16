import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

//import so we can use the params from the initial context given
import { Context } from "../components/Context";

export default function DetailsScreen() {
  const dataList = React.useContext(Context);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lemonchiffon",
      }}
    >
      <Text>{dataList.name}</Text>
      <Text>Overview:</Text>
      <Text>Opening hours:</Text>
      <Text>Location:</Text>
    </View>
  );
}
