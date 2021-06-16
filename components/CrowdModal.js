import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Modal from "react-native-modal";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function CrowdModal({ day, time, data, percentage }) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity style={
        percentage < 50 ? styles.notcrowdedbutton : percentage < 75 ? styles.somecrowdbutton : styles.crowdedbutton
       } onPress={toggleModal} />

      <Modal isVisible={isModalVisible}>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.titletext}>Estimated Crowd</Text>
            <Text style={styles.titletext}>({day}, {time})</Text>
            <Text style={styles.datatext}>{data}</Text>
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
  titletext: { fontWeight: "bold" },
  datatext: { fontWeight:"bold", color: "grey", fontSize: 22 },
  crowdedbutton: { flex: 1, backgroundColor: "#5f4bc1" },
  somecrowdbutton: { flex: 1, backgroundColor: "#7f9c6a" },
  notcrowdedbutton: { flex: 1, backgroundColor: "#bbc2b4" },
  container: {
    //flex: 0.2,
    height: 120,
    width: 200,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    alignSelf: "center"
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
    backgroundColor: "#e4e5ea",
    position: "absolute",
    bottom: 0,
    left: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
