import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import {Provider} from "react-redux";
import store from "./app/store";
import {NavigationContainer} from "@react-navigation/native";
import {GameNavigator} from "./routes/navigator";
import Home from "./screens/Home";
import Start from "./screens/Start";
import ExistingGame from "./screens/Join";
import Main from "./screens/Main";

const App = () => {
  return (
      <Provider store={store}>
          <SafeAreaView style={styles.container}>
              <NavigationContainer>
                  <GameNavigator.Navigator>
                        <GameNavigator.Screen name="Home" component={Home} />
                        <GameNavigator.Screen name="Start" component={Start} />
                        <GameNavigator.Screen name="Join" component={ExistingGame} />
                        <GameNavigator.Screen name="Main" component={Main} />
                  </GameNavigator.Navigator>
              </NavigationContainer>

          </SafeAreaView>
      </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;

