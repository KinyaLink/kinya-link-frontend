import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StyleSheet, Text, View } from "react-native";
import TabBarButton from "@/components/TabBarButton";
import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
  return (
    <Tabs initialRouteName="dashboard"
    screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: {
        height: 80,
      }
    }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: () => (
            <TabBarButton
              tabBarLabel="Home"
              tabBarIcon={
                <MaterialCommunityIcons name="home" size={36} color="black" />
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Dashboard",
          tabBarIcon: () => (
            <TabBarButton
              tabBarLabel="Dashboard"
              tabBarIcon={
                <MaterialCommunityIcons
                  name="view-dashboard"
                  size={36}
                  color="black"
                />
              }
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
