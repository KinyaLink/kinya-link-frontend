import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";
import AuthButton from "~/components/AuthButton";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FormInputField from "~/components/FormInputField";

const Signin = () => {
  return (
    <View className="items-center justify-end h-full pb-10 px-2 bg-[#0F0F0F]">
      <Image
        source={require("../../assets/images/kl-logo.png")}
        className="absolute -top-24"
      />
      <Text className="text-[#6060FF]">Injira</Text>
      <View className="flex-col gap-2">
        <FormInputField
          placeholder="Email"
          secureTextEntry
          icon={
            <MaterialCommunityIcons
              name="shield-check-outline"
              size={30}
              color="white"
            />
          }
        />
        <FormInputField
          placeholder="Password"
          secureTextEntry
          icon={
            <MaterialCommunityIcons
              name="shield-check-outline"
              size={30}
              color="white"
            />
          }
        />
      </View>
      <View>
        <View className="justify-center items-center">
          <AuthButton goTo="/(drawers)/(tabs)/" buttonText="Register" />
        </View>
      </View>
    </View>
  );
};

export default Signin;
