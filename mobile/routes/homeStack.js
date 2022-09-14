import { createStackNavigator } from "react-navigation-stack";
import React, { Component } from "react";

import { createAppContainer } from "react-navigation";
import App from "../App";
import Home from "../screens/Home";
import NewGame from "../screens/NewGame";
import ExistingGame from "../components/ExistingGame";
import PlayPage from "../screens/PlayPage";
import Player from "../components/Player";
import Header from "../components/Header";
const screens = {
  Home: {
    screen: Home,
  },
  ExistingGame: {
    screen: ExistingGame,
  },
  NewGame: {
    screen: NewGame,
  },
  PlayPage: {
    screen: PlayPage,
  },

  Player: {
    screen: Player,
  },
};
const homeStack = createStackNavigator(screens);

export default createAppContainer(homeStack);
