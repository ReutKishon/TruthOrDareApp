import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function NewGame({ navigation }) {
  const [playerName, setPlayerName] = useState("");
  const [displayButton, setDisplayButton] = useState(false);
  const [gameCode, setGameCode] = useState("");
  const [displayWarning, setDisplayWarning] = useState(false);

  const onKeyPress = () => {
    if (gameCode.length === 0) {
      setDisplayButton(false);
      setDisplayWarning(false);
    } else setDisplayButton(true);
  };

  const onPress = () => {
    var reg = /^\d+$/;
    if (reg.test(gameCode)) {
      navigation.navigate("PlayPage", { name: playerName });
    } else setDisplayWarning(true);
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
      <Text
        style={[
          styles.warningText,
          { display: displayWarning ? "block" : "none" },
        ]}
      >
        Code should only consists with digits!
      </Text>

      <TouchableWithoutFeedback onPress={onPress}>
        <View
          style={[
            styles.button,
            { margin: 12, display: displayButton ? "block" : "none" },
          ]}
        >
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
  warningText: {
    color: "red",
    fontSize: 12,
  },
});

export default NewGame;
