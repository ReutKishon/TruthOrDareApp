import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import PlayerIcon from "../components/PlayerIcon";
import Bottle from "../components/Bottle";
import { degToRad, isWeb } from "../utils";
import { useAppSelector } from "../app/hooks";

function Main() {
  const players = useAppSelector((state) => state.game.players);

  let playerComponents = [];
  let angleIncrease = 360 / Object.keys(players).length;
  const playerIconSize = isWeb() ? 200 : 100;
  const spaceFactor = isWeb() ? 300 : 140;

  for (let i = 0; i < Object.keys(players).length; i++) {
    const angle = degToRad(i * angleIncrease);
    const x = Math.cos(angle) * spaceFactor;
    const y = Math.sin(angle) * spaceFactor;

    playerComponents.push(
      <View style={{ top: y, left: x }} key={i}>
        <PlayerIcon info={players[i]} sizeFactor={playerIconSize}></PlayerIcon>
      </View>
    );
  }

  return (
    <View style={styles.container}>
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

export default Main;
