import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import Home from "./src/screens/Home";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    PopinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView>
      <View className="pt-6">
        <Home />
      </View>
    </SafeAreaView>
  );
}
