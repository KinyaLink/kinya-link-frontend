import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

interface TabBarButtonProps {
  tabBarLabel?: string;
  tabBarIcon: any;
}

const TabBarButton = ({ tabBarLabel, tabBarIcon }: TabBarButtonProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.iconContainer}>{tabBarIcon}</View>
      <Text style={styles.text}>{tabBarLabel}</Text>
    </TouchableOpacity>
  );
};

export default TabBarButton;

const styles = StyleSheet.create({
  container: {
    position: "absolute", // Makes the container span full tab bar space
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    fontFamily: "Geist-Bold",
    width: "auto",
  },
});
