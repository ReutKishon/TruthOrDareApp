import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

const top = 50;
const left = 30;
const right = 30;

const HelloWorldApp = (props) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello, {props.name}!</Text>
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("./photos/beer-bottle2.png")}
      />
      <Circle></Circle>
    </View>
  );
};

const Circle = () => {
  return <View style={styles.circle} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 300,
    width: 300,
    transform: [{ rotate: "90deg" }],
  },
  circle: {
    top: top,
    right: right,
    left: left,
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: "yellow",
  },
});

export default App;
