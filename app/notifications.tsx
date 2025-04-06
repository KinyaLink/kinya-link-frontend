import { View, Text } from "react-native";
import React from "react";
import Header from "~/components/Header";
import NotificationComponent from "~/components/NotificationItem";

const Notifications = () => {
  return (
    <View className="flex-1 h-full px-4 py-10 pt-5 gap-3 bg-[#050505]">
      <Header />
      <View className="flex-col ">
        <Text className="text-white font-pregular text-xl leading-tight">
          Reba
        </Text>
        <Text className="font-pbold text-white/80 text-lg leading-tight">
          Imenyesha
        </Text>
      </View>
      <View className="gap-2">
        <NotificationComponent
          person="Izabayo Nadine"
          notificationType="Guhamagara"
        />
        <NotificationComponent
          person="R Yvan"
          notificationType="Yakubuze"
        />
        <NotificationComponent
          person="Mugisha Pascal"
          notificationType="Yitabwe"
        />
      </View>
    </View>
  );
};

export default Notifications;
