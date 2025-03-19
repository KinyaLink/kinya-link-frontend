import { View, Text, Image } from "react-native";
import React from "react";
import {
  DrawerItemList,
  DrawerItem,
  DrawerContentScrollView,
} from "@react-navigation/drawer";

const CustomDrawer = ({props}: {props: any}) => {
  return (
    <View>
      <View>
        <Image source={require("~/assets/images/profile-image.jpg")} alt="" resizeMode="contain"/>
      </View>
      <Text>CustomDrawer</Text>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
