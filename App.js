import React from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import Navigator from "./routes/homeStack";
import Header from "./components/Header";
import Constants from "expo-constants";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      {/* <Bottle /> */}
      {/*  */}
      {/* <RegisterPage /> */}
      {/* <CreateGame /> */}
      <Navigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingTop: Constants.statusBarHeight,
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
