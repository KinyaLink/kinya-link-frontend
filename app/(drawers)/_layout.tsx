import { View, Text } from "react-native";
import CustomDrawer from "~/components/CustomDrawer";
import React from "react";
import { Drawer } from "expo-router/drawer";
import { IconLogout2, IconSettings } from "@tabler/icons-react-native";

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: 250,
          backgroundColor: "#151515",
        },
        drawerActiveBackgroundColor: "#404040",
      }}
    >
      <Drawer.Screen
        name="settings"
        options={{
          drawerLabel: "Settings",
          drawerItemStyle: {
            width: "100%",
            borderRadius: 15,
          },
          drawerLabelStyle: {
            color: "#FFFFFF",
            fontSize: 16,
            fontFamily: "Poppins-Regular",
          },
          drawerIcon: () => <IconSettings size={30} color="#FFFFFF" />,
        }}
      />
      <Drawer.Screen
        name="logout"
        options={{
          drawerLabel: "Logout",
          drawerItemStyle: {
            width: "100%",
            borderRadius: 15,
          },
          drawerLabelStyle: {
            color: "#FFFFFF",
            fontSize: 16,
            fontFamily: "Poppins-Regular",
          },
          drawerIcon: () => <IconLogout2 size={30} color="#FFFFFF" />,
        }}
      />
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
