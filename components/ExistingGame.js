import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import GameCodeModal from "./GameCodeModal";

function NewGame({ navigation }) {
  const [playerName, setPlayerName] = useState("");
  const [displayButton, setDisplayButton] = useState(false);
  const [GameCode, setGameCode] = useState("");

  const onKeyPress = () => {
    if (GameCode.length === 0) setDisplayButton(false);
    else setDisplayButton(true);
  };

  const validatGameCode = (gameCode) => {};

  const onPress = (gameCode) => {
    var reg = /^\d+$/;
    if (re.test(gameCode)) {
      navigation.navigate("Home"); //navgate to the play screen
    }
  };

  return (
    // problem: onKeyPress fires before onChangeText
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
        onKeyPress={onKeyPress}
        placeholder="Please enter the code game"
        maxLength={10}
      />

      <TouchableWithoutFeedback>
        <View
          style={[
            styles.button,
            { margin: 12, display: displayButton ? "block" : "none" },
          ]}
        >
          <Text style={styles.text}>continue</Text>
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
    width: 200,
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

  text: {
    marginLeft: 25,
    marginTop: 25,
    marginBottom: 25,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
    fontWeight: "bold",
  },
});

export default NewGame;
