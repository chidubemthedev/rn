import { Text, View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum" }}>
      <View style={{ backgroundColor: "blue", width: 200, height: 200 }}></View>
      <View
        style={{ backgroundColor: "lightblue", width: 200, height: 200 }}
      ></View>
    </View>
  );
}
