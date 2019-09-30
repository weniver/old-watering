import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import WateringNavigator from "./navigation/WateringNavigator.js";
import Colors from "./constants/Colors.js";

const fetchFonts = () => {
  return Font.loadAsync({
    "Mansalva-Regular": require("./assets/fonts/Mansalva-Regular.ttf"),
    "Raleway-Regular": require("./assets/fonts/Raleway-Regular.ttf")
  });
};

export default function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <AppLoading startAsync={fetchFonts} onFinish={() => setLoading(false)} />
    );
  }

  return <WateringNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  title: {
    fontFamily: "Mansalva-Regular",
    fontSize: 64,
    paddingVertical: 25
  },
  subtitle: {
    fontFamily: "Raleway-Regular",
    fontSize: 24
  },
  row: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
