import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface TabBarButtonProps {
  tabBarLabel?: string;
  tabBarIcon: any;
}

const TabBarButton = ({ tabBarLabel, tabBarIcon }: TabBarButtonProps) => {
  return (
    <View className="flex w-14 h-14 absolute top-[-3px] flex-col justify-center items-center">
      <View className="justify-center align-center">{tabBarIcon}</View>
      <Text className="font-lg font-psemibold w-auto">{tabBarLabel}</Text>
    </View>
  );
};

export default TabBarButton;
