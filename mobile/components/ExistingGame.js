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
import Header from "./Header";
import Icon from "react-native-vector-icons/AntDesign";

function NewGame({ navigation }) {
  const [playerName, setPlayerName] = useState("");
  const [gameCode, setGameCode] = useState("");
  const [emptyFieldWarning, setEmptyFieldWarning] = useState(false);
  const [syntaxWarning, setSyntaxWarning] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const onPress = () => {
    var reg = /^\d+$/;

    if (playerName.length === 0 || gameCode.length === 0) {
      setEmptyFieldWarning(true);
    } else if (!reg.test(gameCode)) {
      setSyntaxWarning(true);
    } else setModalVisible(true);
  };

  const inputNameHandler = (name) => {
    if (emptyFieldWarning && gameCode.length != 0) setEmptyFieldWarning(false);
    setPlayerName(name);
  };

  const inputCodeHandler = (code) => {
    if (emptyFieldWarning && playerName.length != 0)
      setEmptyFieldWarning(false);
    setSyntaxWarning(false);
    setGameCode(code);
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
        style={styles.input}
        onChangeText={(name) => {
          inputNameHandler(name);
        }}
        placeholder="Please enter your name"
        maxLength={10}
      />
      <TextInput
        style={[styles.input, { margin: 10 }]}
        keyboardType="numeric"
        onChangeText={(code) => {
          inputCodeHandler(code);
        }}
        placeholder="Please enter the code game"
        maxLength={10}
      />
      <Text
        style={[
          styles.warningText,
          { display: syntaxWarning ? "block" : "none" },
        ]}
      >
        Code should only consists with digits!
      </Text>
      <Text
        style={[
          styles.warningText,
          { display: emptyFieldWarning ? "block" : "none" },
        ]}
      >
        One of the fields is empty!
      </Text>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.button, { margin: 12 }]}>
          <Text style={styles.textButton}>continue</Text>
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
              Waiting for the manager to start the game...
            </Text>
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
    fontWeight: "bold",
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
