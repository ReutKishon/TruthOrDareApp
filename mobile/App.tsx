import React from "react";
import { Provider } from "react-redux";
import store from "./src/app/store";
import Game from "./src/Game";


const App = () => {
  return (
    <Provider store={store}>

      <Game />
    </Provider>
  );
};

export default App;
