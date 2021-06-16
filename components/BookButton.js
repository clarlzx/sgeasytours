import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Text,
} from "react-native";

export default function BookButton({ attractionDetails }) {
  const bookingLink = attractionDetails.bookingLink;
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.button}
        // onPress={() => alert("This is a button!")}
        onPress={() => {
          Linking.openURL(`${bookingLink}`);
        }}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Book Now!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
  },
  button: {
    backgroundColor: "red",
    padding: 7,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
