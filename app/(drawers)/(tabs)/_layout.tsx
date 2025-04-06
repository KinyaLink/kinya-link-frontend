import React from "react";
import { Tabs } from "expo-router";
import TabBarButton from "~/components/TabBarButton";
import { House } from "lucide-react-native";
import {
  IconHistory,
  IconLanguage,
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
          backgroundColor: "#101010",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarButton
              tabBarLabel="Urukari"
              tabBarIcon={
                <House size={28} color={`${focused ? "#6060FF" : "#FFFFFF"}`} />
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarButton
              tabBarLabel="Wowe"
              tabBarIcon={
                <IconUserCircle
                  size={32}
                  color={`${focused ? "#6060FF" : "#FFFFFF"}`}
                />
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="call"
        options={{
          tabBarIcon: ({ focused }) => <CreateCall />,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarButton
              tabBarLabel="Semu.."
              tabBarIcon={
                <IconLanguage
                  size={32}
                  color={`${focused ? "#6060FF" : "#FFFFFF"}`}
                />
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="recent"
        options={{
          tabBarIcon: () => (
            <TabBarButton
              tabBarLabel="Ibyab.."
              tabBarIcon={<IconHistory size={32} color={"#FFFFFF"} />}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
