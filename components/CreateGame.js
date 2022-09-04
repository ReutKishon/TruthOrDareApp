import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Modal,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

export default function CreateGame(props) {
  const [gameCode, setGameCode] = useState("1236478");
  const [modalVisible, setModalVisible] = useState(props.modalVisible);

  return (
    <Modal visible={modalVisible}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={[styles.modalView, styles.centeredView]}>
          <Icon
            onPress={() => {
              setModalVisible(false);
            }}
            style={styles.icon}
            name="close"
            size={25}
            color="white"
          />
          <Text style={{ margin: 4 }}>your game code is: {gameCode} </Text>
          <Text>Waiting for your friends to join in...</Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "pink",
    borderRadius: 20,

    width: 300,
    height: 100,
  },
  icon: {
    marginTop: -58,
    position: "absolute",
    left: 5, // Keep some space between your left border and Image
  },
});
