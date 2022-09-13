import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Player from "./Player";
import Bottle from "./Bottle";

const initialArr = [{ ID: "", Name: "" }];
function PlayPage({ navigation }) {
  const [players, setPlayers] = useState(initialArr);
  const [numberOfPlayers, setNumberOfPlayers] = useState(
    navigation.getParam("numberOfPlayers")
  );

  let result = [];
  let angle = (2 * Math.PI) / numberOfPlayers;

  for (let i = 0; i < numberOfPlayers; i++) {
    let new_angle = angle * i;
    let x = Math.cos(new_angle) * 250;
    let y = Math.sin(new_angle) * 250;
    let top = y - 150 + "px";
    let left = x - 150 + "px";
    result.push(
      <View key={i.toString()}>
        <Player name="Reut" topPosition={top} leftPosition={left}></Player>
      </View>
    );
  }

  return (
    <View>
      <View style={styles.bottleStyle}>
        <Bottle />
      </View>
      <View style={styles.playersCircleStyle}>{result}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  playersCircleStyle: {
    flex: 1,
    alignItems: "center",
    left: 80,
    top: 400,
  },
  bottleStyle: {
    flex: 1,
    alignItems: "center",
    left: 30,
    top: 320,
  },
});
export default PlayPage;

// Database contains game objects
//Game: {id (gameCode) , maxNumberOfPlayers , players(array of Strings )-names of players) }
//1. create a new game: Add a row to the database with random code , maxNumberOfPlayers , array with the name of the game creator.
//2. join a game - Update the corresponding game with the given code : add this player's name to the players array.
//3. Everytime a player joins - it updates the creator how many players are already in.
//4. when the creator of the game wants to start the game - the program sends the players array to the playPage.
//5. The creator has an option to finish the game. when the game is finished - remove the game from the database.
//6. Each player has the option to quit the game - the number of players needs to be updated.
//7. If the creator wants to leave - what should happen? (maybe move the 'creator' title to someone else)
//8. Who has the permission to rotate the bottle? maybe only the creator?
//9. User object is needed?
//10. Extra - when two players are choosen - a message will pop up only in their phones , for the player who has the asking role - suggest truth or dare
// questions and missions.
