import { Stack } from "expo-router";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <View>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </View>
  );
}
