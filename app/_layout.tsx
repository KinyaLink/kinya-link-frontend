import "../global.css";
import { View, Text, Pressable } from "react-native";
import { Drawer } from "expo-router/drawer";
import { useRef, useEffect } from "react";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import LottieView from "lottie-react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { IconAlignLeft } from "@tabler/icons-react-native";

export default function Layout() {
  const animation = useRef<LottieView>(null);

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
      <GestureHandlerRootView>
        <View className="flex-1 w-full h-full justify-center items-center">
          <LottieView
            autoPlay
            ref={animation}
            style={{
              width: 200,
              height: 200,
              backgroundColor: "transparent",
            }}
            source={require("~/assets/animations/animation-1.json")}
          />
          <Text className="font-pregular text-xl">Loading..</Text>
        </View>
      </GestureHandlerRootView>
    );
  }

  return (
    <GestureHandlerRootView>
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(drawers)" options={{ headerShown: false }} />
        <Stack.Screen name="recent-caller" options={{ headerShown: false }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
