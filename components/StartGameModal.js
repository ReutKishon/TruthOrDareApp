import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Modal,
  SafeAreaView,
  TouchableHighlight,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

export default function StartGameModal({
  navigation,
  visible,
  setParentVisible,
  total_players,
  current_players_number,
}) {
  const [gameCode, setGameCode] = useState("1236478");
  const [totalplayers, settotalPlayers] = useState(total_players);
  const [currentPlayersNumber, setCurrentPlayersNumber] = useState(1);

  const [modalVisible, setModalVisible] = useState(visible);

  React.useEffect(() => {
    setModalVisible(visible);
    settotalPlayers(totalplayers);
  }, [visible, total_players]);

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
          />
          <Text style={{ margin: 4 }}>
            your game code is:{" "}
            <Text style={{ fontWeight: "bold" }}>{gameCode}</Text>{" "}
          </Text>
          <Text>
            {currentPlayersNumber} / {totalplayers} are joined
          </Text>
          <TouchableHighlight
            onPress={() => {
              navigation.navigate("PlayPage");
            }}
            style={styles.button}
          >
            <Text>Start game</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0ffff",
    borderRadius: 20,
    width: 300,
    height: 100,
  },
  icon: {
    marginTop: -58,
    position: "absolute",
    color: "black",
    left: 5,
  },
  button: {
    marginTop: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "white",
    borderRadius: 10,
    height: 30,
    width: 100,
    border: "2px solid black",
  },
});
