import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
  children?: React.ReactNode;
  style: any;
};

const Box = ({ children, style }: Props) => {
  return (
    <View style={[styles.box, style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default Box;

const styles = StyleSheet.create({
  box: {
    backgroundColor: "white",
    padding: 20,
    flexGrow: 1,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});
