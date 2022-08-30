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

export default function Bottle() {
  // atan2(y2 - y1, x2 - x1) * 180 / PI

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
        source={require("/home/reut/truth-or-dare-app/assets/beer-bottle2.png")}
      ></Animated.Image>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 250,
    width: 250,
  },
});
