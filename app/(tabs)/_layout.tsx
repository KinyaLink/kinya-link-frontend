import React from "react";
import { Tabs } from "expo-router";
import TabBarButton from "~/components/TabBarButton";
import { House } from "lucide-react-native";
import { IconLayoutDashboard } from "@tabler/icons-react-native";

const TabsLayout = () => {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 70,
          justifyContent: "center",
          alignContent: "center",
          position: "absolute",
          bottom: 10,
          marginHorizontal: 10,
          borderRadius: 20,
          backgroundColor: "#101010",
          zIndex: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarButton
              tabBarLabel="Home"
              tabBarIcon={<House size={32} color={"#FFFFFF"} />}
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
              tabBarIcon={<IconLayoutDashboard size={32} color={"#FFFFFF"} />}
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
              tabBarIcon={<IconLayoutDashboard size={32} color={"#FFFFFF"} />}
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
              tabBarIcon={<IconLayoutDashboard size={32} color={"#FFFFFF"} />}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
