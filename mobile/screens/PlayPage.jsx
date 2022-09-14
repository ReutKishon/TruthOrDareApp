import React, {useState} from "react";
import {Text, View, StyleSheet, Dimensions} from "react-native";
import Player from "../components/Player";
import Bottle from "../components/Bottle";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
console.log(`dimensions: ${windowWidth} ${windowHeight}`);

function isWeb() {
    return windowHeight / windowWidth < 1;
}

function PlayPage({navigation}) {
    const [numberOfPlayers, setNumberOfPlayers] = useState(13);

    function degToRad(deg) {
        return deg * Math.PI / 180;
    }

    let result = [];
    let angleIncrease = 360 / numberOfPlayers;
    let angle = 0;

    const playSizeFactor = isWeb() ? 200 : 100;
    const spaceFactor = isWeb() ? 300 : 130;

    for (let i = 0; i < numberOfPlayers; i++) {
        angle = degToRad(i * angleIncrease);
        const x = Math.cos(angle) * spaceFactor;
        const y = Math.sin(angle) * spaceFactor;

        result.push(
            <View style={{top: y, left: x}}>
                <Player
                    sizeFactor={playSizeFactor}
                    key={i}
                    name={`Player ${i}`}
                ></Player>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.playersCircle}>
                {result}
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
        size: isWeb()? 300: 150,
    }
});
export default PlayPage;
