import { View, Text } from "react-native";
import React, { useEffect } from "react";
import LottieView from "lottie-react-native";

const Loading = () => {
  return (
    <View className="flex-1 w-full h-full justify-center items-center">
      <LottieView
        autoPlay
        style={{
          width: 200,
          height: 200,
          backgroundColor: "transparent",
        }}
        source={require("~/assets/animations/animation-1.json")}
      />
      <Text>Loading..</Text>
    </View>
  );
};

export default Loading;
