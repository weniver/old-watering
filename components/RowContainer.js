import React from "react";
import { StyleSheet, View } from "react-native";

const RowContainer = props => (
  <View style={{ ...styles.container, ...props.style }}>{props.children}</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default RowContainer;
