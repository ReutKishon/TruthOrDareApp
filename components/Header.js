import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

export default function Header() {
  const [fontsLoaded] = useFonts({
    "Rajdhani-SemiBold": require("../assets/fonts/Rajdhani-SemiBold.ttf"),
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Truth</Text>
      <Image
        style={styles.image}
        source={require("/home/reut/truth-or-dare-app/assets/beer-bottle2.png")}
      ></Image>
      <Text style={styles.text}>Dare</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 10,
  },
  image: {
    height: 70,
    width: 70,
    transform: [{ rotate: "90deg" }],
  },
  text: {
    fontSize: 60,
    fontFamily: "Rajdhani-SemiBold",
    marginEnd: 15,
    marginStart: 15,
  },
});
