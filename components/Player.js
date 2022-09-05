import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Gestures,
  Easing,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";

function Player({ name }) {
  const [playerName, setPlayerName] = useState(name);

  React.useEffect(() => {
    setPlayerName(name);
  }, [name]);

  return (
    <View style={styles.container}>
      <Animated.Image
        style={styles.imageStyle}
        source={require("/home/reut/truth-or-dare-app/assets/bottle-cap.png")}
      ></Animated.Image>
      <View style={styles.viewTextStyle}>
        <Text style={styles.textStyle}>{playerName}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyle: {
    height: 150,
    width: 150,
  },
  viewTextStyle: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 20,
  },
});
export default Player;
