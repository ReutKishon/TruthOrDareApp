import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import App from "../App";
import Home from "../components/Home";
import NewGame from "../components/NewGame";
import ExistingGame from "../components/ExistingGame";
const screens = {
  ExistingGame: {
    screen: ExistingGame,
  },
  NewGame: {
    screen: NewGame,
  },
  Home: {
    screen: Home,
  },
};
const homeStack = createStackNavigator(screens);

export default createAppContainer(homeStack);
