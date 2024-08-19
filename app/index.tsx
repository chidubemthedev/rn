import Box from "@/components/Box";
import Greet from "@/components/Greet";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    alignItems: "center",
    justifyContent: "center",
  },
});
