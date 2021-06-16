import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import firebase from "../database/firebaseDB";
import { Toolbar } from "react-native-material-ui";
import _ from "lodash";

//Function for the separator between each listed item
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
      setFullList(list);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  //Search functionality implementation
  const [fullList, setFullList] = useState([]);

  const contains = ({ name }, query) => {
    const formattedName = name.toLowerCase();
    if (formattedName.includes(query)) {
      return true;
    }
    return false;
  };

  handleSearch = (input) => {
    const formattedQuery = input.toLowerCase();
    const filteredList = _.filter(fullList, (name) => {
      return contains(name, formattedQuery);
    });
    setList(filteredList);
  };

  return (
    <View style={styles.container}>
      <Toolbar
        style={{
          container: styles.searchBar,
        }}
        leftElement="arrow-back"
        onLeftElementPress={() => navigation.goBack()}
        centerElement="Search attractions..."
        onPress={() => alert("Please click on the search icon to search")}
        searchable={{
          autoFocus: true,
          placeholder: "Search attractions...",
          onChangeText: (input) => handleSearch(input),
        }}
      />
      <FlatList
        style={{ width: "100%", height: "10%" }}
        data={list}
        renderItem={({ item }) => {
          return (
            <View>
              <TouchableOpacity
                style={styles.listCell}
                onPress={() =>
                  navigation.navigate("Attraction Tab Screen", { ...item })
                }
              >
                <Text style={{ fontSize: 20, marginLeft: 10 }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
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
    backgroundColor: "#BA68C8",
    height: 100,
  },
  listCell: {
    padding: 15,
  },
});
