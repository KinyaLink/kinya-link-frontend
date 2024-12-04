import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { IconArrowNarrowLeft } from "@tabler/icons-react-native";

const translate = () => {
  return (
    <ScrollView className="flex-1 bg-[#0F0F0F]">
      <View className="flex-1 justify-between items-center px-3 py-2">
        <View className="">
          <IconArrowNarrowLeft size={28} color="#FFFFFF50" />
          <View className="h-20 w-20">
            <Image
              source={require("~/assets/images/profile-image.jpg")}
              resizeMode="contain"
              className="h-20 w-20"
            />
          </View>
          <View>
            <Text>John Abraham</Text>
            <Text>Active now</Text>
          </View>
        </View>
        <View></View>
      </View>
    </ScrollView>
  );
};

export default translate;
