import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const DrawerLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="settings" />
      <Stack.Screen name="logout"/>
    </Stack>
  );
};

export default DrawerLayout;
