import React, { useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Modal,
  TouchableHighlight,
  Dimensions,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/AntDesign";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setGame } from "../app/game";
import NextButton from "../shared/button";
import QuestionMark from "../components/Questionmark";
const dimensions = Dimensions.get("window");

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
      const { data } = await axios.post(URL + "/Start", {
        name: playerName,
      });
      dispatch(setGame(data.game));
    } catch (error) {
      console.log(error.response);
    }

    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}></View>

      {new Array(100).fill(true).map((_, i) => (
        <QuestionMark key={i} scene={dimensions} />
      ))}
      <View style={{ flex: 2, alignItems: "center" }}>
        <TextInput
          ref={nameInputRef}
          style={[styles.input, { margin: 10 }]}
          onChangeText={setPlayerName}
          placeholder="Please enter your name"
          maxLength={10}
        />

        <View style={{ padding: 20 }}>
          <NextButton
            text="start"
            size={{ width: 250, height: 50 }}
            onPress={startGame}
          />
        </View>
      </View>

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
              <Text style={{ fontWeight: "bold" }}>{game.code}</Text>
            </Text>
            <TouchableHighlight
              onPress={() => {
                setModalVisible(false);
                navigation.navigate("Main");
              }}
              style={styles.modalButton}
            >
              <Text style={{ fontWeight: "bold", color: "white" }}>
                Start game
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  input: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#F0F0F0",
    height: 50,
    width: 250,
    border: "2px solid black",
  },

  modalView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    borderRadius: 20,
    borderWidth: 2,
    width: 280,
    height: 100,
  },
  icon: {
    marginTop: -65,
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
    backgroundColor: "red",
    height: 30,
    width: 100,
    border: "2px solid black",
  },
});

export default Start;
