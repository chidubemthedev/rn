import Box from "@/components/Box";
import Greet from "@/components/Greet";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "black" }}>Box 1</Box>
      <Box style={{ backgroundColor: "green" }}>Box 2</Box>
      <Box style={{ backgroundColor: "blue", flexBasis: 140 }}>Box 3</Box>
      <Box style={{ backgroundColor: "yellow" }}>Box 4</Box>
      <Box style={{ backgroundColor: "purple" }}>Box 5</Box>
      <Box style={{ backgroundColor: "pink" }}>Box 6</Box>
      <Box style={{ backgroundColor: "orange" }}>Box 7</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    // flexDirection: "row",
    // alignItems: "flex-end",
    flexWrap: "wrap",
    // rowGap: 20,
    // columnGap: 30,
    // gap: 10,
    // height: 300,
    borderWidth: 6,
    borderColor: "red",
  },
});
