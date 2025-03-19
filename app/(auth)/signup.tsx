import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AuthButton from "~/components/AuthButton";
import LoginForm from "~/components/LoginForm";
import React, { useState } from "react";
import { Link } from "expo-router";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { IconSquare, IconSquareCheck } from "@tabler/icons-react-native";

const SignUp = () => {
  const [agreed, setAgreed] = useState(false);
  
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          height: "100%",
          paddingBottom: "30%",
          paddingHorizontal: 5,
        }}
      >
        <Image
          source={require("../../assets/images/kl-logo.png")}
          style={{ position: "absolute", top: -20 }}
        />
        <Text style={styles.title}>
          Sign
          <Text style={{ ...styles.title, color: "#6060FF" }}>Up</Text>
        </Text>
        <View>
          <LoginForm />
        </View>
        <View className="flex-row gap-3">
          <TouchableWithoutFeedback onPress={() => setAgreed(!agreed)}>
            {agreed ? (
              <IconSquareCheck size={28} color="#FFFFFF" />
            ) : (
              <IconSquare size={28} color="#FFFFFF" />
            )}
          </TouchableWithoutFeedback>
          <Text className="font-pregular text-white text-lg">
            I agree to the Terms and Conditions of KinyaLink
          </Text>
        </View>
        <Link href="/sign-in">
          <View>
            <AuthButton buttonText="Register" />
          </View>
        </Link>
      </View>
    </SafeAreaView>
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
