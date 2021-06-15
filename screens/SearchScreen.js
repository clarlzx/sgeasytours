import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { List, ListItem } from "react-native-elements";
import firebase from "../database/firebaseDB";
import { Toolbar } from "react-native-material-ui";

function renderSeparator() {
  return (
    <View
      style={{
        height: 1,
        width: "100%",
        backgroundColor: "#CED0CE",
      }}
    />
  );
}

function renderItem({ item }) {
  return (
    <TouchableOpacity
      style={styles.listCell}
      onPress={() => {
        navigation.navigate("Attraction Tab Screen", { ...item });
      }}
    >
      <Text style={{ fontSize: 20, marginLeft: 10 }}>{item.name}</Text>
    </TouchableOpacity>
  );
}

const db = firebase.firestore().collection("attractions");

export default function SearchScreen({ navigation }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    const unsubscribe = db.onSnapshot((collection) => {
      const list = collection.docs.map((doc) => {
        return {
          key: doc.id,
          ...doc.data(),
        };
      });
      list.sort((a, b) => a.name.localeCompare(b.name));
      setList(list);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Toolbar
        style={{
          container: styles.searchBar,
        }}
        leftElement="arrow-back"
        onLeftElementPress={() => navigation.goBack()}
        centerElement="Search attractions..."
        searchable={{
          autoFocus: true,
          placeholder: "Search attractions...",
        }}
      />
      <FlatList
        style={{ width: "100%", height: "10%" }}
        data={list}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  searchBar: {
    backgroundColor: "#37474F",
    height: 100,
  },
  listCell: {
    padding: 15,
  },
});
