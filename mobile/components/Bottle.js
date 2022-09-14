import React from "react";
import {
  StyleSheet,
  // Text,
  View,
  Gestures,
  Easing,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";

export default function Bottle({size= 250}) {
  const styles = StyleSheet.create({
    image: {
      height: size,
      width: size,
    },
  });
  let rotateValueHolder = new Animated.Value(0);

  const startImageRotationFunction = () => {
    rotateValueHolder.setValue(0);
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };

  const rotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
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


