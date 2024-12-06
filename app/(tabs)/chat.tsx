import { View, Text, Image } from "react-native";
import React from "react";
import { IconArrowNarrowLeft } from "@tabler/icons-react-native";

const translate = () => {
  return (
    <View className="flex-1 justify-between items-center px-3 py-2">
      <View className="">
        <IconArrowNarrowLeft />
        <Image
          source={require("~/assets/images/profile-image.jpg")}
          resizeMode="contain"
          className="h-full"
        />
        <View>
          <Text>John Abraham</Text>
          <Text>Active now</Text>
        </View>
      </View>
      <View></View>
    </View>
  );
};

export default translate;
