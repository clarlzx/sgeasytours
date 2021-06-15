import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import firebase from "../database/firebaseDB";

function ListItem({ item }) {
  const navigation = useNavigation();

  return (
    <View style={styles.item}>
      <TouchableOpacity
        //If i'm not wrong, pass in props here to transfer to Attraction screen
        onPress={() => navigation.navigate("Attraction Tab Screen")}
      >
        <Image
          source={{
            uri: item.image,
          }}
          style={styles.attractionPhoto}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <Text style={styles.attractionName}>{item.name}</Text>
    </View>
  );
}

const db = firebase.firestore().collection("attractions");

export default function ScrollView() {
  const [attractions, setAttractions] = useState([]);
  const [popular, setPopular] = useState([]);
  const [leastCrowd, setLeastCrowd] = useState([]);

  const SECTIONS = [
    {
      title: "All attractions",
      data: attractions,
    },
    {
      title: "Popular attractions",
      data: popular.sort((a, b) => b.click - a.click).slice(0, 5),
    },
    {
      title: "Least crowded",
      data: leastCrowd
        .sort((a, b) => a.currentCrowd - b.currentCrowd)
        .slice(0, 5),
    },
  ];

  useEffect(() => {
    const unsubscribe = db.onSnapshot((collection) => {
      //Sort attractions alphabetically
      const attractions = collection.docs.map((doc) => {
        return {
          key: doc.id,
          ...doc.data(),
        };
      });
      attractions.sort((a, b) => a.name.localeCompare(b.name));
      setAttractions(attractions);

      //Sort and show top 5 popular attractions
      const popular = collection.docs.map((doc) => {
        return {
          key: doc.id,
          ...doc.data(),
        };
      });
      setPopular(popular);

      //Sort and show top 5 least crowded attractions
      const leastCrowd = collection.docs.map((doc) => {
        return {
          key: doc.id,
          ...doc.data(),
        };
      });
      setLeastCrowd(leastCrowd);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              <FlatList
                horizontal
                data={section.data}
                renderItem={({ item }) => <ListItem item={item} />}
                showsHorizontalScrollIndicator={false}
              />
            </>
          )}
          renderItem={({ item, section }) => {
            return null;
          }}
        />
      </SafeAreaView>
    </View>
  );
}

//Section names
const SECTIONS = [
  {
    title: "All attractions",
    data: [],
  },
  {
    title: "Popular attractions",
    data: [],
  },
  {
    title: "Least crowded",
    data: [],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
  },
  sectionHeader: {
    fontWeight: "bold",
    fontSize: 30,
    color: "black",
    marginTop: 20,
    marginBottom: 5,
    marginLeft: 10,
  },
  item: {
    margin: 10,
  },
  attractionPhoto: {
    width: 300,
    height: 200,
  },
  attractionName: {
    color: "black",
    marginTop: 5,
    fontSize: 20,
  },
});
