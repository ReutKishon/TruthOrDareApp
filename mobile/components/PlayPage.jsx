import React, {useState} from "react";
import {Text, View, StyleSheet} from "react-native";
import Player from "./Player";
import Bottle from "./Bottle";

const initialArr = [{ID: "", Name: ""}];

function PlayPage({navigation}) {
    const [players, setPlayers] = useState(initialArr);
    const [numberOfPlayers, setNumberOfPlayers] = useState(
        5
    );

    function degToRad(deg) {
        return deg * Math.PI / 180;
    }

    let result = [];
    let angleIncrease = 360 / numberOfPlayers;
    let angle = 0;
    for (let i = 0; i < numberOfPlayers; i++) {
        angle = degToRad(i * angleIncrease);
        const x = Math.cos(angle)*100;
        const y = Math.sin(angle) * 100;

        console.log(`angle: ${angle}, x: ${x}, y: ${y}`);
        result.push(
            <View style={{top: y, left: x}}>
                <Player
                    key={i}
                    name="Reut"
                ></Player>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {result}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        alignItems: "center",
        placeContent: 'center',
        width: '100%',
        height: '100%',
    }
});
export default PlayPage;
