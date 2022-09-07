import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Player from "./Player";
import Bottle from "./Bottle";

const initialArr = [{ ID: "", Name: "" }];
function PlayPage({ navigation }) {
  const [players, setPlayers] = useState(initialArr);

  return (
    <View style={styles.container}>
      {/* <Player name={navigation.getParam("name")} /> */}
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


// Database contains game objects
//Game: {id (gameCode) , maxNumberOfPlayers , players(array of Strings )-names of players) }
// create a new game: Add a row to the database with random code , maxNumberOfPlayers , array with the name of the game creator.
// join a game - Update the corresponding game with the given code : add this player's name to the players array.
//Everytime a player joins - it updates the creator how many players are already in.
//when  the creator of the game wants to start the game - the program sends the players array to the playPage.
// the creator has an option to finish the game. when the game is finished - remove the game from the database.
//Each player has the option to quit the game - the number of players needs to be updated. 
// If the creator wants to leave - what should happen? (maybe move the 'creator' title to someone else)
// Who has the permission to rotate the bottle? maybe only the creator?