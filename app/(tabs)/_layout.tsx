import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StyleSheet, Text, View } from "react-native";
import TabBarButton from "@/components/TabBarButton";
import { Tabs } from "expo-router";
import React from "react";
import Index from ".";
import { House } from "lucide-react-native";
import { IconLayoutDashboard } from "@tabler/icons-react-native";

const TabsLayout = () => {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          justifyContent: "center",
          alignContent: "center",
          position: "relative",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarButton
              tabBarLabel="Home"
              tabBarIcon={<House size={32} color={"#505050"} />}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="panel"
        options={{
          tabBarIcon: () => (
            <TabBarButton
              tabBarLabel="Panel"
              tabBarIcon={<IconLayoutDashboard size={32} color={"#505050"} />}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: () => (
            <TabBarButton
              tabBarLabel="Profile"
              tabBarIcon={<IconLayoutDashboard size={32} color={"#505050"} />}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="feed"
        options={{
          tabBarIcon: () => (
            <TabBarButton
              tabBarLabel="Feed"
              tabBarIcon={<IconLayoutDashboard size={32} color={"#505050"} />}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
