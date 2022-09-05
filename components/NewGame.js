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
  const [modalVisible, setModalVisible] = useState(false);

  const onKeyPress = () => {
    if (playerName.length === 0) setDisplayButton(false);
    else setDisplayButton(true);
  };

  return (
    // problem: onKeyPress fires before onChangeText
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setPlayerName}
        onKeyPress={onKeyPress}
        placeholder="Please enter your name"
        maxLength={10}
      />

      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <View
          style={[
            styles.button,
            { margin: 12, display: displayButton ? "block" : "none" },
          ]}
        >
          <Text style={styles.textButton}>continue</Text>
        </View>
      </TouchableWithoutFeedback>
      <GameCodeModal
        visible={modalVisible}
        setParentVisible={setModalVisible}
      />
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
});

export default NewGame;
