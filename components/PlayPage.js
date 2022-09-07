import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Player from "./Player";
import Bottle from "./Bottle";

const initialArr = [{ ID: "", Name: "" }];
function PlayPage({ navigation }) {
  const [players, setPlayers] = useState(initialArr);
  const numberOfPlayers = navigation.getParam("numberOfPlayers");

  return (
    <View style={styles.container}>
      {/* <Player name={navigation.getParam("name")} /> */}
      <Text style={{ fontSize: 50 }}>{numberOfPlayers}</Text>
      {/* <Bottle /> */}
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
