import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Modal,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPlayers, setCode, setManagerId } from "../app/game";
const URL = "http://localhost:3000";

function NewGame({ navigation }) {
  const [playerName, setPlayerName] = useState("");
  const [gameCode, setGameCode] = useState("");
  const dispatch = useDispatch();

  const onPress = async () => {
    try {
      const resp = await axios.put(URL + "/Join/" + gameCode, {
        name: playerName,
      });
      // console.log("Join: " + JSON.stringify(resp.data.data));
      dispatch(setPlayers(resp.data.data.players));
      dispatch(setCode(resp.data.data.gameCode));
      dispatch(setManagerId(resp.data.data.managerId));

      navigation.navigate("Main");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setPlayerName}
        placeholder="Please enter your name"
        maxLength={10}
      />
      <TextInput
        style={[styles.input, { margin: 10 }]}
        keyboardType="numeric"
        onChangeText={setGameCode}
        placeholder="Please enter the code game"
        maxLength={10}
      />
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.button, { margin: 12 }]}>
          <Text style={styles.textButton}>continue</Text>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // top: 10,
    // borderRadius: 10,
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

  textButton: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
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
});

export default NewGame;
