import React, {useState} from "react";
import {Text, View, StyleSheet, Dimensions} from "react-native";
import Player from "./Player";
import Bottle from "./Bottle";

const initialArr = [{ID: "", Name: ""}];
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
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
    console.log(`dimensions: ${windowWidth} ${windowHeight}`);

    const spaceFactor = windowHeight / (0.8* numberOfPlayers);
    const playSizeFactor = 0.8 * spaceFactor;
    for (let i = 0; i < numberOfPlayers; i++) {
        angle = degToRad(i * angleIncrease);
        const x = Math.cos(angle) * spaceFactor - spaceFactor / 2;
        const y = Math.sin(angle) * spaceFactor;

        console.log(`angle: ${angle}, x: ${x}, y: ${y}`);
        result.push(
            <View style={{top: y, left: x}}>
                <Player
                    sizeFactor={playSizeFactor}
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
        alignItems: "center",
        justifyContent: "center",
    }
});
export default PlayPage;
