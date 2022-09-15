import React, {useEffect, useRef, useState} from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import {radToDeg} from "../utils";

function Player({ name, sizeFactor }) {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
    },
    imageStyle: {
      height: sizeFactor,
      width: sizeFactor,
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

  const ref = useRef();
  ref.current = {}

  useEffect(() => {
    if (ref.current._ref) {
      ref.current._ref.measure((width, height, px, py, fx, fy) => {
        console.log(`${name} x: ${fx}, y: ${fy} angle:${radToDeg(Math.atan(fy/fx))} `)
      })
    }


  },[])

  return (
    <View style={[styles.container]} ref={(r) => { ref.current._ref = r;} } >
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
