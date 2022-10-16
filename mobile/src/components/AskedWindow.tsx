import React, { useState } from "react";
import {
  TouchableHighlight,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Easing,
} from "react-native";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setAskedChoice } from "../app/game";

function TruthorDareSelection() {
  const [choice, setChoice] = useState(null);
  const dispatch = useAppDispatch();
  let truthScaleValue = new Animated.Value(0);
  let dareScaleValue = new Animated.Value(0);

  const truthScale = truthScaleValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.2],
  });
  const dareScale = dareScaleValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.2],
  });
  let truthStyle = {
    ...styles.button,
    transform: [{ scale: truthScale }],
  };
  let dareStyle = {
    ...styles.button,
    transform: [{ scale: dareScale }],
  };

  const onPressIn = (scaleValue: Animated.Value) => {
    scaleValue.setValue(0);
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 50,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };
  const onPressOut = (scaleValue: Animated.Value) => {
    Animated.timing(scaleValue, {
      toValue: 0,
      duration: 50,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <TouchableWithoutFeedback
          onPress={() => {
            setChoice(0);
          }}
          onPressIn={() => {
            onPressIn(truthScaleValue);
          }}
          onPressOut={() => {
            onPressOut(truthScaleValue);
          }}
        >
          <Animated.View style={truthStyle}>
            <Text style={styles.text}>TRUTH</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            setChoice(1);
          }}
          onPressIn={() => {
            onPressIn(dareScaleValue);
          }}
          onPressOut={() => {
            onPressOut(dareScaleValue);
          }}
        >
          <Animated.View style={[dareStyle, { marginLeft: 10 }]}>
            <Text style={styles.text}>DARE</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
      <TouchableHighlight
        onPress={() => {
          dispatch(setAskedChoice(choice));
        }}
        style={[
          styles.button,
          {
            marginTop: 50,
            width: 90,
            borderRadius: 30,
            // backgroundColor: "white",
          },
        ]}
      >
        <Text style={styles.text}>Ok</Text>
      </TouchableHighlight>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "black",
    width: 130,
    height: 50,
  },
  text: {
    textAlign: "center",
    marginVertical: "center",
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
export default TruthorDareSelection;
