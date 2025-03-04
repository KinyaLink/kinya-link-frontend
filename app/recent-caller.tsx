import { ScrollView, View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React from "react";
import { IconAlignLeft } from "@tabler/icons-react-native";
import { BellIcon, Phone } from "lucide-react-native";

const RecentCaller = () => {
  return (
    <ScrollView className="bg-[#050505] px-3 py-6 flex-1">
      <View className="mt-3">
        <View className="flex-1 flex-row justify-between items-center w-full">
          <View className="flex-row items-center gap-4">
            <IconAlignLeft color="#FFFFFF80" size={32} />
          </View>
          <View>
            <BellIcon color="#FFFFFF80" size={30} />
          </View>
        </View>
      </View>
      <View className="flex-1 items-center flex-col gap-4">
        <View className="flex-1 bg-[#eeeeee50] overflow-hidden rounded-full justify-center items-center w-36 h-36">
          <Image
            source={require("~/assets/images/profile-image.jpg")}
            resizeMode="contain"
            className="h-full"
          />
        </View>
        <View className="flex-col items-center">
          <Text className="text-white/80 text-3xl tracking-tighter font-psemibold">
            Arman Rokni
          </Text>
          <Text className="text-white/50 font-pregular text-lg">
            +250795617693
          </Text>
          <Text className="text-white/50 text-lg font-pregular">
            arman.rokni@gmail.com
          </Text>
        </View>
      </View>
      <View>
        <TouchableOpacity>
          <View>
            <Phone color="#FFFFFF" size={32} />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RecentCaller;
