import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import App from "../App";
import RegisterPage from "../components/RegisterPage";
const screens = {
  RegisterPage: {
    screen: RegisterPage,
  },
};
const homeStack = createStackNavigator(screens);

export default createAppContainer(homeStack);
