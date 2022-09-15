import React, {useEffect, useRef, useState} from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import {radToDeg} from "../utils";
import {useSelector} from "react-redux";
import {useAppSelector} from "../app/hooks";

function Player({ name, sizeFactor }) {

  const originalSize = sizeFactor
  const [iconSize, setIconSize] = useState(sizeFactor)
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
    },
    imageStyle: {
      height: iconSize,
      width: iconSize,
    },
    viewTextStyle: {
      position: "absolute",
      alignItems: "center",
      justifyContent: "center",
    },
    textStyle: {
      fontSize: 10,
    },
  });

  const componentElementRef = useRef(null);

  const bottleCoordinates = useAppSelector(state => state.game.bottleCoordinates)
  const bottleAngle = useAppSelector(state => state.game.bottleAngle)

  useEffect(() => {
    if (componentElementRef && bottleCoordinates) {
      console.log(bottleCoordinates)
      const bottleXY = {...bottleCoordinates}
      componentElementRef.current.measure((width, height, px, py, fx, fy) => {
        const delta_x = bottleXY.x -fx
        const delta_y = bottleXY.y -fy
        const theta_radians = Math.atan2(delta_y, delta_x)
        const theta_degrees = (radToDeg(theta_radians) + 262) % 360
        console.log(`${name} theta_degrees: ${theta_degrees}, bottleAngle: ${bottleAngle}`)
        console.log(`${name} bottleCoordinates: ${JSON.stringify(bottleCoordinates)}`)
        if (Math.abs(bottleAngle - theta_degrees) < 30) {
          setIconSize(originalSize*1.1);
          console.log(`Player ${name} is hit ${sizeFactor}`)
        } else {
          setIconSize(originalSize);
        }
      })
    }
  },[bottleCoordinates, bottleAngle])

  return (
    <View style={[styles.container]} ref={componentElementRef} >
      <Animated.Image
        style={styles.imageStyle}
        source={require("../assets/bottle-cap.png")}
      ></Animated.Image>
      <View style={styles.viewTextStyle}>
        <Text style={styles.textStyle}>{name}</Text>
      </View>
    </View>
  );
}


export default Player;
