import { View, Text } from "react-native";
import React from "react";
import { Phone } from "lucide-react-native";

const CreateCall = () => {
  return (
    <View className="absolute p-5 bg-[#6060FF] rounded-full border border-violet-400">
      <Phone color="#FFFFFF" size={32} />
    </View>
  );
};

export default CreateCall;
