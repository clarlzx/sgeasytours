import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import CrowdScreen from "./CrowdScreen";
import DetailsScreen from "./DetailsScreen";
import SafetyMeasuresScreen from "./SafetyMeasuresScreen";
import RecommendationsScreen from "./RecommendationsScreen";
import { Ionicons } from "@expo/vector-icons";
import { Context } from "../components/Context";

const Tab = createBottomTabNavigator();

//Tab navigator directly gets its params data from ScrollView navigation
export default function AttractionTabNavigation({ route }) {
  return (
    //Providing the params in the context, so all tabs can access it
    <Context.Provider value={route.params}>
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
        <Tab.Screen
          name="Crowd"
          component={CrowdScreen}
          initialParams={route.params}
        />
        <Tab.Screen name="Safety Measures" component={SafetyMeasuresScreen} />
        <Tab.Screen name="Recommendations" component={RecommendationsScreen} />
      </Tab.Navigator>
    </Context.Provider>
  );
}
