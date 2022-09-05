import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Player from "./Player";
import Bottle from "./Bottle";
function PlayPage({ navigation }) {
  const [players, setPlayers] = useState(null);
  return (
    <View style={styles.container}>
      <Player name={navigation.getParam("name")} />
      <Bottle />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default PlayPage;
