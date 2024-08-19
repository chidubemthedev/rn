import Box from "@/components/Box";
import Greet from "@/components/Greet";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";

export default function Index() {
  const { width, height, fontScale } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          {
            width: width > 500 ? "70%" : "90%",
            height: height > 600 ? "60%" : "90%",
          },
        ]}
      >
        <Text style={{ fontSize: fontScale * 50 }}>
          {width} x {height} x {fontScale}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    // width: windowWidth > 500 ? "70%" : "90%",
    // height: windowHeight > 600 ? "60%" : "90%",
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
