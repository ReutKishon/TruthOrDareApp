import React, { useState } from "react";
import { View, Text, StyleSheet, Alert, Modal } from "react-native";
import Dialog from "react-native-dialog";
import CloseButton from "react-bootstrap/CloseButton";

function CreateGame(props) {
  const [gameCode, setGameCode] = useState("");
  const [modalVisible, setModalVisible] = useState(props.modalVisible);

  return (
    <Modal visible={modalVisible}>
      <View style={[styles.modalView, styles.centeredView]}>
        <Text>your game code is: {gameCode} </Text>
        <Text>Waiting for your friends to join in...</Text>
      </View>
    </Modal>
  );
}

export default CreateGame;

const styles = StyleSheet.create({
  centeredView: {
    // flex: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "gray",
    borderRadius: 20,
    padding: 35,

    width: 300,
    height: 200,
  },
});
