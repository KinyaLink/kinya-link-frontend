import { SafeAreaView, StyleSheet, Text, ScrollView, View } from "react-native";
import { Image } from "react-native";
import React from "react";
import AuthButton from "@/components/AuthButton";

const Onboarding = () => {
  return (
    <SafeAreaView>
      <View style={styles.screenContainer}>
        <Image
          source={require("../../assets/images/kl-logo.png")}
          style={styles.image}
        />
        <View>
          <Text style={styles.titleText}>
            Welcome to Kinya<Text style={{ color: "#6060FF" }}>Link</Text>
          </Text>
          <Text style={styles.normalText }>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non minima
            aut corrupti deserunt. Maxime laboriosam tenetur eaque quaerat!
            Nihil modi accusamus nemo nesciunt nostrum voluptatum perspiciatis
            eligendi mollitia quasi odio?
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <AuthButton buttonText="Go to Dashboard"/>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  screenContainer: {
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: "#050505",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingBottom: 200,
  },
  image: {
    position: "absolute",
    top: 40,
  },
  titleText: {
    color: "#FFF",
    fontSize: 32,
    fontFamily: "Poppins-Bold",
    textAlign: "center"
  },
  normalText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "Geist-Regular",
    textAlign: "center",
    marginTop: 20,
  },
  textContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
  },
  buttonContainer: {
    marginTop: 20,
  }
});
