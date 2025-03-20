import { Text, View } from "react-native";
import React from "react";

interface TabBarButtonProps {
  tabBarLabel?: string;
  tabBarIcon: any;
}

const TabBarButton = ({ tabBarLabel, tabBarIcon }: TabBarButtonProps) => {
  return (
    <View className="flex w-14 h-14 absolute top-2 flex-col justify-center items-center">
      <View className="justify-center align-center">{tabBarIcon}</View>
      <Text className="text-sm text-white font-plight w-auto">{tabBarLabel}</Text>
    </View>
  );
};

export default TabBarButton;
