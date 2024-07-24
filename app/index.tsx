import { ActivityIndicator, Alert, Button, View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, gap: 2, backgroundColor: "plum", padding: 10 }}>
      <Button title="Alert" onPress={() => Alert.alert("Invalid Data")} />

      <Button
        title="Alert 2"
        onPress={() => Alert.alert("Invalid Data", "DOB Incorrect!")}
      />

      <Button
        title="Alert 3"
        onPress={() =>
          Alert.alert("Invalid Data", "DOB Incorrect", [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel pressed!"),
            },
            {
              text: "Save",
              onPress: () => console.log("Save pressed!"),
            },
          ])
        }
      />
    </View>
  );
}
