import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import CallListItem from "~/components/CallListItem";
import Header from "~/components/Header";
import ChatListItem from "~/components/ChatListItem";

const Chat = () => {
  return (
    <ScrollView className="flex-1 bg-[#050505] py-5 px-4">
      <View className="mb-5">
        <Header />
      </View>
      <ScrollView>
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
      </ScrollView>
    </ScrollView>
  );
};

export default Chat;
