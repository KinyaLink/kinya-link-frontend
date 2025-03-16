import { View, Text } from "react-native";
import React from "react";

const MessageBlob = () => {
  return (
    <View className="flex-col justify-end gap-1 px-4 py-2 w-48">
      <View className="px-4 py-2 bg-[#202020] rounded-s-xl rounded-tl-xl">
        <Text>Hello, How are u doing?</Text>
      </View>
      <Text className="text-white/80 font-plight text-md">08:00 AM</Text>
    </View>
  );
};

export default MessageBlob;
