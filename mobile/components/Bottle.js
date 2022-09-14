import React from "react";
import {
  StyleSheet,
  Easing,
  Animated,
  TouchableWithoutFeedback, PanResponder,
} from "react-native";

export default function Bottle({ size = 250 }) {
  const styles = StyleSheet.create({
    image: {
      height: size,
      width: size,
    },
  });

  const rotationAnimation = new Animated.Value(0);
  let spinning = false

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {

      if (gestureState.vy !== 0 && !spinning) {
        // console.log(gestureState.vy, `x ${gestureState.x0}`);
        const speedWeight = 2 * (gestureState.x0 < 400 ? -1 : 1);
        rotationAnimation.setValue(rotationAnimation._value + (speedWeight * gestureState.vy));
      }
    },
    onPanResponderRelease: (event, gestureState) => {
      spinning = true
      Animated.sequence([
        //   Animated.loop(Animated.timing(rotationAnimation, {
        //     duration: 3000,
        //     easing: Easing.ease,
        //     useNativeDriver: true,
        //     toValue: 100
        //   }))
        // ,
        Animated.decay(rotationAnimation, {
          velocity: gestureState.vy * 0.1,
          deceleration: 0.9996,
          useNativeDriver: true,
        })
      ]).start(() => spinning = false)


    },
  });

  const spin = () => {
    rotationAnimation.setValue(0);
    Animated.timing(rotationAnimation, {
      toValue: 1,
      duration: 800,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => {
    });
  };

  // function generateRandomDegree() {
  //   return Math.floor(Math.random() * 361);
  // }

  const rotationInfo = rotationAnimation.interpolate({
    inputRange: [-100, 0,  100],
    outputRange: ['-360deg', '0deg', '360deg'],
  });

  return (
    // <TouchableWithoutFeedback onPress={spin}>
      <Animated.Image
          {...panResponder.panHandlers}
          style={[styles.image, { transform: [{ rotate: rotationInfo }] }]}
        source={require("../assets/beer-bottle2.png")}
      ></Animated.Image>
    // </TouchableWithoutFeedback>
  );
}
