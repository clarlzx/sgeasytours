import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import AttractionTabNavigation from "./screens/AttractionTabNavigation";
import firebase from './database/firebaseDB';

// to add stuff to the collection in firebase
// firebase.firestore().collection("attractions").add({
//   name: "hello",
// });

// firebase.firestore().collection("attractions").doc().set({
//   pastWeek: [
//     {
//       day: "monday",
//       time: [
//         {id: "8am",crowd: 0},
//         {id: "9am",crowd: 0},
//         {id: "10am",crowd: 0},
//         {id: "11am",crowd: 0},
//         {id: "12pm",crowd: 0},
//         {id: "1pm",crowd: 0},
//         {id: "2pm",crowd: 0},
//         {id: "3pm",crowd: 0},
//         {id: "4pm",crowd: 0},
//         {id: "5pm",crowd: 0},
//         {id: "6pm",crowd: 0},
//         {id: "7pm",crowd: 0},
//         {id: "8pm",crowd: 0},
//         {id: "9pm",crowd: 0},
//         {id: "10pm",crowd: 0}
//     ]
//   },
//   {
//     day: "tuesday",
//     time: [
//       {id: "8am",crowd: 0},
//       {id: "9am",crowd: 0},
//       {id: "10am",crowd: 0},
//       {id: "11am",crowd: 0},
//       {id: "12pm",crowd: 0},
//       {id: "1pm",crowd: 0},
//       {id: "2pm",crowd: 0},
//       {id: "3pm",crowd: 0},
//       {id: "4pm",crowd: 0},
//       {id: "5pm",crowd: 0},
//       {id: "6pm",crowd: 0},
//       {id: "7pm",crowd: 0},
//       {id: "8pm",crowd: 0},
//       {id: "9pm",crowd: 0},
//       {id: "10pm",crowd: 0}
//     ]
//   },
//   {
//     day: "wednesday",
//     time: [
//       {id: "8am",crowd: 0},
//       {id: "9am",crowd: 0},
//       {id: "10am",crowd: 0},
//       {id: "11am",crowd: 0},
//       {id: "12pm",crowd: 0},
//       {id: "1pm",crowd: 0},
//       {id: "2pm",crowd: 0},
//       {id: "3pm",crowd: 0},
//       {id: "4pm",crowd: 0},
//       {id: "5pm",crowd: 0},
//       {id: "6pm",crowd: 0},
//       {id: "7pm",crowd: 0},
//       {id: "8pm",crowd: 0},
//       {id: "9pm",crowd: 0},
//       {id: "10pm",crowd: 0}
//     ]
//   },
//   {
//     day: "thursday",
//     time: [
//       {id: "8am",crowd: 0},
//       {id: "9am",crowd: 0},
//       {id: "10am",crowd: 0},
//       {id: "11am",crowd: 0},
//       {id: "12pm",crowd: 0},
//       {id: "1pm",crowd: 0},
//       {id: "2pm",crowd: 0},
//       {id: "3pm",crowd: 0},
//       {id: "4pm",crowd: 0},
//       {id: "5pm",crowd: 0},
//       {id: "6pm",crowd: 0},
//       {id: "7pm",crowd: 0},
//       {id: "8pm",crowd: 0},
//       {id: "9pm",crowd: 0},
//       {id: "10pm",crowd: 0}
//     ]
//   },
//   {
//     day: "friday",
//     time: [
//       {id: "8am",crowd: 0},
//       {id: "9am",crowd: 0},
//       {id: "10am",crowd: 0},
//       {id: "11am",crowd: 0},
//       {id: "12pm",crowd: 0},
//       {id: "1pm",crowd: 0},
//       {id: "2pm",crowd: 0},
//       {id: "3pm",crowd: 0},
//       {id: "4pm",crowd: 0},
//       {id: "5pm",crowd: 0},
//       {id: "6pm",crowd: 0},
//       {id: "7pm",crowd: 0},
//       {id: "8pm",crowd: 0},
//       {id: "9pm",crowd: 0},
//       {id: "10pm",crowd: 0}
//     ]
//   },
//   {
//     day: "saturday",
//     time: [
//       {id: "8am",crowd: 0},
//       {id: "9am",crowd: 0},
//       {id: "10am",crowd: 0},
//       {id: "11am",crowd: 0},
//       {id: "12pm",crowd: 0},
//       {id: "1pm",crowd: 0},
//       {id: "2pm",crowd: 0},
//       {id: "3pm",crowd: 0},
//       {id: "4pm",crowd: 0},
//       {id: "5pm",crowd: 0},
//       {id: "6pm",crowd: 0},
//       {id: "7pm",crowd: 0},
//       {id: "8pm",crowd: 0},
//       {id: "9pm",crowd: 0},
//       {id: "10pm",crowd: 0}
//     ]
//   },
//   {
//     day: "sunday",
//     time: [
//       {id: "8am",crowd: 0},
//       {id: "9am",crowd: 0},
//       {id: "10am",crowd: 0},
//       {id: "11am",crowd: 0},
//       {id: "12pm",crowd: 0},
//       {id: "1pm",crowd: 0},
//       {id: "2pm",crowd: 0},
//       {id: "3pm",crowd: 0},
//       {id: "4pm",crowd: 0},
//       {id: "5pm",crowd: 0},
//       {id: "6pm",crowd: 0},
//       {id: "7pm",crowd: 0},
//       {id: "8pm",crowd: 0},
//       {id: "9pm",crowd: 0},
//       {id: "10pm",crowd: 0}
//     ]
//   }
// ]
// }, {merge: true});

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
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
