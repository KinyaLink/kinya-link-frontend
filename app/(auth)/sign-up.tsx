import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AuthButton from "~/components/AuthButton";
import LoginForm from "~/components/LoginForm";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import { Link } from "expo-router";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

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
        <View
          style={{
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
            paddingTop: 10,
          }}
        >
          <TouchableWithoutFeedback onPress={() => setAgreed(!agreed)}>
            {agreed ? (
              <MaterialCommunityIcons
                name="checkbox-intermediate"
                size={24}
                color="#6060FF"
              />
            ) : (
              <MaterialCommunityIcons
                name="checkbox-blank-outline"
                size={24}
                color="#6060FF"
              />
            )}
          </TouchableWithoutFeedback>
          <Text style={styles.text}>
            I agree to the{" "}
            <Text
              style={{
                ...styles.text,
                color: "#6060FF",
                textDecorationLine: "underline",
              }}
            >
              Terms
            </Text>{" "}
            and{" "}
            <Text
              style={{
                ...styles.text,
                color: "#6060FF",
                textDecorationLine: "underline",
              }}
            >
              Conditions
            </Text>{" "}
            of KinyaLink
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
    fontFamily: "Geist-Regular",
  },
});
