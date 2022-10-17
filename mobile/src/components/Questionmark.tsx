import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Animated, Easing } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
const START_Y_POSITION = -210;
const MARK_TYPES = ["❤️️", "💀"];

export default function QuestionMark({ scene }) {
  const [config, setConfig] = useState(() => getConfig());
  const animatedY = useRef(new Animated.Value(START_Y_POSITION)).current;
  const animatedSwing = useRef(new Animated.Value(0)).current;

  const runAnimation = () => {
    animatedY.setValue(START_Y_POSITION);

    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedSwing, {
          toValue: -1,
          duration: config.swingDuration,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(animatedSwing, {
          toValue: 1,
          duration: config.swingDuration,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();

    Animated.sequence([
      Animated.delay(config.fallDelay),
      Animated.timing(animatedY, {
        toValue: scene.height,
        duration: config.fallDuration,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start(() => {
      const newConfig = getConfig();
      setConfig(newConfig);
    });
  };

  useEffect(() => {
    if (config) {
      runAnimation();
    }
  }, [config]);

  const translateX = animatedSwing.interpolate({
    inputRange: [-1, 1],
    outputRange: [-config.swingAmplitude, config.swingAmplitude],
  });

  return (
    <Animated.Text
      style={[
        styles.question_mark,
        {
          left: config.xPosition,
          fontSize: config.size,
          opacity: config.opacity,
          transform: [{ translateY: animatedY }, { translateX }],
        },
      ]}
    >
      {MARK_TYPES[config.type]}
    </Animated.Text>
  );
}

function getConfig() {
  const size = randomInt(10, 18);
  const opacity = randomInt(4, 10) / 10;
  const xPosition = `${randomInt(0, 100)}%`;
  const type = randomInt(0, 1);
  const fallDuration = randomInt(10000, 30000);
  const fallDelay = randomInt(500, 10000);

  const swingDuration = randomInt(3000, 8000);
  const swingAmplitude = randomInt(0, 30);

  return {
    size,
    opacity,
    xPosition,
    type,
    fallDelay,
    fallDuration,
    swingDuration,
    swingAmplitude,
  };
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const styles = StyleSheet.create({
  question_mark: {
    position: "absolute",
  },
});
