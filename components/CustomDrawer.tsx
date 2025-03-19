import { View, Text, Image } from "react-native";
import React from "react";
import {
  DrawerItemList,
  DrawerItem,
  DrawerContentScrollView,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <View className="w-10 h-10">
          <Image
            source={require("~/assets/images/profile-image.jpg")}
            alt=""
            className="w-10 h-10"
            resizeMode="contain"
          />
        </View>
        <Text>CustomDrawer</Text>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
