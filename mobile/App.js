import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { View } from "react-native";
import PlayPage from "./screens/PlayPage";
import {Provider} from "react-redux";
import store from "./app/store";

const App = () => {
  return (
      <Provider store={store}>
          <SafeAreaView style={styles.container}>
              {/*<Navigator style={{ flex: 0.1, backgroundColor: "#e0ffff" }} />*/}
              <View style={{height: '80%'}}>
                  <PlayPage />
              </View>
          </SafeAreaView>
      </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "white",
  },
});
export default App;

