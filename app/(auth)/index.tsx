import { Text, View, Pressable } from "react-native";
import { Image } from "react-native";
import React from "react";
import AuthButton from "~/components/AuthButton";
import { useRouter } from "expo-router";

const Onboarding = () => {
  const router = useRouter();
  return (
    <View className="flex-1 bg-[#050505] flex-col justify-center items-center px-8 pb-32">
      <Image
        source={require("../../assets/images/kl-logo.png")}
        className="absolute -top-24"
      />
      <View className="mt-56">
        <Text className="text-white text-3xl font-pbold text-center leading-10">
          Murakaza neza muri{" "}
          <Text className="text-4xl leading-10">
            Kinya<Text className="text-[#6060FF]">Link</Text>
          </Text>
        </Text>
        <Text className="text-white text-lg leading-tight text-center mt-7 font-pregular">
          Renga inzitizi y'itumanaho usemura ibimenyetso by' ururimi rw’
          amarenga mumyandiko hanyuma uhindure n' inyandiko mu rurimi rw'
          amarenga byoroshye!
        </Text>
      </View>
      <Pressable onPress={() => router.push("/register")}>
        <View className="mt-5">
          <AuthButton buttonText="Tangira usemure ubu" goTo="./register" />
        </View>
      </Pressable>
    </View>
  );
};

export default Onboarding;
