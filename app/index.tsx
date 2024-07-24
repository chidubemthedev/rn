import { Button, Image, Modal, Pressable, Text, View } from "react-native";
import Logo from "@/assets/images/adaptive-icon.png";
import { useState } from "react";

export default function Index() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 10 }}>
      <Button
        title="Press"
        onPress={() => {
          setIsModalVisible(true);
        }}
        color="midnightblue"
      />

      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View style={{ flex: 1, backgroundColor: "lightblue", padding: 10 }}>
          <Text>Modal Content</Text>
          <Button
            title="Close"
            onPress={() => {
              setIsModalVisible(false);
            }}
            color="midnightblue"
          />
        </View>
      </Modal>
    </View>
  );
}
