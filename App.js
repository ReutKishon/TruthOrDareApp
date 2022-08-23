import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Easing,
  SafeAreaView,
  TouchableHighlight,
} from "react-native";

const App = () => {
  let rotateValueHolder = new Animated.Value(0);

  const startImageRotationFunction = () => {
    rotateValueHolder.setValue(0);
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => startImageRotationFunction());
  };

  const rotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Animated.Image
          style={[styles.image, { transform: [{ rotate: rotateData }] }]}
          source={require("./photos/beer-bottle2.png")}
        />
        <TouchableHighlight
          onPress={startImageRotationFunction}
          style={styles.buttonStyle}
        >
          <Text style={styles.buttonTextStyle}>
            Start Image Rotate Function
          </Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 300,
    width: 300,
  },
  buttonStyle: {
    fontSize: 16,
    color: "white",
    backgroundColor: "green",
    padding: 5,
    marginTop: 32,
    minWidth: 250,
  },
  buttonTextStyle: {
    padding: 5,
    color: "white",
    textAlign: "center",
  },
});

export default App;
