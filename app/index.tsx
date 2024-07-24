import Greet from "@/components/Greet";
import { View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, gap: 2, backgroundColor: "plum", padding: 10 }}>
      <Greet name="Valentine" />
      <Greet name="Ngozi" />
    </View>
  );
}
