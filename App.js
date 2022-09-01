import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import RegisterPage from "./components/RegisterPage";
import Bottle from "./components/Bottle";
import Header from "./components/Header";
import CreateGame from "./components/CreateGame";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Header /> */}
      {/* <Bottle /> */}

      {/* <RegisterPage /> */}
      <CreateGame />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#00bfff",
    justifyContent: "space-between",
  },
});
export default App;

// //1. need to control the bottle movement with the finger
// // 2. stop the bottle according to the speed.
// //Depending on the speed of rotating the bottle , if the speed is very low (determining low speed is needed)
// // the random function will take from the left users that near to the starting point.
