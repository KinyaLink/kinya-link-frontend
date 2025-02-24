import "../global.css";
import { View, Text } from "react-native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function Layout() {
  const [areFontsLoaded] = useFonts({
    "Poppins-Regular": require("~/assets/fonts/poppins/Poppins-Regular.ttf"),
    "Poppins-Bold": require("~/assets/fonts/poppins/Poppins-Bold.ttf"),
    "Poppins-Light": require("~/assets/fonts/poppins/Poppins-Light.ttf"),
    "Poppins-Thin": require("~/assets/fonts/poppins/Poppins-Thin.ttf"),
    "Poppins-ExtraLight": require("~/assets/fonts/poppins/Poppins-ExtraLight.ttf"),
    "Poppins-SemiBold": require("~/assets/fonts/poppins/Poppins-SemiBold.ttf"),
    "Geist-Regular": require("~/assets/fonts/geist/Geist-Regular.ttf"),
    "Geist-Light": require("~/assets/fonts/geist/Geist-Light.ttf"),
    "Geist-Thin": require("~/assets/fonts/geist/Geist-Thin.ttf"),
    "Geist-ExtraLight": require("~/assets/fonts/geist/Geist-ExtraLight.ttf"),
    "Geist-ExtraBold": require("~/assets/fonts/geist/Geist-ExtraBold.ttf"),
  });

  if (!areFontsLoaded) {
    return (
      <View className="flex justify-center items-center">
        <Text>Loading fonts...</Text>
      </View>
    );
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
