import { Text, ScrollView, View } from "react-native";
import React from "react";
import Header from "~/components/Header";

const Index = () => {
  return (
    <ScrollView className="px-3 py-6 bg-[#050505] flex-1">
      <View className="flex-1 w-full bg-[#ee]">
        <Header />
      </View>
    </ScrollView>
  );
};

export default Index;
