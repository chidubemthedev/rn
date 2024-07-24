import { Button, View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 10 }}>
      <Button
        title="Press"
        onPress={() => {
          console.log("button pressed!");
        }}
      />
    </View>
  );
}
