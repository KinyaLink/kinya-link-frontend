import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { PhoneMissed } from "lucide-react-native";
import { IconChecks } from "@tabler/icons-react-native";

const ChatListItem = () => {
  const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.push("/chat/inbox")}>
      <View className="flex flex-1 rounded-xl flex-row justify-between items-center px-1 py-3">
        <View className="flex-row gap-4 items-center">
          <View className="h-auto w-auto rounded-full p-2 border-2 border-white/50 bg-transparent">
            <Image
              source={require("~/assets/images/favicon.png")}
              resizeMode="contain"
            />
          </View>
          <View className="gap-1">
            <Text className="font-pregular tracking-tighter text-white text-2xl">
              Arman Rokni
            </Text>
            <Text className="text-white/50 font-plight text-lg">
              I will visit you on Friday!!
            </Text>
          </View>
        </View>
        <View className="flex-col justify-center items-center gap-2">
          <View>
            <Text className="font-plight text-white/50 text-sm">11:50 AM</Text>
          </View>
          <View>
            <IconChecks color="#FFFFFF90" size={28} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatListItem;
