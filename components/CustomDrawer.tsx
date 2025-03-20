import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { IconSettings } from "@tabler/icons-react-native";

const CustomDrawer = () => {
  const router = useRouter();
  return (
    <View className="flex-1 items-center">
      <Image
        source={require("~/assets/images/profile-image.jpg")}
        className="w-32 h-32 rounded-full border-2 border-white/50"
      />
      <View className="gap-2">
        <TouchableOpacity onPress={() => router.replace("/(drawers)/settings")}>
          <View className="flex-row gap-2">
            <IconSettings size={28} color="#FFFFFF" />
            <Text className="text-white text-xl font-pregular">Settings</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.replace("/(drawers)/settings")}>
          <View className="flex-row gap-2">
            <IconSettings size={28} color="#FFFFFF" />
            <Text className="text-white text-xl font-pregular">Settings</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
