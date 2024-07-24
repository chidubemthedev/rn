import {
  Button,
  Image,
  Modal,
  Pressable,
  StatusBar,
  Text,
  View,
} from "react-native";
import Logo from "@/assets/images/adaptive-icon.png";
import { useState } from "react";

export default function Index() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 10 }}>
      <StatusBar backgroundColor="red" barStyle={"default"} hidden />
    </View>
  );
}
