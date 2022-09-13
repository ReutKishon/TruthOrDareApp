import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Picker,
  Modal,
  TouchableHighlight,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Header from "./Header";
import Icon from "react-native-vector-icons/AntDesign";

function NewGame({ navigation }) {
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
      <Text
        style={[
          styles.warningText,
          { display: emptyFieldWarning ? "block" : "none" },
        ]}
      >
        The field is empty!
      </Text>
      <form style={{ marginTop: 15, marginBottom: 10 }}>
        <label>
          <Text style={{ fontSize: 20 }}>Select number of players</Text>: &ensp;
          <Picker
            selectedValue={totalPlayers}
            style={styles.pickerStyle}
            onValueChange={(itemValue, itemIndex) => setTotalPlayers(itemValue)}
          >
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
            <Picker.Item label="6" value="6" />
            <Picker.Item label="7" value="7" />
            <Picker.Item label="8" value="8" />
            <Picker.Item label="9" value="9" />
            <Picker.Item label="10" value="10" />
          </Picker>
        </label>
      </form>

      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.button, { margin: 12 }]}>
          <Text style={styles.textButton}>go</Text>
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
              <Text style={{ fontWeight: "bold" }}>{gameCode}</Text>{" "}
            </Text>
            <Text>1 / {totalPlayers} are joined</Text>
            <TouchableHighlight
              onPress={() => {
                setModalVisible(false);
                navigation.navigate("PlayPage", {
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
    borderRadius: 10,
    height: 30,
    width: 100,
    border: "2px solid black",
  },
});

export default NewGame;
