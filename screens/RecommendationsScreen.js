import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Context } from "../components/Context";
import firebase from "../database/firebaseDB";

export default function RecommendationsScreen({ navigation }) {
  const dataList = React.useContext(Context);
  // console.log(dataList);

  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("attractions")
      .where("name", "!=", dataList.name)
      .onSnapshot((collection) => {
        const attractions = collection.docs.map((doc) => {
          return {
            key: doc.id,
            name: doc.data().name,
          };
        });

        setAttractions(attractions);
      });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightsalmon",
      }}
    >
      <Text>{dataList.name}</Text>
      <Text>Hi I am the Recommendations screen!</Text>
      <FlatList
        data={attractions}
        renderItem={({ item }) => (
          <View
            style={{
              height: 50,
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Attraction Tab Screen", { ...item })
              }
            >
              <Text>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
