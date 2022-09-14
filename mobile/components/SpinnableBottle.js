import React, { useRef } from "react";
import { Animated, PanResponder, StyleSheet, View } from "react-native";

const DraggableView = ({ size = 250 }) => {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    box: {
      backgroundColor: "#61dafb",
      width: 80,
      height: 80,
      borderRadius: 4,
    },
    image: {
      height: size,
      width: size,
    },
  });

  const animation = new Animated.Value(0);
  const rotationInfo = animation.interpolate({
    inputRange: [0, 100],
    outputRange: ['0deg', '720deg'],
  });
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      if (gestureState.vx > 0 || gestureState.vy > 0) {
        console.log(gestureState.vx, gestureState.vy);
        Animated.spring(animation, {
            toValue: 1,
        })
        animation.setValue(50)
      }

    },
    onPanResponderRelease: () => {
      // console.log(pan);
    },
  });

  return (
      <View style={styles.container}>
        <Animated.Image
            source={require("../assets/beer-bottle2.png")}
            {...panResponder.panHandlers}
            style={[styles.image, { transform: [{ rotate: rotationInfo }] }]}
        />
      </View>
  );
};



export default DraggableView;