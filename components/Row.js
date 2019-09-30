import React from "react";
import { StyleSheet, View } from "react-native";

const Row = props => (
  <View style={{ ...styles.row, ...props.style }}>{props.children}</View>
);

const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row"
  }
});

export default Row;
