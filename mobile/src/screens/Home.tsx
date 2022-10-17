import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import Header from "../components/Header";
import QuestionMark from "../components/Questionmark";
import NextButton from "../shared/button";
const dimensions = Dimensions.get("window");

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}></View>
      <View style={{ flex: 2 }}>
       
        {new Array(100).fill(true).map((_, i) => (
          <QuestionMark key={i} scene={dimensions} />
        ))}
         <Header top={-60} />
        <View style={{ margin: 6 }}>
          <NextButton
            text="New game"
            size={{ width: 250, height: 50 }}
            onPress={() => {
              navigation.navigate("Start");
            }}
          />
        </View>
        <View style={{ margin: 6 }}>
          <NextButton
            text="Join game"
            size={{ width: 250, height: 50 }}
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

  text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
    fontWeight: "bold",
  },
});
