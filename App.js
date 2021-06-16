import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TitleImage from "./components/TitleImage";
import BookButton from "./components/BookButton";
import firebase from "./database/firebaseDB";
import HomeScreen from "./screens/HomeScreen";
import AttractionTabNavigation from "./screens/AttractionTabNavigation";

const db = firebase.firestore().collection("attractions");

const Stack = createStackNavigator();

export default function App() {
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    const unsubscribe = db.onSnapshot((collection) => {
      //Sort attractions alphabetically
      const updateAttractions = collection.docs.map((doc) => {
        return {
          key: doc.id,
          ...doc.data(),
        };
      });

      setAttractions(updateAttractions);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home Screen"
          children={() => <HomeScreen attractions={attractions} />}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Attraction Tab Screen"
          component={AttractionTabNavigation}
          options={({ route }) => ({
            headerTitle: null,
            headerStatusBarHeight: 180,
            headerBackground: () => (
              <TitleImage attractionDetails={route.params} />
            ),
            headerRight: () => <BookButton attractionDetails={route.params} />,
            headerTintColor: "white",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
