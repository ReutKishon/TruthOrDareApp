import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import Header from "../components/Header";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Header />
      </View>

        <View style={{flex: 2}}>
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


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
