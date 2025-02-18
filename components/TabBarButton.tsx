import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface TabBarButtonProps {
  tabBarLabel?: string;
  tabBarIcon: any;
}

const TabBarButton = ({ tabBarLabel, tabBarIcon }: TabBarButtonProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>{tabBarIcon}</View>
      <Text style={styles.text}>{tabBarLabel}</Text>
    </View>
  );
};

export default TabBarButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 10,
    fontFamily: "Geist-Bold",
    width: "auto",
  },
});
