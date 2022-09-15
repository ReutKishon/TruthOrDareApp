import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Modal,
  TouchableHighlight,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Header from "../components/Header";
import Icon from "react-native-vector-icons/AntDesign";

function Start({ navigation }) {
  const [gameCode, setGameCode] = useState("1236478");
  const [playerName, setPlayerName] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [totalPlayers, setTotalPlayers] = useState(2);
  const [emptyFieldWarning, setEmptyFieldWarning] = useState(false);

  const onPress = () => {
    if (playerName.length === 0) {
      setEmptyFieldWarning(true);
    } else setModalVisible(true);
  };

  const inputNameHandler = (name) => {
    if (emptyFieldWarning) setEmptyFieldWarning(false);
    setPlayerName(name);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          top: -100,
        }}
      >
        <Header />
      </View>
      <TextInput
        style={[styles.input, { margin: 10 }]}
        onChangeText={(name) => {
          inputNameHandler(name);
        }}
        placeholder="Please enter your name"
        maxLength={10}
      />


      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.button, { margin: 12 }]}>
          <Text style={styles.textButton}>Start</Text>
        </View>
      </TouchableWithoutFeedback>

      <Modal transparent={true} visible={modalVisible}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View style={styles.modalView}>
            <Icon
              onPress={() => {
                setModalVisible(false);
              }}
              style={styles.icon}
              name="close"
              size={25}
            />
            <Text style={{ margin: 4 }}>your game code is:{" "}<Text style={{ fontWeight: "bold" }}>{gameCode}</Text></Text>
            <TouchableHighlight
              onPress={() => {
                setModalVisible(false);
                navigation.navigate("Main", {
                  numberOfPlayers: totalPlayers,
                });
              }}
              style={styles.modalButton}
            >
              <Text>Start game</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    top: 10,
    borderRadius: 10,
  },
  input: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#e0ffff",
    height: 50,
    width: 300,
    border: "2px solid black",
  },

  textButton: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  button: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#e0ffff",
    height: 50,
    width: 150,
    border: "2px solid black",
  },
  pickerStyle: {
    height: 30,
    width: 50,
    borderRadius: 6,
  },
  warningText: {
    color: "red",
    fontSize: 12,
  },
  modalView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0ffff",
    borderRadius: 20,
    borderWidth: 2,
    width: 400,
    height: 180,
  },
  icon: {
    marginTop: -135,
    marginLeft: 4,
    position: "absolute",
    color: "black",
    left: 5,
  },
  modalButton: {
    marginTop: 20,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "white",
    height: 30,
    width: 100,
    border: "2px solid black",
  },
});

export default Start;
