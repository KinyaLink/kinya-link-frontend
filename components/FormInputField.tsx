import { View, StyleSheet, TextInput, TextInputProps } from "react-native";
import React from "react";

interface Props extends TextInputProps {
  icon: JSX.Element;
  placeholder: string;
}

const FormInputField = ({ icon, placeholder, onChangeText, onBlur, ...props }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>{icon}</View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onBlur={onBlur}
        placeholderTextColor="#FFFFFF90"
        {...props}
      />
    </View>
  );
};

export default FormInputField;

const styles = StyleSheet.create({
  input: {
    flexDirection: "row",
    height: 55,
    fontFamily: "Poppins-Regular",
    color: "white",
    paddingLeft: 50,
    paddingRight: 10,
    fontSize: 18,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#FFFFFF20",
    backgroundColor: "#15151500",
  },
  container: {
    position: "relative",
    width: 370,
  },
  icon: {
    position: "absolute",
    left: 10,
    top: 10,
    opacity: 0.8,
    zIndex: 2,
  },
});