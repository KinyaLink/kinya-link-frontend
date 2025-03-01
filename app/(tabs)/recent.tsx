import { Text, ScrollView, View, TouchableOpacity } from "react-native";
import React from "react";
import Header from "~/components/Header";
import { IconClock, IconTrash } from "@tabler/icons-react-native";
import CallsChart from "~/components/CallsChart";
import CallListItem from "~/components/CallListItem";

const Recent = () => {
  return (
    <ScrollView className="px-3 py-6 bg-[#050505] flex-1">
      <View className="flex-1 w-full mt-3">
        <Header />
      </View>
      <View className="mt-3">
        <Text className="text-white font-pregular leading-tight">
          View your
        </Text>
        <Text className="font-pbold text-white/50 text-2xl">Recent calls</Text>
      </View>
      <View className="flex-1 flex-row gap-2 mt-3">
        <TouchableOpacity className="px-5 py-2 w-fit flex bg-[#151515] rounded-full">
          <Text className="text-white/50 font-pregular">All</Text>
        </TouchableOpacity>
        <TouchableOpacity className="px-5 py-2 w-fit flex bg-[#151515] rounded-full">
          <Text className="text-white/50 font-pregular">Missed</Text>
        </TouchableOpacity>
        <TouchableOpacity className="px-5 py-2 w-fit flex bg-[#151515] rounded-full">
          <Text className="text-white/50 font-pregular">Answered</Text>
        </TouchableOpacity>
        <View className="px-2 pl-4 py-2 w-fit flex-row bg-[#151515] ml-auto gap-2 items-center rounded-full">
          <Text className="text-white/50 ">Clear all</Text>
          <IconTrash color={"#FFFFFF50"}/>
        </View>
      </View>
      <View className="mb-20 mt-3">
        <CallListItem />
        <CallListItem />
        <CallListItem />
      </View>
    </ScrollView>
  );
};

export default Recent;
