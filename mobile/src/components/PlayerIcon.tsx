import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import { radToDeg } from "../utils";
import { useAppSelector } from "../app/hooks";
import { Player } from "../app/models";
import { useDispatch } from "react-redux";
// import { setAskedPlayer, setAskingPlayer } from "../app/game";

function PlayerIcon(props: { sizeFactor: number; info: Player }) {
  const dispatch = useDispatch();

  const { sizeFactor: originalSize, info: player } = props;
  const [iconSize, setIconSize] = useState(props.sizeFactor);
  const componentElementRef = useRef(null);
  const bottleCoordinates = useAppSelector(
    (state) => state.game.bottleCoordinates
  );
  const bottleAngle = useAppSelector((state) => state.game.bottleAngle);

  // this logic should sit outside of the component and basically have a view of all players and their positions
  // and check each player if its angle matches the bottle angle
  useEffect(() => {
    if (componentElementRef && bottleCoordinates) {
      // console.log(bottleCoordinates)
      const bottleXY = { ...bottleCoordinates };
      componentElementRef.current.measure((width, height, px, py, fx, fy) => {
        const delta_x = bottleXY.x - fx;
        const delta_y = bottleXY.y - fy;
        const theta_radians = Math.atan2(delta_y, delta_x);
        const theta_degrees = (radToDeg(theta_radians) + 262) % 360;
        // console.log(`${player.name} theta_degrees: ${theta_degrees}, bottleAngle: ${bottleAngle}`)
        // console.log(`${player.name} bottleCoordinates: ${JSON.stringify(bottleCoordinates)}`)
        if (Math.abs(bottleAngle - theta_degrees) < 20) {
          setIconSize(originalSize * 1.1);
          // dispatch(setAskedPlayer(player.id));
        } else if (Math.abs(((bottleAngle + 180) % 360) - theta_degrees) < 20) {
          setIconSize(originalSize);

          // dispatch(setAskingPlayer(player.id));
        } else {
          setIconSize(originalSize);
        }
      });
    }
  }, [bottleCoordinates, bottleAngle]);

  return (
    <View style={[styles(iconSize).container]} ref={componentElementRef}>
      <Animated.View style={styles(iconSize).circle}></Animated.View>

      <View style={styles(iconSize).viewTextStyle}>
        <Text style={styles(iconSize).textStyle}>{player.name}</Text>
      </View>
    </View>
  );
}

const styles = (iconSize) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
    },
    imageStyle: {
      height: iconSize,
      width: iconSize,
    },
    viewTextStyle: {
      position: "absolute",
      alignItems: "center",
      justifyContent: "center",
    },
    textStyle: {
      fontSize: 20,
    },
    circle: {
      justifyContent: "center",
      borderRadius: iconSize / 2,
      backgroundColor: "orange",
      height: iconSize,
      width: iconSize,
      opacity: 0.7,
    },
  });

export default PlayerIcon;
