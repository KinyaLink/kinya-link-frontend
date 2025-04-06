import LoginForm from "~/components/LoginForm";
import React from "react";
import { View, Text, Image } from "react-native";

const Register = () => {
  return (
    <View className="items-center justify-end h-full pb-10 px-2 bg-[#0F0F0F]">
      <Image
        source={require("../../assets/images/kl-logo.png")}
        className="absolute -top-24"
      />
      <Text className="">Iyandikishe</Text>
      <LoginForm />
    </View>
  );
};

export default Register;
