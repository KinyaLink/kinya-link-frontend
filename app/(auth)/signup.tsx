import LoginForm from "~/components/LoginForm";
import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";

const SignUp = () => {
  return (
    <View className="items-center justify-end h-full pb-10 px-2 bg-[#0F0F0F]">
      <Image
        source={require("../../assets/images/kl-logo.png")}
        className="absolute -top-24"
      />
      <Text style={{ ...styles.title, color: "#6060FF" }}>Iyandikishe</Text>
      <LoginForm />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundColor: "#050505",
  },
  title: {
    color: "#fff",
    fontSize: 40,
    fontFamily: "Poppins-Bold",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Poppins-Regular",
  },
});
