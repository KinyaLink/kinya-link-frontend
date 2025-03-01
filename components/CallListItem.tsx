import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { PhoneMissed } from "lucide-react-native";

const CallListItem = () => {
  const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.push("/recent-caller/index")}>
      <View className="flex flex-1 rounded-xl flex-row justify-between items-center px-1 py-3">
        <View className="flex-row gap-4 items-center">
          <View className="h-auto w-auto rounded-full p-2 border-2 border-violet-500 bg-[#202020]">
            <Image
              source={require("~/assets/images/favicon.png")}
              resizeMode="contain"
            />
          </View>
          <View className="">
            <Text className="font-pregular tracking-tighter text-white text-2xl">
              Arman Rokni
            </Text>
            <Text className="text-white/50 font-plight text-lg">Missed</Text>
          </View>
        </View>
        <View className="flex-col justify-center items-center gap-2">
          <View>
            <PhoneMissed color="#FF4F4F" size={30} />
          </View>
          <View>
            <Text className="font-plight text-white text-lg">11:50 AM</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CallListItem;
