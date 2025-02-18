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
    width: 60,
    height: 60,
    position: "absolute",
    top: -5,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    fontFamily: "Geist-Bold",
    fontWeight: 900,
    width: "auto",
  },
});
