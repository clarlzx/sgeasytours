import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import AttractionTabNavigation from "./screens/AttractionTabNavigation";

const Stack = createStackNavigator();

export default function HomeStackScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home Screen" component={HomeScreen} />
        <Stack.Screen
          name="Attraction Tab Screen"
          component={AttractionTabNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
