import { Text, ScrollView, View, TouchableOpacity } from "react-native";
import React from "react";
import Header from "~/components/Header";
import {
  IconClock,
  IconSpeakerphone,
  IconTax,
  IconVideo,
} from "@tabler/icons-react-native";
import CallsChart from "~/components/CallsChart";
import Drawer from "expo-router/drawer";

const Index = () => {
  return (
    <ScrollView className="px-3 py-6 bg-[#050505] flex-1 pb-12">
      <View className="flex-1 w-full mt-3">
        <Header />
      </View>
      <View className="mt-3">
        <Text className="text-white font-pregular leading-tight">Ikaze mu</Text>
        <Text className="font-pbold text-white/50 text-2xl">Urukari</Text>
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
            <Text className="font-pregular text-white text-xl leading-tight">
              AirTime Wakoresheze
            </Text>
            <Text className="text-white/50 font-pregular">1hr 38mins</Text>
          </View>
        </View>
        <View className="flex-1 flex-col h-full gap-3">
          <View className="flex-1 h-1/2 bg-[#151515] rounded-3xl"></View>
          <View className="flex-1 h-1/2 bg-[#151515] rounded-3xl"></View>
        </View>
      </View>
      <View className="flex-1 flex-row h-36 gap-3 mt-3">
        <View className="flex-1 bg-[#151515] rounded-3xl items-center justify-center p-2">
          <Text className="text-white font-pregular leading-tight">
            Ifatabuguzi
          </Text>
          <Text className="text-white/50 font-pbold leading-tight pb-1">
            ryawe
          </Text>
          <View>
            <IconTax size={48} color="#FFFFFF90" />
          </View>
        </View>
        <View className="flex-1 bg-[#151515] rounded-3xl items-center justify-center p-2 gap">
          <Text className="text-white font-pregular leading-tight">Ijambo</Text>
          <Text className="text-white/50 font-pbold leading-tight pb-1">
            ry' umunsi
          </Text>
          <View>
            <IconSpeakerphone size={48} color="#FFFFFF90" />
          </View>
        </View>
        <View className="flex-1 bg-[#151515] rounded-3xl items-center justify-center p-2">
          <Text className="text-white font-pregular leading-tight">Semura</Text>
          <Text className="text-white/50 font-pbold leading-tight pb-1">
            Video
          </Text>
          <View>
            <IconVideo size={48} color="#FFFFFF90" />
          </View>
        </View>
      </View>
      <CallsChart />
    </ScrollView>
  );
};

export default Index;
