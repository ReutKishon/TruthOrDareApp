import { createStackNavigator } from "react-navigation-stack";
import React, { Component } from "react";

import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import Start from "../screens/Start";
import ExistingGame from "../screens/Join";
import Main from "../screens/Main";
import Player from "../components/Player";
import {createNativeStackNavigator} from "@react-navigation/native-stack";


export const GameNavigator = createNativeStackNavigator();
