import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Animated,
  Easing,
} from "react-native";
import LinearGradient from "../../node_modules/react-native-linear-gradient/common";

export default function NextButton({ text, size, onPress }) {
  const animatedValue = new Animated.Value(0);
  const onPressIn = () => {
    animatedValue.setValue(0);
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 100,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };
  const buttonScale = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.2],
  });
  return (
    <TouchableOpacity
      style={[styles.buttonStyle, { width: size.width, height: size.height }]}
      onPress={onPress}
    >
      <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
        <Text style={styles.textStyle}>{text}</Text>
      </Animated.View>
    </TouchableOpacity>
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
