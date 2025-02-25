import { Text, ScrollView, View } from "react-native";
import React from "react";
import Header from "~/components/Header";

const Index = () => {
  return (
    <ScrollView className="px-3 py-6 bg-[#050505] flex-1">
      <View className="flex-1 w-full bg-[#ee]">
        <Header />
      </View>
      <View className="pt-5">
        <Text className="text-white font-pregular leading-tight">Welcome!!</Text>
        <Text className="font-pbold text-white/50 text-2xl">Dashboard</Text>
      </View>
      <View>
        
      </View>
    </ScrollView>
  );
};

export default Index;
