import React from "react";
import { Tabs } from "expo-router";
import TabBarButton from "~/components/TabBarButton";
import { ConciergeBell, House } from "lucide-react-native";
import { IconHistory, IconLayoutDashboard } from "@tabler/icons-react-native";
import CreateCall from "~/components/CreateCall";

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
          backgroundColor: "#151515",
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
        name="call"
        options={{
          tabBarIcon: () => <CreateCall />,
        }}
      />
      <Tabs.Screen
        name="translate"
        options={{
          tabBarIcon: () => (
            <TabBarButton
              tabBarLabel="Translate"
              tabBarIcon={<IconLayoutDashboard size={32} color={"#FFFFFF"} />}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="recents"
        options={{
          tabBarIcon: () => (
            <TabBarButton
              tabBarLabel="Recent"
              tabBarIcon={<IconHistory size={32} color={"#FFFFFF"} />}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
