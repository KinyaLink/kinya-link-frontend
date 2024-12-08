import { View, Text } from "react-native";
import React from "react";

const MessageBlob = () => {
  return (
    <View className="px-4 py-2">
      <View className="px-4 py-2 bg-[#202020] rounded-s-xl">
        <Text>Hello, How are u doing?</Text>
      </View>
      <Text>08:00 AM</Text>
    </View>
  );
};

export default MessageBlob;
