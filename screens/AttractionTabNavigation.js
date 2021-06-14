import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import CrowdScreen from "./CrowdScreen";
import DetailsScreen from "./DetailsScreen";
import SafetyMeasuresScreen from "./SafetyMeasuresScreen";
import RecommendationsScreen from "./RecommendationsScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function AttractionTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Details") {
            iconName = focused ? "list-sharp" : "list-outline";
          } else if (route.name === "Crowd") {
            iconName = focused ? "people-sharp" : "people-outline";
          } else if (route.name === "Safety Measures") {
            iconName = focused ? "warning" : "warning-outline";
          } else if (route.name === "Recommendations") {
            iconName = focused ? "happy" : "happy-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#BA68C8",
        inactiveTintColor: "#37474F",
      }}
    >
      <Tab.Screen name="Details" component={DetailsScreen} />
      <Tab.Screen name="Crowd" component={CrowdScreen} />
      <Tab.Screen name="Safety Measures" component={SafetyMeasuresScreen} />
      <Tab.Screen name="Recommendations" component={RecommendationsScreen} />
    </Tab.Navigator>
  );
}
