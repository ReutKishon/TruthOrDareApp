import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import {Provider, useDispatch} from "react-redux";
import store from "./app/store";
import {NavigationContainer} from "@react-navigation/native";
import Home from "./screens/Home";
import ExistingGame from "./screens/Join";
import Main from "./screens/Main";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {initFakePlayers} from "./app/game";
import Game from "./Game";

const App = () => {
    return (
      <Provider store={store}>
          <Game />
      </Provider>
  );
};


export default App;

