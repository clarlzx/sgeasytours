import * as React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

export default function TitleImage() {
  return (
    <View style={StyleSheet.absoluteFill}>
      <ImageBackground
        style={StyleSheet.absoluteFill}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/sgeasytours.appspot.com/o/SEAAquarium.jpg?alt=media&token=c0c3e189-71f7-44d1-8d93-d725b3464248",
        }}
      >
        <View style={styles.overlay} />
      </ImageBackground>
      <Text style={styles.title}>SEA{"\n"}Aquarium</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: `rgba(0,0,0,0.35)`,
  },
  title: {
    color: "white",
    fontSize: 40,
    marginLeft: 40,
    marginTop: 50,
  },
});
