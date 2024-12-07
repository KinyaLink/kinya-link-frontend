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
    <ScrollView className="flex-1 bg-[#0F0F0F]">
      <ImageBackground
        source={require("~/assets/images/chat-background.jpg")}
        className="flex-1"
      >
        <View className="flex-1 bg-[#101010] flex-row justify-between items-center px-3 py-2">
          <View className="flex-row justify-around items-center gap-4 px-3 py-2">
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
        <View className="flex-1 flex-row gap-2">
          <Paperclip color="#FFFFFF" size={32} />
          <TextInput placeholder="Write your message here" />
          <IconMicrophone color="#FFFFFF" size={32} />
          <HandMetal color="#FFFFFF" size={32} />
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default translate;
