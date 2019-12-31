import React from "react";
import { View, StyleSheet } from "react-native";

const Ball = () => {
  return <View style={styles.ball} />;
};

const styles = StyleSheet.create({
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: "black"
  }
});

export default Ball;
