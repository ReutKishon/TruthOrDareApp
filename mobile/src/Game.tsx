import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Start from "./screens/Start";
import ExistingGame from "./screens/Join";
import Main from "./screens/Main";
import React from "react";
import {SafeAreaView, StyleSheet, Text} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {useAppSelector} from "./app/hooks";

export default function Game() {
  const GameNavigator = createNativeStackNavigator();
    const game = useAppSelector(state => state.game)
  return (
    <SafeAreaView style={styles.container}>
        {/* <Text>{JSON.stringify(game, null, 4)}</Text> */}
      <NavigationContainer
        linking={{
          prefixes: [],
          config: {
            screens: {
              Home: "game",
            },
          },
        }}
      >
        <GameNavigator.Navigator screenOptions={{ headerShown: false }}>
          <GameNavigator.Screen name="Home" component={Home} />
          <GameNavigator.Screen name="Start" component={Start} />
          <GameNavigator.Screen name="Join" component={ExistingGame} />
          <GameNavigator.Screen name="Main" component={Main} />
        </GameNavigator.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
