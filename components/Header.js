import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Header() {
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
    height: 50,
    width: 50,
    transform: [{ rotate: "90deg" }],
  },
  text: {
    fontSize: 30,
    fontFamily: "Rajdhani-Bold",
    marginEnd: 15,
    marginStart: 15,
  },
});
