import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import LinearGradient from "../../node_modules/react-native-linear-gradient/common";

export default function NextButton({ text, size, onPress }) {
  return (
    // <LinearGradient colors={["#4c669f", "#3b5998", "#192f6a"]}>
    <TouchableOpacity
      style={[styles.buttonStyle, { width: size.width, height: size.height }]}
      onPress={onPress}
    >
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
    // </LinearGradient>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "red",
  },
  textStyle: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
