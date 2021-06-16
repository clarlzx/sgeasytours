import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Context } from "../components/Context";
import firebase from "../database/firebaseDB";
import { getDistance } from "geolib";
import RecommendationItem from "../components/RecommendationItem";

export default function RecommendationsScreen({ navigation }) {
  const dataList = React.useContext(Context);

  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("attractions")
      .onSnapshot((collection) => {
        const attractions = collection.docs.map((doc) => {
          const distance = getDistance(
            {
              latitude: doc.data().coordinates[0],
              longitude: doc.data().coordinates[1],
            },
            {
              latitude: dataList.coordinates[0],
              longitude: dataList.coordinates[1],
            }
          );

          return {
            ...doc.data(),
            key: doc.id,
            distance: (distance / 1000).toFixed(2), //in KM, to 2 d.p.
          };
        });
        attractions.sort((a, b) => a.distance.localeCompare(b.distance));
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
        backgroundColor: "white",
      }}
    >
      <Text style={{ padding: 10, fontSize: 20, marginTop: 5 }}>
        Visit somewhere else near!
      </Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.flatList}
        data={attractions.filter(
          (attraction) => attraction.name != dataList.name
        )}
        renderItem={({ item }) => (
          <RecommendationItem
            item={item}
            dataList={dataList}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flatList: {
    width: "100%",
  },
});
