import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import NextButton from "../shared/button";
export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}></View>
      <View style={{ flex: 2 }}>
        <View style={{ margin: 6 }}>
          <NextButton
            text="New game"
            size={{ width: 200, height: 50 }}
            onPress={() => {
              navigation.navigate("Start");
            }}
          />
        </View>
        <View style={{ margin: 6 }}>
          <NextButton
            text="Join game"
            size={{ width: 200, height: 50 }}
            onPress={() => {
              navigation.navigate("Join");
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
