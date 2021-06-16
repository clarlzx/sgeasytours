import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TitleImage from "./components/TitleImage";
import BookButton from "./components/BookButton";
import HomeScreen from "./screens/HomeScreen";
import AttractionTabNavigation from "./screens/AttractionTabNavigation";
import SearchScreen from "./screens/SearchScreen";

const Stack = createStackNavigator();

export default function App() {
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
          name="Search Screen"
          component={SearchScreen}
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
