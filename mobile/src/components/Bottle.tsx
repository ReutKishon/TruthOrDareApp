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
const BOTTLE_SIZE = isWeb()? 400 : 150;

function setupSpinabilty(rotationAnimation) {

    let spinning = false
    return PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (event, gestureState) => {
            if (gestureState.vy !== 0 && !spinning) {
                const speedWeight = 2 * (gestureState.x0 < BOTTLE_SIZE ? -1 : 1);
                rotationAnimation.setValue((rotationAnimation as any)._value + (speedWeight * gestureState.vy));
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
}

function setupBottleLocator() {
    const dispatch = useDispatch()
    const bottleImageRef = useRef(null);
    useEffect(() => {
        if (bottleImageRef) {
            setTimeout( () => bottleImageRef.current.measure((width, height, px, py, fx, fy) => {
                dispatch(putBottleCoordinates({x: fx, y: fy}))
            }),0)
        }
    }, [])
    return bottleImageRef
}

function buildRotationAnimation() {
    const dispatch = useDispatch()
    const rotationAnimation = new Animated.Value(0);
    const rotationInfo = rotationAnimation.interpolate({
        inputRange: [-100, 0, 100],
        outputRange: ['-360deg', '0deg', '360deg'],
    });

    rotationAnimation.addListener(throttle(({ value }) => {
        let angle = ((value%100)/100)*360
        angle = angle < 0 ? 360 + angle : angle
        dispatch(setBottleAngle(angle))
        dispatch(setBottleRotation(value))
    }, 50))
    return {rotationAnimation, rotationInfo};
}

export default function Bottle(props) {
  const bottleRef = setupBottleLocator()
  const {rotationAnimation, rotationInfo} = buildRotationAnimation();
  const spinResponder = setupSpinabilty(rotationAnimation)
  return (
      <Animated.Image
          ref={bottleRef}
          {...spinResponder.panHandlers}
          style={[styles(props).image, { transform: [{ rotate: rotationInfo }] }]}
          source={require("../../assets/beer-bottle2.png")}
      ></Animated.Image>
  );
}

const styles = ({size =250}) => StyleSheet.create({
  image: {
    height: size,
    width: size,
  },
});
