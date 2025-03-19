import { View, Text } from "react-native";
import React from "react";
import { Drawer } from "expo-router/drawer";
import { useSegments } from "expo-router";

const DrawerLayout = () => {
  const segments = useSegments();
  const exclude = ["tabs", "(drawers)"];

  return (
    <Drawer  screenOptions={{ headerShown: false }}>
      {segments
        .filter((segment) => !exclude.includes(segment))
        .map((segment) => (
          <Drawer.Screen key={segment} name={segment} />
        ))}
    </Drawer>
  );
};

export default DrawerLayout;
