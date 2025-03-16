import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  ImageBackground,
} from "react-native";
import React from "react";
import {
  IconArrowNarrowLeft,
  IconMicrophone,
  IconPhone,
  IconVideo,
} from "@tabler/icons-react-native";
import { HandMetal, Paperclip } from "lucide-react-native";

const translate = () => {
  return (
    <View className="flex-1 bg-[#0F0F0F]">
      <ImageBackground
        source={require("~/assets/images/chat-background.jpg")}
        resizeMode="cover"
        className="h-full w-full"
      >
        <View className="bg-[#101010] flex-row justify-between items-center px-3 py-4">
          <View className="flex-row justify-around items-center gap-4 px-3">
            <IconArrowNarrowLeft size={32} color="#FFFFFF80" />
            <View className="h-16 w-16">
              <Image
                source={require("~/assets/images/profile-image.jpg")}
                className="h-full w-full rounded-full"
              />
            </View>
            <View>
              <Text className="text-white/80 font-pbold leading-tight tracking-tight text-lg">
                John Abraham
              </Text>
              <Text className="text-white/50 font-plight leading-tight text-md">
                Active now
              </Text>
            </View>
          </View>
          <View className="flex-row gap-4">
            <IconPhone color="#FFFFFF50" size={28} />
            <IconVideo color="#FFFFFF50" size={28} />
          </View>
        </View>
        <ScrollView className="flex-1 h-full"></ScrollView>
        <View className="flex-1 flex-row gap-2">
          <Paperclip color="#FFFFFF" size={32} />
          <TextInput placeholder="Write your message here" />
          <IconMicrophone color="#FFFFFF" size={32} />
          <HandMetal color="#FFFFFF" size={32} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default translate;
