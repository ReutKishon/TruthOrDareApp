import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
} from "react-native";


export default function RegisterPage() {
  return (
    <View style={styles.container}>
      <TouchableHighlight>
        <View style={styles.button}>
          <Text style={styles.text}>New game</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight>
        <View style={styles.button}>
          <Text style={styles.text} s>
            Play
          </Text>
        </View>
      </TouchableHighlight>
    </View>
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
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    margin: 6,
    backgroundColor: "#e0ffff",
    height: 50,
    width: 200,
    border: "2px solid black",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
    fontWeight: "bold",
  },
});
