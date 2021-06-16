import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

function bringLastWordToNextLine(str) {
  let name = "";
  const nameArr = str.split(" ");
  nameArr.slice(0, -1).forEach((x) => {
    name += x + "\n";
  });

  return name.substring(0, name.length - 1) + " " + nameArr.slice(-1);
}

function Name({ value }) {
  return (
    <View
      style={{
        width: Dimensions.get("screen").width * 0.42,
        height: "100%",
        justifyContent: "center",
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
        borderRadius: 4,
        borderColor: "white",
        borderRightWidth: 1,
      }}
    >
      <Text
        style={{
          fontSize: 15,
          fontWeight: "bold",
          paddingLeft: 15,
          paddingRight: 10,
        }}
      >
        {bringLastWordToNextLine(value)}
      </Text>
    </View>
  );
}

function Distance({ value }) {
  return (
    <View
      style={{
        width: Dimensions.get("screen").width * 0.15,
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 16 }}>{value}</Text>
      <Text style={{ fontSize: 16 }}>KM</Text>
    </View>
  );
}

function DrivingTime({ value }) {
  return (
    <View
      style={{
        width: Dimensions.get("screen").width * 0.15,
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FontAwesome name="car" size={24} color="black" />
      <Text>{value} min</Text>
    </View>
  );
}

function WalkingTime({ value }) {
  return (
    <View
      style={{
        width: Dimensions.get("screen").width * 0.15,
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FontAwesome5 name="walking" size={24} color="black" />
      <Text>{value} min</Text>
    </View>
  );
}

export default function ({ item, dataList, navigation }) {
  return (
    <View
      style={{
        width: Dimensions.get("screen").width * 0.92,
        height: 70,
        flex: 1,
        justifyContent: "center",
        alignSelf: "center",
        marginVertical: 8,
        marginHorizontal: 16,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 4,
        backgroundColor: `rgba(255,255,255,0.4)`,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Attraction Tab Screen", { ...item });
          navigation.navigate("Details");
        }}
      >
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={{
            width: Dimensions.get("screen").width * 0.92,
            height: "100%",
            borderRadius: 4,
            alignSelf: "center",
          }}
          data={[
            { value: item.name, key: 1 },
            { value: item.distance, key: 2 },
            { value: dataList.drivingTime[item.name], key: 3 },
            { value: dataList.walkingTime[item.name], key: 4 },
          ]}
          renderItem={({ item }) => {
            if (item.key == 1) {
              return <Name value={item.value} />;
            } else if (item.key == 2) {
              return <Distance value={item.value} />;
            } else if (item.key == 3) {
              return <DrivingTime value={item.value} />;
            } else {
              return <WalkingTime value={item.value} />;
            }
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
