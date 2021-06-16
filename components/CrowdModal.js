import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Modal from "react-native-modal";

export default function CrowdModal({ day, time, data }) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity style={styles.button} onPress={toggleModal} />

      <Modal isVisible={isModalVisible}>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text>Estimate crowd for</Text>
            <Text>Day: {day}</Text>
            <Text>Time: {time}</Text>
            <Text>{data}</Text>
          </View>

          <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  button: { height: 10, width: 10, backgroundColor: "red" },
  container: {
    flex: 0.2,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  textContainer: {
    width: "100%",
    height: "70%",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    width: "100%",
    height: "30%",
    backgroundColor: "lightblue",
    position: "absolute",
    bottom: 0,
    left: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
