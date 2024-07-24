import LogoImage from "@/assets/images/adaptive-icon.png";
import { Image, ImageBackground, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum" }}>
      <ImageBackground source={LogoImage} style={{ flex: 1 }}>
        <Text>Image text</Text>
      </ImageBackground>
      <Image source={LogoImage} style={{ width: 300, height: 300 }} />
      <Image
        source={{ uri: "https://picsum.photos/320" }}
        style={{ width: 300, height: 300 }}
      />
    </View>
  );
}
