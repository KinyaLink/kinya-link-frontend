import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";

interface Props {
  buttonText: string;
  goTo: string;
}
const AuthButton = ({ buttonText, goTo }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          console.log("Simulated..");
          router.push(goTo as any)
        }, 2000);
      }}
    >
      <View>
        {isLoading ? (
          <ActivityIndicator size={28} color="#FFFFFF" />
        ) : (
          <Text style={styles.text}>{buttonText}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 250,
    backgroundColor: "#6060FF",
    paddingVertical: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  text: {
    color: "white",
    fontFamily: "Poppins-Bold",
    fontSize: 16,
  },
});
export default AuthButton;
