import React, {useEffect, useState} from "react";
import {Text, View, StyleSheet, Dimensions, Button, Pressable} from "react-native";
import Player from "../components/Player";
import Bottle from "../components/Bottle";
import {useDispatch, useSelector} from "react-redux";
import {initFakePlayers} from "../app/game";
import {degToRad, isWeb} from "../utils";
import {useAppSelector} from "../app/hooks";


function Main() {
    const dispatch = useDispatch()
    dispatch(initFakePlayers())

    const players = useAppSelector(state => state.game.players)

    let playerComponents = [];
    let angleIncrease = 360 / players.length;

    const playerSizeFactor = isWeb() ? 200 : 100;
    const [playerIconSizes, setPlayerIconSizes] = useState(players.map(() => playerSizeFactor))

    const spaceFactor = isWeb() ? 300 : 130;

    for (let i = 0; i < players.length; i++) {
        const angle = degToRad(i * angleIncrease);
        const x = Math.cos(angle) * spaceFactor;
        const y = Math.sin(angle) * spaceFactor;

        playerComponents.push(
            <View style={{top: y, left: x}} key={i}>
                <Player
                    sizeFactor={playerIconSizes[i]}
                    name={`Player ${i}`}
                ></Player>
            </View>
        );
    }

    useEffect(() => {


    },[])

    return (
        <View style={styles.container}>
            <View style={styles.playersCircle}>
                {playerComponents}
            </View>
            <View style={styles.bottle}>
                <Bottle size={styles.bottle.size}/>
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
    }
});
export default Main;
