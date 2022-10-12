import React, { useState, useRef, useEffect } from "react";
import { SafeAreaView, StyleSheet, TextInput, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import axios from "axios";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { setGame } from "../app/game";
import { socket, URL } from "../socket";
import NextButton from "../shared/button";
function NewGame({ navigation }) {
  const [playerName, setPlayerName] = useState("");
  const [gameCode, setGameCode] = useState("");
  const nameInputRef = useRef(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    nameInputRef.current.focus();
  });

  const onPress = async () => {
    try {
      const { data } = await axios.put(URL + "/Join/" + gameCode, {
        name: playerName,
      });
      console.log(data);
      socket.emit("updateGame", data.game);

      navigation.navigate("Main");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        ref={nameInputRef}
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
      <View style={{ margin: 12 }}>
        <NextButton
          text="start"
          size={{ width: 150, height: 50 }}
          onPress={onPress}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
