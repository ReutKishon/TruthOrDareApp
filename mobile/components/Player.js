import React, { useState } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";

function Player({ name, sizeFactor }) {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
    },
    imageStyle: {
      height: sizeFactor,
      width: sizeFactor,
    },
    viewTextStyle: {
      position: "absolute",
      alignItems: "center",
      justifyContent: "center",
    },
    textStyle: {
      fontSize: 10,
    },
  });

  return (
    <View style={[styles.container]}>
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


export default Player;
