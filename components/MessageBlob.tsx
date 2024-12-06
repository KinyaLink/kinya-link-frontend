import { View, Text, Image } from "react-native";
import React from "react";

const MessageBlob = () => {
  return (
    <View className="px-4 py-2">
      <View>
        <Text className="text-white/80 ">MessageBlob</Text>
        <Image
          source={require("~/assets/images/profile-image.jpg")}
          resizeMode="contain"
          className="h-full"
        />
        <View>
          <Text></Text>
          <Text></Text>
        </View>
      </View>
      <View></View>
    </View>
  );
};

export default MessageBlob;
