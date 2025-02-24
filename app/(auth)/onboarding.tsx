import { SafeAreaView, StyleSheet, Text, ScrollView, View } from "react-native";
import { Image } from "react-native";
import React from "react";
import AuthButton from "~/components/AuthButton";

const Onboarding = () => {
  return (
    <SafeAreaView>
      <View className="flex w-full h-full bg-[#050505] flex-col justify-end items-center px-8 pb-32">
        {/* <Image
          source={require("../../assets/images/kl-logo.png")}
          className="absolute top-10"
        /> */}
        <View>
          <Text className="text-white text-4xl font-bold text-center">
            Welcome to Kinya<Text className="text-[#6060FF]">Link</Text>
          </Text>
          <Text className="text-white text-lg text-center mt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non minima
            aut corrupti deserunt. Maxime laboriosam tenetur eaque quaerat!
            Nihil modi accusamus nemo nesciunt nostrum voluptatum perspiciatis
            eligendi mollitia quasi odio?
          </Text>
        </View>
        <View className="mt-5">
          <AuthButton buttonText="Go to Dashboard"/>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;