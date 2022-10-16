import React from "react";
import { Provider } from "react-redux";
import store from "./src/app/store";
import Game from "./src/Game";
import AskedWindow from "./src/components/AskedWindow";
import Home from "./src/screens/Home";
import Header from "./src/components/Header";

const App = () => {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  );
};

export default App;
