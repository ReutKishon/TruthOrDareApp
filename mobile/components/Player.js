import React, { useState } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";

function Player({ name, topPosition, leftPosition }) {
  return (
    <View style={[styles.container, { top: topPosition, left: leftPosition }]}>
      <Animated.Image
        style={styles.imageStyle}
        source={require("../assets/bottle-cap.png")}
      ></Animated.Image>
      <View style={styles.viewTextStyle}>
        <Text style={styles.textStyle}>{name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  imageStyle: {
    height: 150,
    width: 150,
  },
  viewTextStyle: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 20,
  },
});
export default Player;
