import React, { useEffect, useRef, useState } from "react";
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
import Icon from "react-native-vector-icons/AntDesign";
import axios from "axios";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {setGame} from "../app/game";
const URL = "http://localhost:3000";

function Start({ navigation }) {
  const [playerName, setPlayerName] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const nameInputRef = useRef(null);
  const game = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();

  useEffect(() => {
    nameInputRef.current.focus();
  });

  const startGame = async () => {
    try {
      const {data} = await axios.post(URL + "/Start", {
        name: playerName,
      });
      const game = data.game;
      console.log("Start: " + JSON.stringify(game));
      dispatch(setGame(game));
    } catch (error) {
      console.log(error.response);
    }

    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}></View>
      <View style={{ flex: 2, alignItems: "center" }}>
        <TextInput
          ref={nameInputRef}
          style={[styles.input, { margin: 10 }]}
          onChangeText={setPlayerName}
          placeholder="Please enter your name"
          maxLength={10}
        />

        <TouchableWithoutFeedback onPress={startGame}>
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
              <Text style={{ margin: 4 }}>
                your game code is:{" "}
                <Text style={{ fontWeight: "bold" }}>
                  {game.code}
                </Text>
              </Text>
              <TouchableHighlight
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate("Main");
                }}
                style={styles.modalButton}
              >
                <Text>Start game</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
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
