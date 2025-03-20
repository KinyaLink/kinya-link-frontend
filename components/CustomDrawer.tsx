import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { IconLogout2, IconSettings, IconTax } from "@tabler/icons-react-native";

const CustomDrawer = () => {
  const router = useRouter();
  return (
    <View className="flex-1 items-center pt-8">
      <View className="border-b border-white/10">
        <Image
          source={require("~/assets/images/profile-image.jpg")}
          className="w-32 h-32 rounded-full border-2 border-white/50"
        />
        <Text className="text-white font-psemibold text-lg pt-2 pb-3">
          Arman Rokni
        </Text>
      </View>
      <View className="gap-2">
        <TouchableOpacity onPress={() => router.replace("/(drawers)/settings")}>
          <View className="flex-row w-full px-4 py-3 gap-3 items-center">
            <IconSettings size={30} color="#FFFFFF" />
            <Text className="text-white/80 text-lg font-pregular">
              Guhindura
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.replace("/(drawers)/settings")}>
          <View className="flex-row w-full px-4 py-3 gap-3 items-center">
            <IconTax size={30} color="#FFFFFF" />
            <Text className="text-white/80 text-lg font-pregular">
              Uburyo bwo kwishyura
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.replace("/")}>
          <View className="flex-row w-full px-5 py-3 gap-3 items-center">
            <IconLogout2 size={30} color="#FFFFFF" />
            <Text className="text-white/80 text-lg font-pregular">
              Gusohoka
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
