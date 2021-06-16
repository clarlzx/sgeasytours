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
    <View style={styles.nameContainer}>
      <Text style={styles.nameText}>{bringLastWordToNextLine(value)}</Text>
    </View>
  );
}

function Distance({ value }) {
  return (
    <View style={styles.distanceContainer}>
      <Text style={styles.distanceTextTop}>{value}</Text>
      <Text style={styles.distanceTextBottom}>KM</Text>
    </View>
  );
}

function DrivingTime({ value }) {
  return (
    <View style={styles.drivingContainer}>
      <FontAwesome name="car" size={24} color="indianred" />
      <Text style={styles.drivingText}>{value} min</Text>
    </View>
  );
}

function WalkingTime({ value }) {
  return (
    <View style={styles.walkingContainer}>
      <FontAwesome5 name="walking" size={24} color="darkolivegreen" />
      <Text style={styles.walkingText}>{value} min</Text>
    </View>
  );
}

export default function ({ item, dataList, navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Attraction Tab Screen", { ...item });
          navigation.navigate("Details");
        }}
      >
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={styles.horizontalFlatList}
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

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width * 0.9,
    height: 80,
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: `rgba(0,0,0,0.85)`,
    borderRadius: 4,
    backgroundColor: `rgba(10,0,200,0.2)`,
  },
  horizontalFlatList: {
    width: Dimensions.get("screen").width * 0.9,
    height: "100%",
    borderRadius: 4,
    alignSelf: "center",
  },
  nameContainer: {
    width: Dimensions.get("screen").width * 0.42,
    height: "100%",
    justifyContent: "center",
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    borderRadius: 4,
    borderColor: "grey",
    borderRightWidth: 1,
  },
  nameText: {
    fontSize: 17,
    fontWeight: "bold",
    paddingLeft: 15,
    paddingRight: 10,
  },
  distanceContainer: {
    width: Dimensions.get("screen").width * 0.15,
    padding: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  distanceTextTop: {
    fontSize: 18,
    fontWeight: "bold",
    color: "darkblue",
    textAlign: "center",
  },
  distanceTextBottom: {
    fontSize: 15,
    fontWeight: "bold",
    color: "darkblue",
    textAlign: "center",
  },
  drivingContainer: {
    width: Dimensions.get("screen").width * 0.16,
    padding: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  drivingText: {
    fontWeight: "bold",
    color: "indianred",
    textAlign: "center",
  },
  walkingContainer: {
    width: Dimensions.get("screen").width * 0.16,
    padding: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  walkingText: {
    fontWeight: "bold",
    color: "darkolivegreen",
    textAlign: "center",
  },
});
