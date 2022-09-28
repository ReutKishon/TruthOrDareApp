import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PlayerIcon from "../components/PlayerIcon";
import Bottle from "../components/Bottle";
import { degToRad, isWeb } from "../utils";
import { useAppSelector } from "../app/hooks";
import { areObjectsEqual } from "../utils";
function Main() {
  let game = useAppSelector((state) => state.game);
  const players = game.players;

  let angleIncrease = 360 / Object.keys(players).length;
  const playerIconSize = isWeb() ? 200 : 80;
  const spaceFactor = isWeb() ? 300 : 120;

  const playerComponents = Object.keys(players).map((playerId, index) => {
    const angle = degToRad(index * angleIncrease);
    const x = Math.cos(angle) * spaceFactor;
    const y = Math.sin(angle) * spaceFactor;

    return <View style={{ top: y, left: x }} key={index}>
      <PlayerIcon info={players[playerId]} sizeFactor={playerIconSize}></PlayerIcon>
    </View>
  });


  return (
    <View style={styles.container}>
      <Text>{Object.keys(players).length}</Text>
      <View style={styles.playersCircle}>{playerComponents}</View>
      <View style={styles.bottle}>
        <Bottle size={styles.bottle.size} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  playersCircle: {
    position: "absolute",
    top: isWeb() ? 350 : 300,
    left: isWeb() ? 350 : 150,
  },
  bottle: {
    position: "absolute",
    top: isWeb() ? 300 : 280,
    left: isWeb() ? 300 : 125,
    size: isWeb() ? 300 : 150,
  },
});
// function mapStateToProps(
//   state: { players: { [key: number]: Player } },
//   ownProps: any
// ) {
//   return {
//     players: state.players,
//   };
// }
export default Main;
