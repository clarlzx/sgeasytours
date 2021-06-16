import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { DataTable } from "react-native-paper";

function bringLastWordToNextLine(str) {
  let name = "";
  const nameArr = str.split(" ");
  nameArr.slice(0, -1).forEach((x) => {
    name += x + "\n";
  });

  return name.substring(0, name.length - 1) + " " + nameArr.slice(-1);
}
export default function ({ item, dataList, navigation }) {
  return (
    <View
      style={{
        height: 70,
        flex: 1,
        justifyContent: "center",
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
        <View
          style={{
            width: "50%",
            height: "100%",
            justifyContent: "center",
            borderBottomRightRadius: 0,
            borderTopRightRadius: 0,
            borderRadius: 4,
            borderColor: "white",
            borderRightWidth: 1,
          }}
        >
          {/* <DataTable.Row>
            <DataTable.Cell numeric>1</DataTable.Cell>
            <DataTable.Cell numeric>2</DataTable.Cell>
            <DataTable.Cell numeric>3</DataTable.Cell>
            <DataTable.Cell numeric>4</DataTable.Cell>
          </DataTable.Row> */}
          <Text
            style={{
              left: 15,
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            {bringLastWordToNextLine(item.name)}
          </Text>
          <Text
            style={{
              left: 15,
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            {item.distance} KM
          </Text>
          {/* <FontAwesome name="car" size={24} color="black" /> */}
        </View>
        {/* <Text>
          {item.name}
          {"\n"}
          {item.distance}km
          {"\n"}
          Driving: {dataList.drivingTime[item.name]} min Walking:{" "}
          {dataList.walkingTime[item.name]} min
        </Text> */}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
