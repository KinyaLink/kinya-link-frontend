import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FormInputField from "~/components/FormInputField";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import React, {useState} from "react";
import AuthButton from "./AuthButton";
import { IconSquareCheck, IconSquare } from "@tabler/icons-react-native";

const LoginForm = () => {
  const [agreed, setAgreed] = useState(false);
  const handleSubmit = (values: {
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
  }) => {
    console.log("Form submitted with values:", values);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email should be a valid email")
      .required("Email required to continue"),
    username: Yup.string()
      .min(3, "Username should be at least 3 characters.")
      .max(20, "Too long username!!")
      .required("Username required to continue."),
    password: Yup.string()
      .min(8, "Password should be at least 8 characters.")
      .required("Password required to continue."),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Your passwords should match")
      .required("Confirm Password is required."),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      validateOnBlur={true}
      validateOnChange={true}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View className="px-10">
          <FormInputField
            value={values.email}
            onBlur={handleBlur("email")}
            onChangeText={handleChange("email")}
            placeholder="Email"
            icon={
              <MaterialCommunityIcons
                name="email-outline"
                size={30}
                color="white"
              />
            }
          />
          {errors.email && touched.email && (
            <Text className="text-red-400 font-pregular text-md pb-1">
              {errors.email}
            </Text>
          )}

          <FormInputField
            value={values.username}
            onBlur={handleBlur("username")}
            onChangeText={handleChange("username")}
            placeholder="Username"
            icon={<FontAwesome5 name="user-circle" size={30} color="white" />}
          />
          {errors.username && touched.username && (
            <Text className="text-red-400 font-pregular text-md pb-1">
              {errors.username}
            </Text>
          )}

          <FormInputField
            value={values.password}
            onBlur={handleBlur("password")}
            onChangeText={handleChange("password")}
            placeholder="Password"
            secureTextEntry
            icon={
              <MaterialCommunityIcons
                name="shield-key-outline"
                size={30}
                color="white"
              />
            }
          />
          {errors.password && touched.password && (
            <Text className="text-red-400 font-pregular pb-1">
              {errors.password}
            </Text>
          )}

          <FormInputField
            value={values.confirmPassword}
            onBlur={handleBlur("confirmPassword")}
            onChangeText={handleChange("confirmPassword")}
            placeholder="Confirm Password"
            secureTextEntry
            icon={
              <MaterialCommunityIcons
                name="shield-check-outline"
                size={30}
                color="white"
              />
            }
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <Text className="text-red-400 font-pregular text-md pb-1">
              {errors.confirmPassword}
            </Text>
          )}
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
          <View className="justify-center items-center">
            <AuthButton goTo="/(auth)/signin" buttonText="Register" />
          </View>
        </View>
      )}
    </Formik>
  );
};

export default LoginForm;

// const styles = StyleSheet.create({
//   submitButton: {
//     backgroundColor: "#6200EE",
//     padding: 10,
//     borderRadius: 5,
//     alignItems: "center",
//     marginTop: 20,
//   },
//   buttonText: {
//     color: "white",
//     fontSize: 16,
//   },
// });

