import * as React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

export default function TitleImage({ attractionDetails }) {
  let name = "";
  `${attractionDetails.name}`.split(" ").forEach((x) => {
    name += x + "\n";
  });
  name = name.substring(0, name.length - 1);

  const imageLink = attractionDetails.image;

  return (
    <View style={StyleSheet.absoluteFill}>
      <ImageBackground
        style={StyleSheet.absoluteFill}
        source={{
          uri: `${imageLink}`,
        }}
      >
        <View style={styles.overlay} />
      </ImageBackground>
      <Text style={styles.title}>{name}</Text>
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
