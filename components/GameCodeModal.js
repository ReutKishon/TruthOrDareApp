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

export default function CreateGame({ visible, setParentVisible }) {
  const [gameCode, setGameCode] = useState("1236478");
  const [modalVisible, setModalVisible] = useState(visible);

  React.useEffect(() => {
    setModalVisible(visible);
  }, [visible]);

  return (
    <Modal visible={modalVisible}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={styles.modalView}>
          <Icon
            onPress={() => {
              setModalVisible(false);
              setParentVisible(false);
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
  modalView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
    borderRadius: 20,
    width: 300,
    height: 100,
  },
  icon: {
    marginTop: -58,
    position: "absolute",
    left: 5,
  },
});
