import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Picker,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import StartGameModal from "./StartGameModal";

function NewGame({ navigation }) {
  const [playerName, setPlayerName] = useState("");
  const [displayButton, setDisplayButton] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [totalPlayers, setTotalPlayers] = useState(2);

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

      <StartGameModal
        visible={modalVisible}
        setParentVisible={setModalVisible}
        total_players={totalPlayers}
        navigation={navigation}
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
  pickerStyle: {
    height: 30,
    width: 50,
    borderRadius: 6,
  },
});

export default NewGame;
