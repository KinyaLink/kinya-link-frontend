import { Text, ScrollView, View, TouchableOpacity } from "react-native";
import React from "react";
import Header from "~/components/Header";
import { IconClock } from "@tabler/icons-react-native";
import CallsChart from "~/components/CallsChart";
import { Link } from "expo-router";
import Drawer from "expo-router/drawer";

const Index = () => {
  return (
    <ScrollView className="px-3 py-6 bg-[#050505] flex-1 pb-12">
      <View className="flex-1 w-full mt-3">
        <Header />
      </View>
      <View className="mt-3">
        <Text className="text-white font-pregular leading-tight">
          Ikaze mu !!
        </Text>
        <Text className="font-pbold text-white/50 text-2xl">Urukari</Text>
        <Link href="../more">
          <Text className="text-white">hvhvu</Text>
        </Link>
      </View>
      <Drawer />
      <View className="flex-1 flex-row gap-2 mt-3">
        <TouchableOpacity className="px-5 py-2 w-fit flex bg-[#151515] rounded-full">
          <Text className="text-white/50 font-pregular">Imikoreshereze</Text>
        </TouchableOpacity>
        <TouchableOpacity className="px-5 py-2 w-fit flex bg-[#151515] rounded-full">
          <Text className="text-white/50 font-pregular">Isesengura</Text>
        </TouchableOpacity>
        <TouchableOpacity className="px-5 py-2 w-fit flex bg-[#151515] rounded-full">
          <Text className="text-white/50 font-pregular">Ibyabaye</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-1 flex-row justify-between p-3 px-4 rounded-3xl bg-[#151515] mt-3">
        <View>
          <Text className="text-white text-2xl font-plight tracking-tight">
            <Text className="text-[#7F74F5]">John</Text> Doe
          </Text>
          <Text className="text-white font-plight">Kumurongo</Text>
        </View>
        <View className="bg-[#202020] w-14 rounded-full border-2 border-white/10 h-full"></View>
      </View>
      <View className="flex-1 flex-row gap-3 mt-3">
        <View className="flex gap-6 w-1/2 bg-[#151515] px-4 pb-5 pt-4 rounded-3xl">
          <View className="flex flex-row justify-end">
            <IconClock color="#FFFFFF50" size={45} />
          </View>
          <View>
            <Text className="font-pregular text-white text-2xl">
              AirTime Usage
            </Text>
            <Text className="text-white/50">1hr 38mins</Text>
          </View>
        </View>
        <View className="flex-1 flex-col h-full gap-3">
          <View className="flex-1 h-1/2 bg-[#151515] rounded-3xl"></View>
          <View className="flex-1 h-1/2 bg-[#151515] rounded-3xl"></View>
        </View>
      </View>
      <View className="flex-1 flex-row h-36 gap-3 mt-3">
        <View className="flex-1 bg-[#151515] rounded-3xl"></View>
        <View className="flex-1 bg-[#151515] rounded-3xl"></View>
        <View className="flex-1 bg-[#151515] rounded-3xl"></View>
      </View>
      <CallsChart />
    </ScrollView>
  );
};

export default Index;
