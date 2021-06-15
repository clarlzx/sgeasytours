import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from './database/firebaseDB';

// to add stuff to the collection in firebase
// firebase.firestore().collection("attractions").add({
//   name: "hello",
// });

// to retrieve stuff from firebase
// firebase.firestore().collection("category").doc('themeWaterPark').get().then((doc) => {
//   const name = doc.data().name;
//   console.log(name);
// })

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>hi</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
