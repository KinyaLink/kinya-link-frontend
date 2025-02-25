import { Text, ScrollView, View, TouchableOpacity } from "react-native";
import React from "react";
import Header from "~/components/Header";

const Index = () => {
  return (
    <ScrollView className="px-3 py-6 bg-[#050505] flex-1">
      <View className="flex-1 gap-4">
        <View className="flex-1 w-full bg-[#ee]">
          <Header />
        </View>
        <View>
          <Text className="text-white font-pregular leading-tight">
            Welcome!!
          </Text>
          <Text className="font-pbold text-white/50 text-2xl">Dashboard</Text>
        </View>
        <View className="flex-1 flex-row gap-2">
          <TouchableOpacity className="px-5 py-2 w-fit flex bg-[#151515] rounded-full">
            <Text className="text-white font-pregular">Usage</Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-5 py-2 w-fit flex bg-[#151515] rounded-full">
            <Text className="text-white/50 font-pregular">Analytics</Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-5 py-2 w-fit flex bg-[#151515] rounded-full">
            <Text className="text-white/50 font-pregular">Others</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Index;
