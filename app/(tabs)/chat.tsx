import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import {
  IconArrowNarrowLeft,
  IconPhone,
  IconVideo,
} from "@tabler/icons-react-native";

const translate = () => {
  return (
    <ScrollView className="flex-1 bg-[#0F0F0F]">
      <View className="flex-1 flex-row justify-between items-center px-3 py-2">
        <View className="flex-row justify-around items-center gap-4 px-3 py-2">
          <IconArrowNarrowLeft size={32} color="#FFFFFF80" />
          <View className="h-16 w-16">
            <Image
              source={require("~/assets/images/profile-image.jpg")}
              className="h-full w-full rounded-full"
            />
          </View>
          <View>
            <Text className="text-white/80 font-pbold leading-tight text-lg">
              John Abraham
            </Text>
            <Text className="text-white/80 font-pregular leading-tight text-lg">
              Active now
            </Text>
          </View>
        </View>
        <View className="flex-row gap-4">
          <IconPhone color="#FFFFFF50" size={28} />
          <IconVideo color="#FFFFFF50" size={28} />
        </View>
      </View>
    </ScrollView>
  );
};

export default translate;
