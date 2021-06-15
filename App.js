import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TitleImage from "./components/TitleImage";
import BookButton from "./components/BookButton";
import firebase from "./database/firebaseDB";
import HomeScreen from "./screens/HomeScreen";
import AttractionTabNavigation from "./screens/AttractionTabNavigation";

// to add stuff to the collection in firebase
// firebase.firestore().collection("attractions").add({
//   name: "hello",
// });

// to retrieve stuff from firebase
// firebase.firestore().collection("category").doc('themeWaterPark').get().then((doc) => {
//   const name = doc.data().name;
//   console.log(name);
// })

const Stack = createStackNavigator();

export default function HomeStackScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home Screen"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Attraction Tab Screen"
          component={AttractionTabNavigation}
          options={({ navigation, route }) => ({
            headerTitle: null,
            headerStatusBarHeight: 180,
            headerBackground: () => <TitleImage />,
            headerRight: () => <BookButton />,
            headerTintColor: "white",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
