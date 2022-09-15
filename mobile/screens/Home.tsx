import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import Header from "../components/Header";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          top: -100,
        }}
      >
        <Header />
      </View>

      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate("Start");
        }}
      >
        <View style={styles.button}>
          <Text style={styles.text}>New game</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate("Join");
        }}
      >
        <View style={styles.button}>
          <Text style={styles.text} >
            Join
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    top: -50,
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
    letterSpacing: 0.25,
    color: "black",
    fontWeight: "bold",
  },
});
