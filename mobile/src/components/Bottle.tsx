import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Animated, PanResponder } from "react-native";
import throttle from "lodash.throttle";

import { useAppDispatch } from "../app/hooks";
import {
  setBottleCoordinates,
  setBottleAngle,
  setBottleRotation,
} from "../app/game";
import { isWeb } from "../utils";
const BOTTLE_SIZE = isWeb() ? 400 : 250;

function setupSpinabilty(rotationAnimation: Animated.Value | Animated.ValueXY) {
  let spinning = false;
  const [idle, setIdle] = useState(true);
  const responder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      setIdle(false);
      // if (gestureState.vy !== 0 && !spinning) {
      //     const speedWeight = 2 * (gestureState.x0 < BOTTLE_SIZE ? -1 : 1);
      //     rotationAnimation.setValue((rotationAnimation as any)._value + (speedWeight * gestureState.vy));
      // }
    },
    onPanResponderRelease: (event, gestureState) => {
      spinning = true;
      Animated.sequence([
        Animated.decay(rotationAnimation, {
          velocity: gestureState.vy * 0.1,
          deceleration: 0.9996,
          useNativeDriver: true,
        }),
      ]).start(() => (spinning = false));
    },
  });

  return { responder, idle };
}

function setupBottleLocator() {
  const dispatch = useAppDispatch();
  const bottleImageRef = useRef(null);
  useEffect(() => {
    if (bottleImageRef) {
      setTimeout(
        () =>
          bottleImageRef.current.measure((width, height, px, py, fx, fy) => {
            dispatch(setBottleCoordinates({ x: fx, y: fy }));
          }),
        0
      );
    }
  }, []);
  return bottleImageRef;
}

function setupRotationAnimation() {
  const dispatch = useAppDispatch();
  const rotationAnimation = new Animated.Value(Math.random() * 50);
  const rotationInfo = rotationAnimation.interpolate({
    inputRange: [-100, 0, 100],
    outputRange: ["-360deg", "0deg", "360deg"],
  });

  rotationAnimation.addListener(
    throttle(({ value }) => {
      let angle = ((value % 100) / 100) * 360;
      angle = angle < 0 ? 360 + angle : angle;
      dispatch(setBottleAngle(angle));
      dispatch(setBottleRotation(value));
    }, 50)
  );
  return { rotationAnimation, rotationInfo };
}

const setupIdleAnimation = (idle) => {
  const bottleIdleAnimation = new Animated.Value(1);
  Animated.loop(
    Animated.sequence([
      Animated.spring(bottleIdleAnimation, {
        toValue: 1.05,
        speed: 10,
        bounciness: 20,
        useNativeDriver: true,
      }),
      Animated.spring(bottleIdleAnimation, {
        toValue: 1,
        bounciness: 0,
        useNativeDriver: true,
      }),
    ])
  ).start();

  useEffect(() => {
    if (!idle) {
      bottleIdleAnimation.stopAnimation();
    }
  }, [idle]);

  return bottleIdleAnimation;
};

export default function Bottle(props) {
  const bottleRef = setupBottleLocator();
  const { rotationAnimation, rotationInfo } = setupRotationAnimation();
  const { responder: spinResponder, idle } = setupSpinabilty(rotationAnimation);
  const bottleIdleAnimation = setupIdleAnimation(idle);

  return (
    <Animated.Image
      ref={bottleRef}
      {...spinResponder.panHandlers}
      style={[
        styles(props).image,
        {
          transform: [{ rotate: rotationInfo }, { scale: bottleIdleAnimation }],
        },
      ]}
      source={require("../../assets/bottles/beer.png")}
    ></Animated.Image>
  );
}

const styles = ({ size }) =>
  StyleSheet.create({
    image: {
      height: size,
      width: size,
    },
  });
