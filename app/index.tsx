import { ActivityIndicator, View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 10 }}>
      <ActivityIndicator />
      <ActivityIndicator size={"large"} />
      <ActivityIndicator size={"large"} color={"midnightblue"} />
      <ActivityIndicator
        size={"large"}
        color={"midnightblue"}
        animating={false}
      />
    </View>
  );
}
