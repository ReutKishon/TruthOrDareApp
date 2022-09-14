import React, { useRef } from "react";
import {
  StyleSheet,
  // Text,
  View,
  Gestures,
  Easing,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";

export default function Bottle({ size = 250 }) {
  const styles = StyleSheet.create({
    image: {
      height: size,
      width: size,
    },
  });
  const [randomDeg, setRandomDeg] = useState(generateRandomDegree());

  let rotateValueHolder = new Animated.Value(0);

  const startImageRotationFunction = () => {
    rotateValueHolder.setValue(0);
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 4000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => {
      setRandomDeg(generateRandomDegree());
    });
  };

  function generateRandomDegree() {
    return Math.floor(Math.random() * 361);
  }

  const rotateData = rotateValueHolder.interpolate({
    inputRange: [0, 0.5, 0.8, 1],
    outputRange: ["90deg", "450deg", "810deg", 810 + randomDeg + "deg"],
  });

  return (
    <TouchableWithoutFeedback onPress={startImageRotationFunction}>
      <Animated.Image
        style={[styles.image, { transform: [{ rotate: rotateData }] }]}
        source={require("../assets/beer-bottle2.png")}
      ></Animated.Image>
    </TouchableWithoutFeedback>
  );
}
