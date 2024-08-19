import Greet from "@/components/Greet";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={[styles.darkMode]}>
        <Text style={styles.darkModeText}>Style inheritance</Text>
      </View>

      <View style={[styles.box, styles.lightblueBg, styles.boxShadow]}>
        <Text>Lightblue box</Text>
      </View>
      <View style={[styles.box, styles.lightgreenBg]}>
        <Text>Lightgreen box</Text>
      </View>
      <View style={[styles.box, styles.lightgreenBg]}>
        <Text>Lightgreen box</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 2,
    backgroundColor: "plum",
    padding: 10,
    overflow: "scroll",
  },
  darkMode: {
    backgroundColor: "black",
    marginBottom: 10,
  },
  darkModeText: {
    color: "white",
    fontSize: 20,
  },
  box: {
    width: "60%",
    height: 250,
    padding: 10,
    borderRadius: 20,
  },
  lightblueBg: {
    backgroundColor: "lightblue",
  },
  lightgreenBg: {
    backgroundColor: "lightgreen",
  },
  boxShadow: {
    shadowColor: "#333",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 10, // for Android
  },
});
