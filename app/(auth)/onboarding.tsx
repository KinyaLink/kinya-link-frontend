import {
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  View,
  Pressable,
} from "react-native";
import { Image } from "react-native";
import React from "react";
import AuthButton from "~/components/AuthButton";
import { useRouter } from "expo-router";

const Onboarding = () => {
  const router = useRouter();
  return (
    <SafeAreaView>
      <View className="flex-1 bg-[#050505] flex-col justify-center items-center px-8 pb-32">
        <View>
          <Image
            source={require("../../assets/images/kl-logo.png")}
            className=""
          />
        </View>
        <View>
          <Text className="text-white text-3xl font-pbold text-center leading-9">
            Murakaza neza muri{" "}
            <Text className="text-4xl">
              Kinya<Text className="text-[#6060FF]">Link</Text>
            </Text>
          </Text>
          <Text className="text-white text-lg text-center mt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non minima
            aut corrupti deserunt. Maxime laboriosam tenetur eaque quaerat!
            Nihil modi accusamus nemo nesciunt nostrum voluptatum perspiciatis
            eligendi mollitia quasi odio?
          </Text>
        </View>
        <Pressable onPress={() => router.push("/signup")}>
          <View className="mt-5">
            <AuthButton buttonText="Go to Dashboard" />
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;
