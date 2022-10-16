import React, { useEffect } from "react";
import { StyleSheet, View, Animated } from "react-native";

function Header({ top }) {
  let animatedValues = [];
  let content = "Truth or Dare ?";
  const textArr = content.trim().split("");
  textArr.forEach((_, i) => {
    animatedValues[i] = new Animated.Value(0);
  });

  const animated = (toValue = 1) => {
    const animations = textArr.map((_, i) => {
      return Animated.timing(animatedValues[i], {
        toValue,
        duration: 500,
        useNativeDriver: false,
      });
    });
    Animated.stagger(300, animations).start(() => {
      textArr.forEach((_, i) => {
        animatedValues[i].setValue(0);
      });
      animated();
    });
  };

  useEffect(() => {
    animated();
  });

  return (
    <View style={[styles.container, { top: top }]}>
      {textArr.map((word, i) => {
        return (
          <Animated.Text
            key={i}
            style={[
              styles.textStyle,
              {
                opacity: animatedValues[i],
                transform: [
                  {
                    translateY: Animated.multiply(
                      animatedValues[i],
                      new Animated.Value(-5)
                    ),
                  },
                ],
              },
            ]}
          >
            {word}
            {}
          </Animated.Text>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 35,
    fontWeight: "bold",
    fontFamily: "Menlo",
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default Header;
