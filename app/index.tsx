import Box from "@/components/Box";
import Greet from "@/components/Greet";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "black", alignSelf: "flex-start" }}>
        Box 1
      </Box>
      <Box style={{ backgroundColor: "green", alignSelf: "flex-end" }}>
        Box 2
      </Box>
      <Box style={{ backgroundColor: "blue", alignSelf: "center" }}>Box 3</Box>
      <Box style={{ backgroundColor: "yellow", alignSelf: "stretch" }}>
        Box 4
      </Box>
      <Box style={{ backgroundColor: "purple" }}>Box 5</Box>
      <Box style={{ backgroundColor: "pink" }}>Box 6</Box>
      <Box style={{ backgroundColor: "orange" }}>Box 7</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "row",
    alignItems: "flex-end",
    borderWidth: 6,
    borderColor: "red",
  },
});
