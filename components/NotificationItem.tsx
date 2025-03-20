import { View, Text } from "react-native";
import React from "react";

const NotificationComponent = ({
  person,
  notificationType,
}: {
  person: string;
  notificationType: string;
}) => {
  return (
    <View className="w-full flex-col px-4 py-4 bg-[#0F0F0F] relative rounded-2xl pl-6">
      <View className="absolute left-2 top-4 w-1 h-full bg-[#6060FF] rounded-lg"/>
      <Text className="text-white text-lg font-pbold">{person}</Text>
      <Text className="text-white/60 font-pregular">{notificationType}</Text>
    </View>
  );
};

export default NotificationComponent;
