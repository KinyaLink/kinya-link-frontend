import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import CallListItem from "~/components/CallListItem";

const index = () => {
  return (
    <ScrollView className="flex-1 bg-[#0F0F0F]">
      <View className="mb-20 mt-3">
        <CallListItem />
        <CallListItem />
        <CallListItem />
      </View>
    </ScrollView>
  );
};

export default index;
