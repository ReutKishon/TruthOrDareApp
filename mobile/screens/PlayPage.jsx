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
    const centerFactor = isWeb() ? 400 : 55;
    for (let i = 0; i < numberOfPlayers; i++) {
        angle = degToRad(i * angleIncrease);
        const x = Math.cos(angle) * spaceFactor - centerFactor;
        const y = Math.sin(angle) * spaceFactor;

        console.log(`angle: ${i * angleIncrease}, x: ${x}, y: ${y}`);
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
