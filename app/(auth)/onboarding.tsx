import { SafeAreaView, StyleSheet, Text, ScrollView, View } from "react-native";
import { Image } from "react-native";
import React from "react";

const Onboarding = () => {
  return (
    <SafeAreaView>
      <ScrollView horizontal={false}>
        <View style={styles.screenContainer}>
          <Image source={require("../../assets/images/kl-logo.png")} style={styles.image}/>
          <Text style={styles.titleText}>
            Welcome to Kinya<Text style={{ color: "#6060FF" }}>Link</Text>
          </Text>
          <Text style={styles.normalText}>Onboarding</Text>
        </View>
      </ScrollView>
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
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    position: "absolute",
    top: "-50%",

  },
  titleText: {
    color: "#FFF",
    fontSize: 36,
    fontFamily: "Poppins-Bold",
  },
  normalText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "Geist-Regular",
  },
});
