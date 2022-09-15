import React, {useEffect, useRef} from "react";
import {
  StyleSheet,
  Animated,
  PanResponder,
} from "react-native";
import throttle from "lodash.throttle";

import {useDispatch, useSelector} from "react-redux";
import {putBottleCoordinates, setBottleAngle, setBottleRotation} from "../app/game";
import {isWeb} from "../utils";

export default function Bottle({ size = 250 }) {
  const dispatch = useDispatch()
  const ref = useRef();
  ref.current = {};

  const styles = StyleSheet.create({
    image: {
      height: size,
      width: size,
    },
  });

  useEffect(() => {
    if (ref.current._ref) {
      setTimeout( () => ref.current._ref.measure((width, height, px, py, fx, fy) => {
        dispatch(putBottleCoordinates({x: fx, y: fy}))
      }),0)
    }
    rotationAnimation.addListener(throttle(({ value }) => {
      dispatch(setBottleAngle(((value%100)/100)*360))
      dispatch(setBottleRotation(value))
    }, 50))
  }, [])

  // Spinner
  const rotationAnimation = new Animated.Value(0);
  const BOTTLE_SIZE = isWeb()? 400 : 200;

  let spinning = false
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      if (gestureState.vy !== 0 && !spinning) {
        const speedWeight = 2 * (gestureState.x0 < BOTTLE_SIZE ? -1 : 1);
        rotationAnimation.setValue(rotationAnimation._value + (speedWeight * gestureState.vy));
      }
    },
    onPanResponderRelease: (event, gestureState) => {
      spinning = true
      Animated.sequence([
        Animated.decay(rotationAnimation, {
          velocity: gestureState.vy * 0.1,
          deceleration: 0.9996,
          useNativeDriver: true,
        })
      ]).start(() => spinning = false)
    },
  });

  const rotationInfo = rotationAnimation.interpolate({
    inputRange: [0, 100],
    outputRange: ['0deg', '360deg'],
  });

  return (
      <Animated.Image
          ref={(r) => { ref.current._ref = r;} }
          {...panResponder.panHandlers}
          style={[styles.image, { transform: [{ rotate: rotationInfo }] }]}
        source={require("../assets/beer-bottle2.png")}
      ></Animated.Image>
  );
}
