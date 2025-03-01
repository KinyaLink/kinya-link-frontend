import React from "react";
import { Tabs } from "expo-router";
import TabBarButton from "~/components/TabBarButton";
import { House, Languages } from "lucide-react-native";
import {
  IconHistory,
  IconUserCircle,
} from "@tabler/icons-react-native";
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
        name="profile"
        options={{
          tabBarIcon: () => (
            <TabBarButton
              tabBarLabel="Profile"
              tabBarIcon={<IconUserCircle size={32} color={"#FFFFFF"} />}
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
              tabBarLabel="Talk"
              tabBarIcon={<Languages size={32} color={"#FFFFFF"} />}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="recent"
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
