import React, { useContext, useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Modal,
  TouchableHighlight,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setAskingChoice } from "../app/game";

function TruthDarePopUp({ visible }) {
  const dispatch = useDispatch();

  const options = new Array("Jump on one leg", "Kiss one of the group");

  return (
    <Modal transparent={true} visible={visible}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={styles.modalView}>
          <View style={{ flexDirection: "row" }}>
            <TouchableHighlight
              style={styles.button}
              onPress={() => {
                dispatch(setAskingChoice(options.at(0)));
              }}
            >
              <Text style={styles.textButton}>{options.at(0)}</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.button}
              onPress={() => {
                dispatch(setAskingChoice(options.at(1)));
              }}
            >
              <Text style={styles.textButton}>{options.at(1)}</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  textButton: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },

  modalView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0ffff",
    width: 400,
    height: 180,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 180,
    flex: 1,
    border: "1px solid black",

    backgroundColor: "green",
  },
});
export default TruthDarePopUp;
