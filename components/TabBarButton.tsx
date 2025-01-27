import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface TabBarButtonProps {
  tabBarLabel?: string;
  tabBarIcon: any;
}

const TabBarButton = ({ tabBarLabel, tabBarIcon }: TabBarButtonProps) => {
  return (
    <View style={styles.container}>
      <View>{tabBarIcon}</View>
      <Text style={styles.text}>{tabBarLabel}</Text>
    </View>
  );
};

export default TabBarButton;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 3,
  },
  text: {
    fontSize: 14,
    fontFamily: "Geist-Bold",
    width: "auto",
  }
});
